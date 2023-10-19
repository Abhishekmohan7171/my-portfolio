import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { SkillsComponent } from './skills/skills.component';
import { AppShellComponent } from './app-shell/app-shell.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'',
    component:AppShellComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'works',
    component:WorksComponent
  },
  {
    path:'skills',
    component:SkillsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
