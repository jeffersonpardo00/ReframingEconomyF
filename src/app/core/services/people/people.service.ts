import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { People } from '../../../models/people.model'
import { ObjetoServicio } from '../../../models/objeto-servicio.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  // people_list : People[];
  // person: People;
  // objetoServicio : ObjetoServicio;

  constructor(
    private http: HttpClient
  ) { }

    getPeople(){

       return this.http.get<ObjetoServicio>('https://reqres.in/api/users')
       //.map((res: Response) => res.json().response.map((user: User) => new User().deserialize(user)));

       
       ;
    }

}
