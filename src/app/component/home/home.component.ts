import { Component} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimeiroComponent } from '../btn-primeiro/btn-primeiro.component';
import { NewSletterFormComponent } from '../new-sletter-form/new-sletter-form.component';
import { BeneficioComponent } from '../beneficio/beneficio.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true ,
  
  imports:[
    HeaderComponent, 
    BtnPrimeiroComponent, 
    NgOptimizedImage, 
    NewSletterFormComponent, 
    BeneficioComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

}
