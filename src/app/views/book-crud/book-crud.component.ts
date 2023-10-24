import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/component/header/header.service';


@Component({
  selector: 'app-book-crud',
  templateUrl: './book-crud.component.html',
  styleUrls: ['./book-crud.component.css']
})

@Injectable()
export class BookCrudComponent implements OnInit {
  
  constructor(private router: Router, private headerService: HeaderService){
   headerService.headerData = {
      title: 'Lista de Livros',
      icon: 'storefront',
      routeUrl: '/book'
    }
  }

  
  ngOnInit(): void {}

  navigateToBookCreate(): void{
  
    this.router.navigate(['/book/create'])
    
  }
}

