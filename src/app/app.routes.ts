import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';   
import { AboutDetailedComponent } from './about-detailed/about-detailed.component';
import { ProductDetailedComponent } from './product-detailed/product-detailed.component';
import { ContactDetailedComponent } from './contact-detailed/contact-detailed.component';
import { FabricsComponent } from './product-detailed/fabrics/fabrics.component';
import { FlameProofComponent } from './product-detailed/flame-proof/flame-proof.component';
import { HandloomsComponent } from './product-detailed/handlooms/handlooms.component';
import { StolesComponent } from './product-detailed/stoles/stoles.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutDetailedComponent},
    {path: 'products', component: ProductDetailedComponent},
    {path: 'contact', component: ContactDetailedComponent},
    {path: 'fabrics', component: FabricsComponent},
    {path: 'flame-proof', component: FlameProofComponent},
    {path: 'handlooms', component: HandloomsComponent},
    {path: 'stoles', component: StolesComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload', useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule{}
