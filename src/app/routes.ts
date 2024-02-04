import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home Page' }
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    data: { title: 'Details Page' }
  }
];

export default routeConfig;