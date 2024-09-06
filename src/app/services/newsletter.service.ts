import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
 
  private endpointUrl = 'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';

  constructor() {}
    
//     senddata(nome: string, email: string): Observable<NewsletterServiceResponse> {
      
//       const data = {nome, email};
//       // return this.http.post<NewsletterServiceResponse>(this.endpointUrl, data)

//     }
}
