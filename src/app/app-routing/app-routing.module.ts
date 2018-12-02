import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReadingListComponent} from '../reading-list/reading-list.component';
import {ArchiveComponent} from '../archive/archive.component';
import {MainpageComponent} from '../mainpage/mainpage.component';

const routes: Routes = [
  {path: 'reading', component: ReadingListComponent},
  {path: 'archive', component: ArchiveComponent},
  {path: 'mainpage', component: MainpageComponent},
  {path: '', redirectTo: '/mainpage', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
