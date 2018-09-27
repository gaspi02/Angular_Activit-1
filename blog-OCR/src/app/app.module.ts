import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {RouterModule, Routes} from '../../node_modules/@angular/router';
import {AuthService} from './services/auth.service';
import {PostsService} from './services/post.service';
import {AuthGuardService} from './services/auth-guard.service';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { PostFormComponent } from './post-list/post-form/post-form.component';
import { SinglePostComponent } from './post-list/single-post/single-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const appRoutes: Routes = [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'posts', canActivate: [AuthGuardService], component: PostListComponent},
  {path: 'posts/new', canActivate: [AuthGuardService], component: PostFormComponent},
  {path: 'posts/view/:id', canActivate: [AuthGuardService], component: SinglePostComponent},
  {path: 'posts/edit/:id', canActivate: [AuthGuardService], component: EditPostComponent},
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: '**', redirectTo: 'posts'}
];


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    PostFormComponent,
    SinglePostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    PostsService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
