import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CreategameComponent } from './creategame/creategame.component';
import { YourgameComponent } from './yourgame/yourgame.component';
import { ModifygameComponent } from './modifygame/modifygame.component';
import { AllcommantComponent } from './allcommant/allcomment.component';
import { YourcommantComponent } from './yourcommant/yourcommant.component';
import { CreatecommentComponent } from './createcomment/createcomment.component';
import { ModifycommantComponent } from './modifycommant/modifycomment.component';
import { ModifynameComponent } from './modifyname/modifyname.component';
import { AuthGuard } from './_guards';

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',       component: ComponentsComponent },
    { path: 'login',                component: LoginComponent },
    { path: 'register',             component: RegisterComponent },
    { path: 'profile',     component: ProfileComponent},
    { path: 'creategame',     component: CreategameComponent },
    { path: 'yourgame',     component: YourgameComponent },
    { path: 'modifygame',     component: ModifygameComponent },
    { path: 'allcommant',     component: AllcommantComponent },
    { path: 'yourcommant',     component: YourcommantComponent },
    { path: 'createcommant',     component: CreatecommentComponent },
    { path: 'modifycommant',     component: ModifycommantComponent },
    { path: 'modifyname',     component: ModifynameComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes),
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
