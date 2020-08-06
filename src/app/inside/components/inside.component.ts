import { Component, OnInit } from '@angular/core';
import { People } from '../../models/people.model';
import { ObjetoServicio } from '../../models/objeto-servicio.model';
import { PeopleService } from '../../core/services/people/people.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.scss']
})

export class InsideComponent implements OnInit {

  people: People[] = [];

  objetoServicio: ObjetoServicio;

  constructor(
    private peopleService : PeopleService
  ) { }

  ngOnInit(): void {
    this.fetchPeople();
  }

  fetchPeople(){
     this.peopleService.getPeople()
    .subscribe(result => {
      this.objetoServicio = result;
      this.people = this.objetoServicio.data;
      console.log(this.people);
    }); 
    console.log(this.objetoServicio);
  }

}
