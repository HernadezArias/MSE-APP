import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showHouse(){
    this.router.navigate(['/house','all'])
  }

  search(term:String){
    let param = 'search-'+term
    this.router.navigate(['/house', param])
  }


}
