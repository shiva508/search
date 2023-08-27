import { Component, OnDestroy, OnInit } from '@angular/core';
import { Person } from '../shared/model/person';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../service/search/search.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit, OnDestroy {
  person!: Person;
  sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) {}

  async ngOnInit(): Promise<void> {
    const params = this.route.snapshot.params;
    const id = +params['id'];
    this.searchService.getById(id).subscribe((response) => {
      if (response) {
        this.person = response;
      } else {
        this.gotoList();
      }
    });
  }

  async save() {
    this.searchService.save(this.person);
    await this.gotoList();
  }
  async cancel() {
    await this.router.navigate(['/search']);
  }
  async gotoList() {
    if (this.person) {
      await this.router.navigate(['/search', { term: this.person.name }]);
    } else {
      await this.router.navigate(['/search']);
    }
  }
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
