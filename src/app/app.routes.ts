import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'home', component:HomeComponent}
];