import { Component, OnInit } from '@angular/core';
import { HogwartsService } from '../../services/hogwarts.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  houses:object[] = [];

  constructor(public hogwartsService: HogwartsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getHouses()
  }

  getHouses(){
    
    let houses = this.hogwartsService.getHouses()
    let keys = Object.keys(houses)
    
    keys.forEach(element => {
      houses[element].subscribe(
        res => {
          let obj = {}
          obj['name'] = element
          obj['count'] = res.length
          this.houses.push(obj)
        },
        err => console.log(err)
      )
    });

    console.log(this.houses)
   
  }

  showHouse(house:String){
    this.router.navigate(['/house', house])
  }

}
