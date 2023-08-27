import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/model/person';
import { SearchService } from '../service/search/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  query!: string;
  searchResults: Person[] = [];
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if (params['term']) {
      this.query = decodeURIComponent(params['term']);
      this.search();
    }
  }
  search(): void {
    this.searchService.search(this.query).subscribe({
      next: (data: Person[]) => {
        console.log('data', data);
        this.searchResults = data;
      },
      error: (error) => console.log(error),
    });
  }
  clearSearch() {
    this.query = '';
    this.search();
  }
}
