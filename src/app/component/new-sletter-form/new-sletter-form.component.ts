import { Component} from '@angular/core';
import { BtnPrimeiroComponent } from '../btn-primeiro/btn-primeiro.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from 'src/app/services/newsletter.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'new-sletter-form',
  standalone: true,

  imports:[
    BtnPrimeiroComponent,
    ReactiveFormsModule
  ],

  providers:[ 
    NewsletterService,
  ],

  templateUrl: './new-sletter-form.component.html',
  styleUrls: ['./new-sletter-form.component.css']
})

export class NewSletterFormComponent {
  loading = new BehaviorSubject<boolean>(false);
  newsletterform!: FormGroup;

  // validar o formulario
  constructor(private service: NewsletterService ) {
    this.newsletterform = new FormGroup({
          nome: new FormControl('', [Validators.required]),
          email: new FormControl('', [Validators.required, Validators.email]),
      }
      
    )
  }

  onSubmit(){
    // this.loading = new BehaviorSubject<boolean>(false);

    if(this.newsletterform.value){
      // this.service.senddata(this.newsletterform.value.name, this.newsletterform.value.email).subscribe({
      //   next: () =>{
      //     this.newsletterform.reset();
      //     // this.loading.next(true);
      //   }
      //  })
      console.log(this.newsletterform.value)
    }
  }
}


