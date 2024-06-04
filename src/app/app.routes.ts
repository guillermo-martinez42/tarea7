import { Routes } from '@angular/router';
import { ConversionComponent } from './components/conversion/conversion.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

export const routes: Routes = [
    {path:'conversion', component:ConversionComponent},
    {path:'personajes', component:PersonajesComponent}

    
];
