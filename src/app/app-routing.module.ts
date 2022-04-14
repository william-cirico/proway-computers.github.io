import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: "produtos", loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
    { path: 'contato', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
    { path: "", redirectTo: "/produtos", pathMatch: "full" },
    { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
    { path: "**", component: NotFoundComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }