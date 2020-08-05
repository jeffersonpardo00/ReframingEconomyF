import { Component, OnInit } from '@angular/core';
import { People } from '../../models/people.model';
import { PeopleService } from '../../core/services/people/people.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.scss']
})

export class InsideComponent implements OnInit {

  people: People[] = [];
  result: Observable<any>;
  result_People: Observable<People[]>;

  constructor(
    private peopleService : PeopleService
  ) { }

  ngOnInit(): void {
    this.fetchPeople();
  }

  fetchPeople(){
     this.peopleService.getPeople()
    .subscribe(result => {
      this.result = result;
      this.result_People = result.data;
      // this.people = this.result_People;
      // console.log(result.data);
    }); 

    // console.log(this.people[0].id);
    // this.peopleService.getPeople();
  }

}
