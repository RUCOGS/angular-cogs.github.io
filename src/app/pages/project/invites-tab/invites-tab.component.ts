import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProcessMonitor } from '@src/app/classes/process-monitor';
import { BackendService } from '@src/app/services/backend.service';
import { BreakpointManagerService } from '@src/app/services/breakpoint-manager.service';
import { deepClone } from '@src/app/utils/utils';
import { Project, ProjectInvite, ProjectInviteSubscriptionFilter } from '@src/generated/graphql-endpoint.types';
import { gql } from 'apollo-angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PartialDeep } from 'type-fest';
import { DefaultProjectOptions, ProjectOptions } from '../project-page/project-page.component';

@Component({
  selector: 'app-invites-tab',
  templateUrl: './invites-tab.component.html',
  styleUrls: ['./invites-tab.component.css']
})
export class InvitesTabComponent implements OnChanges, OnDestroy {

  @Output() edited = new EventEmitter();

  @Input() project: PartialDeep<Project> = {};
  @Input() projectOptions: ProjectOptions = DefaultProjectOptions;

  monitor = new ProcessMonitor();
  displayedColumns: string[] = ['user', 'type', 'buttons'];
  filteredInvites: PartialDeep<ProjectInvite>[] = [];

  protected onDestroy$ = new Subject();

  constructor(
    private backend: BackendService,
    private breakpointManager: BreakpointManagerService,
  ) { }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['project']) {
      this.monitor.removeProcess();
      if (this.project.invites)
        this.filteredInvites = deepClone(this.project.invites) as PartialDeep<ProjectInvite>[];
    }
  }
  
  onNewSearchRequest(searchText: string) {
    if (searchText === "") {
      this.filteredInvites = deepClone(this.project.invites) as PartialDeep<ProjectInvite>[];
    } else {
      this.filteredInvites = (this.project.invites as PartialDeep<ProjectInvite>[])!.filter(x => x.user!.username!.indexOf(searchText) > -1);
      this.filteredInvites = this.filteredInvites.sort((a, b) => { return b.user!.username!.indexOf(searchText) - a.user!.username!.indexOf(searchText); });
    }
  }

  async onAcceptInvite(invite: PartialDeep<ProjectInvite>) {
    if (this.monitor.isProcessing)
      return;
    this.monitor.addProcess();
    const result = await this.backend.withAuth().mutate<boolean>({
      mutation: gql`
        mutation AcceptProjectInvite($inviteId: ID!) {
          acceptProjectInvite(inviteId: $inviteId)
        }
      `,
      variables: {
        inviteId: invite.id
      }
    }).toPromise();

    if (result.errors)
      return;
    
    // Handled by subscription instead
    // this.edited.emit();
  }

  async onRejectInvite(invite: PartialDeep<ProjectInvite>) {
    if (this.monitor.isProcessing)
      return;
    this.monitor.addProcess();
    const result = await this.backend.withAuth().mutate<boolean>({
      mutation: gql`
        mutation RejectProjectInvite($inviteId: ID!) {
          deleteProjectInvite(inviteId: $inviteId)
        }
      `,
      variables: {
        inviteId: invite.id
      }
    }).toPromise();

    if (result.errors)
      return;
    
    // Handled by subscription instead
    // this.edited.emit();
  }
}
