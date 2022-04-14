import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchTextComponent } from './search-text/search-text.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { CarrinhoModule } from './carrinho/carrinho.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchTextComponent,
    BreadcrumbComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSnackBarModule,
    CarrinhoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
