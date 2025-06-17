import { Routes } from '@angular/router';
import { UserComponent } from './user-component/user-component';
import { ActivityComponent } from './activity-component/activity-component';

export const routes: Routes = [
    {path: 'api/users', component: UserComponent},
    {path: 'api/activities', component: ActivityComponent},
];
