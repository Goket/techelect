import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
     path: 'contact',
   loadChildren: './contact/contact.module#ContactPageModule'
   },
  {
     path: 'offices',
      loadChildren: './offices/offices.module#OfficesPageModule'
     },
  
  { path: 'feedback', loadChildren: './feedback/feedback.module#FeedbackPageModule' },
  { path: 'senator', loadChildren: './senator/senator.module#SenatorPageModule' },
  { path: 'president', loadChildren: './president/president.module#PresidentPageModule' },
  { path: 'governor', loadChildren: './governor/governor.module#GovernorPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
