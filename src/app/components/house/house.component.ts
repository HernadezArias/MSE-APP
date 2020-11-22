import { Component, OnInit } from '@angular/core';
import {HogwartsService} from '../../services/hogwarts.service'
import { ActivatedRoute } from '@angular/router'
import { Member } from 'src/app/models/member';


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent  {

  constructor(public hogwarstsService: HogwartsService, 
              private activatedRoute: ActivatedRoute) { 

      this.activatedRoute.params.subscribe( params => {
        if(params['house'] === 'all'){
          this.hogwarstsService.getMembers().subscribe(
            res => {
              this.hogwarstsService.member = res
            }
          )
          
        }else if(params['house'].split('-')[0] === 'search'){
          this.searchMembers(params['house'].split('-')[1])
        }else{
        
          this.hogwarstsService.getMembers(params['house']).subscribe(
            res => {
              this.hogwarstsService.member = res
            }
            )
        }
      });
    }

  ngOnInit(): void {}

  orderByName(){
    let varNames:String[] = []
    let resultado:Member[] = []
    this.hogwarstsService.member.forEach(element => {
      
      varNames.push(element['name'])

    });
    console.log(varNames.sort())

    varNames.forEach(element => {
      resultado.push(this.hogwarstsService.member.find( name =>  name.name === element ));
    });
    
    this.hogwarstsService.member = resultado    

  }

  orderByLastName(){

    let resultado:Member[] = []
    let name:Object[] = []

    this.hogwarstsService.member.forEach(element => {
      
      name.push({'name':element['name'].split(" ")[0],'lastname':element['name'].split(" ")[1]})
      
    });
  
    
    function compare( a, b ) {
      if ( a.lastname < b.lastname ){
        return -1;
      }
      if ( a.lastname > b.lastname ){
        return 1;
      }
      return 0;
    }

    name.sort( compare );

    let ordered:String[] = []

    name.forEach(element => {
      ordered.push(`${element['name']} ${element['lastname']}`)
    });

    console.log(ordered)

    ordered.forEach(element => {
      resultado.push(this.hogwarstsService.member.find( name =>  name.name === element ));
    });
    
    this.hogwarstsService.member = resultado    

  }

  searchMembers(term:string){

    term = term.toLocaleLowerCase();
    let resultado:Member[] = []

    this.hogwarstsService.getMembers().subscribe(
      res => {

        res.forEach(element => {
          let name = element['name'].toLocaleLowerCase()
          if(name.indexOf(term) >= 0){
            resultado.push(element)
          }
        });
        this.hogwarstsService.member=resultado;

      }
    )
    
  }

}
