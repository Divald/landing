import { ApplicationConfig } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideHttpClient(withFetch())

  ]
  
};


function provideHttpClient(arg0: any): import("@angular/core").Provider | import("@angular/core").ImportedNgModuleProviders {
  throw new Error("Function not implemented.");
}

function provideClientHydration(): import("@angular/core").Provider | import("@angular/core").ImportedNgModuleProviders {
  throw new Error("Function not implemented.");
}

function withFetch(): any {
  throw new Error("Function not implemented.");
}

