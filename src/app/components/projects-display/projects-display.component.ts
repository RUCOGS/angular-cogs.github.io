import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { FilterHeaderComponent } from '@app/components/filter-header/filter-header.component';
import { ApolloContext } from '@src/app/modules/graphql/graphql.module';
import { BackendService } from '@src/app/services/backend.service';
import { ScrollService } from '@src/app/services/scroll.service';
import { Project, ProjectFilterInput } from '@src/generated/graphql-endpoint.types';
import { gql } from 'apollo-angular';

@Component({
  selector: 'app-projects-display',
  templateUrl: './projects-display.component.html',
  styleUrls: ['./projects-display.component.css'],
  host: {
    class: 'page'
  }
})
export class ProjectsDisplayComponent implements AfterViewInit {

  @ViewChild(FilterHeaderComponent) filterHeader: FilterHeaderComponent | undefined
  @Input() projects: Partial<Project>[] = [];
  

  currentPage: number = 0;
  projectsPerPage: number = 40;
  filter: ProjectFilterInput = {};
  fillingPage: boolean = false;

  // TODO MAYBE: Find the exact amount of projects needed to fill
  //             the viewer's page. This ofcourse is dependent on
  //             a lot of factors, such as the current breakpoint, etc.

  constructor(
    private scrollService: ScrollService,
    private backend: BackendService,
  ) { 
    scrollService.scrolledToBottom.subscribe(this.onScrollToBottom.bind(this));
    this.queryUntilFillPage();
  }

  async queryUntilFillPage(filter: ProjectFilterInput | undefined = undefined) {
    if (this.fillingPage)
      return;
    this.fillingPage = true;
    let resultsLength: number = 0;
    this.scrollService.updateScrollData();
    const ogPos = this.scrollService.position;
    do {
      resultsLength = await this.addPage(filter);
      // While we haven't filled up the page and there are more projects,
      // then we continue querying to fill up the page
      this.scrollService.updateScrollData();
    } while (this.scrollService.maxPosition - ogPos < 300 && resultsLength > 0);
    this.fillingPage = false;
  }

  async onScrollToBottom() {
    await this.queryUntilFillPage();
  }

  async addPage(filter: ProjectFilterInput | undefined = undefined) {
    const result = await this.queryProjects(filter);
    if (result.length == 0)
      return 0;
    
    this.projects = this.projects.concat(result);
    this.currentPage++;
    return result.length;
  }

  async queryProjects(filter: ProjectFilterInput | undefined = undefined) {
    if (filter !== undefined)
      this.filter = filter;
    const results = await this.backend.query<{
      projects: {
        // Result type
        avatarLink: string, 
        displayName: string,
        projectname: string,
        bio: string,
      }[]
    }>({
      query: gql`
        query($filter: ProjectFilterInput, $limit: Int, $skip: Int) {
          projects(filter: $filter, limit: $limit, skip: $skip) {
            avatarLink
            displayName
            projectname
          }
        }
      `,
      variables: {
        // Pagination
        // TODO EVENTUALLY: Use cursor pagination once Typetta suppoorts that
        skip: this.currentPage * this.projectsPerPage,
        limit: this.projectsPerPage,
        filter: this.filter
      },
      context: <ApolloContext>{
        authenticate: true,
      }
    }).toPromise();
    console.log(results);
    if (results.error)
      return [];
    return <Partial<Project>[]>results.data.projects;
  }

  resetPages() {
    this.projects = [];
    this.currentPage = 0;
  }

  ngAfterViewInit(): void {
    if (!this.filterHeader)
      return;
    
    // NOTE: This is really inefficient because we are regenerating the entire sortedSections array
    //       whenever the project changes a filter option. We should consider only modifying parts of
    //       of the sorted array that are needed (ie. only reversing the sortedSections if sortAscending 
    //       changes).
    this.filterHeader.newSearchRequest.subscribe(this.onNewSearchRequest.bind(this));
  }

  async onNewSearchRequest(searchText: string) {
    if (this.filterHeader === undefined)
      return;
    
    searchText = searchText.toLowerCase();
    
    this.resetPages();

    if (searchText === "") {
      await this.queryUntilFillPage({});
      return;
    }

    await this.queryUntilFillPage({
      name: { 
        startsWith: searchText, 
        mode: 'INSENSITIVE' 
      }
    });
  }
}