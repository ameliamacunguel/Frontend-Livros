import { HeaderData } from './../../component/header/header-data.model';
import { HeaderService } from 'src/app/component/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  

  constructor(private router: Router, private headerService: HeaderService){

    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: '/home'
    }
  }

   ngOnInit(): void {}
   navigateToBookCreate(): void{
  
    this.router.navigate(['/home'])
   }
}
