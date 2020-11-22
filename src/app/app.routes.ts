
import {RouterModule, Routes} from '@angular/router'
import {HomeComponent} from './components/home/home.component'
import { MembersComponent } from './components/members/members.component'
import { AboutComponent } from './components/about/about.component'
import {HouseComponent} from './components/house/house.component'
import { from } from 'rxjs'

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'members', component: MembersComponent},
    {path: 'about', component: AboutComponent},
    {path: 'house/:house', component: HouseComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);