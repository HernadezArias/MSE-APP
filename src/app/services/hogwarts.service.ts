import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Member } from '../models/member'


@Injectable({
  providedIn: 'root'
})
export class HogwartsService {

  URL_API = 'http://hp-api.herokuapp.com/api/characters/'

  houses:String[]  = ['Gryffindor','Slytherin','Hufflepuff','Ravenclaw']
  member : Member[]
  casas:{} = {};

  constructor(private http: HttpClient) {
    
    this.houses.forEach(element => {
      this.casas[`${element}`] = this.http.get<Member[]>(`${this.URL_API}house/${element}`)
    });

   }

  getHouses() {
    return this.casas
  }

  getMembers(house?: String) {
    if(house){
      return this.casas[`${house}`]
    }else return this.http.get<Member[]>(this.URL_API)
    
  }

}
