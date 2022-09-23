import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModuleComponent } from './main-module.component';
import { AboutComponent } from './MainComponent/about/about.component';
import { ContactComponent } from './MainComponent/contact/contact.component';
import { HomeComponent } from './MainComponent/home/home.component';
import { ServiceComponent } from './MainComponent/service/service.component';

const routes: Routes = [{ path: '', component: MainModuleComponent ,children:[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'service',component:ServiceComponent},
  {path:'contact',component:ContactComponent},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
