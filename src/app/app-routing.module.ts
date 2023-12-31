import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { BookCrudComponent } from './views/book-crud/book-crud.component';
import { BookCreateComponent } from './component/book/book-create/book-create.component';
import { BookUpdateComponent } from './component/book/book-update/book-update.component';
import { BookDeleteComponent } from './component/book/book-delete/book-delete.component';
import { BookPageComponent } from './component/book/book-page/book-page.component';
import { BookSiteComponent } from './component/book/book-site/book-site.component';

const routes: Routes = [
  {
    path:"home",
    component: HomeComponent
  },
  {
    path: "book",
    component: BookCrudComponent
  }, 
  {
    path: "book/create",
    component: BookCreateComponent
  },
  {
    path: "book/update/:id",
    component: BookUpdateComponent
  },
  {
    path: "book/delete/:id",
    component: BookDeleteComponent
  },
  {
    path: "book/page",
    component: BookPageComponent
  },
  {
    path: "book-site/:id",
    component: BookSiteComponent
  }
  
  
];
BookSiteComponent
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
