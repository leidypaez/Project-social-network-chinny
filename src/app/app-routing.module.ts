import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PublicFriendsComponent } from './components/public-friends/public-friends.component';

const routes: Routes = [
  {path: "" , component:LoginComponent },
  {path: "Registrate" , component:RegisterComponent },
  {path: "home" , component:HomeComponent },
  {path: "publication-friends" , component:PublicFriendsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
