import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './components/AdPage/main-page/main-page.component';
import { NotFoundComponent } from './components/AdPage/not-found/not-found.component';
import { ProfileComponent } from './components/lk/profile/profile.component';
import { MyTeamComponent } from './components/lk/my-team/my-team.component';
import { TopTeamComponent } from './components/lk/top-team/top-team.component';
import { MyTournamentsComponent } from './components/lk/my-tournaments/my-tournaments.component';

export const routesLk: Routes = [
    {
        path: 'myTeam',
        component: MyTeamComponent
    },
    {
        path: 'topTeam',
        component: TopTeamComponent
    },
    {
        path: 'myTours',
        component: MyTournamentsComponent
    },
    {
        path: 'regTour',
        component: NotFoundComponent
    }
];

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: 'lk',
        component: ProfileComponent,
        children: routesLk
    },
    {
        path: '**',
        component: NotFoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }