import { Route, RouterModule } from '@angular/router';
import { StarterComponent } from './components/starter/starter.component';


const routes: Route[] = [
  {
    path: '',
    component: StarterComponent,
  },
];

export const StarterRoutingModule = RouterModule.forChild(routes);
