import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './components/AdPage/main-page/main-page.component';
import { NotFoundComponent } from './components/AdPage/not-found/not-found.component';
import { ProfileComponent } from './components/lk/profile/profile.component';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: 'lk',
        component: ProfileComponent
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