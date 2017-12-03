import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { FinderComponent } from './finder/finder.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  	HeaderComponent,
  	FooterComponent
  ],
  declarations: [HeaderComponent, LogoComponent, FooterComponent, FinderComponent]
})
export class CommonComponentsModule { }
