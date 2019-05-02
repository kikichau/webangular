import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { UserModule } from './user/user.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CreategameComponent } from './creategame/creategame.component';
import { YourgameComponent } from './yourgame/yourgame.component';
import { ModifygameComponent } from './modifygame/modifygame.component';
import { AllcommantComponent } from './allcommant/allcomment.component';
import { YourcommantComponent } from './yourcommant/yourcommant.component';
import { CreatecommentComponent } from './createcomment/createcomment.component';
import { ModifycommantComponent } from './modifycommant/modifycomment.component';
import { ModifynameComponent } from './modifyname/modifyname.component';
import { AlertComponent } from './_component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        RegisterComponent,
        LoginComponent,
        AlertComponent,
        ProfileComponent,
        YourgameComponent,
        ModifygameComponent,
        AllcommantComponent,
        YourcommantComponent,
        CreatecommantComponent,
        ModifycommantComponent,
        ModifynameComponent,
        CreategameComponent
    ],
    imports: [  
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule, 
        UserModule,
        HttpClientModule,
        BrowserModule,
        ReactiveFormsModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }