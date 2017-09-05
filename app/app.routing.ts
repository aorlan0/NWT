import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.component';
import {AboutComponent} from './components/about.component';
import { PageNotFoundComponent }   from './components/PageNotFound';

const appRoutes: Routes = [
    {
        path:'',
        component: UserComponent
    },
    {
        path:'home',
        component: UserComponent
    },  
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export const routing: ModuleWithproviders = RouterModule.forRoot(appRoutes);