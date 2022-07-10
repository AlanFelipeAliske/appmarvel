import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../main/header/header.component';
import { MainComponent } from '../main/main.component';
import { FooterComponent } from '../main/footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { CharacterComponent } from 'src/app/shared/components/character/character.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HomeModule,
/*     RouterModule.forRoot([
      {
        //path: '', component: MainComponent
      }
    ]) */
  ]
})
export class HomeModule { }
