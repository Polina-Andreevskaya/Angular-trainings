import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  	HeaderComponent,
  	LogoComponent,
  	FooterComponent
  ],
  declarations: [HeaderComponent, LogoComponent, FooterComponent]
})
export class CommonComponentsModule { }
