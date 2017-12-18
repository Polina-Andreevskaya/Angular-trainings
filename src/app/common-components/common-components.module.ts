import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {HeaderComponent} from './header/header.component';
import {LogoComponent} from './logo/logo.component';
import {FooterComponent} from './footer/footer.component';
import {FinderComponent} from './finder/finder.component';
import {LoginComponent} from './login/login.component';
import {formatMinutes} from './formatMinutes.pipe';
import {ModalComponent} from './modal/modal.component';
import {BorderColorDirective} from './borderColor/border-color.directive';
import {OrderByPipe} from './order-by.pipe';
import {FilterByPipe} from './filter-by.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    formatMinutes,
    ModalComponent,
    OrderByPipe,
    FilterByPipe,
    FinderComponent
  ],
  providers: [
    FilterByPipe
  ],

  declarations: [HeaderComponent, LogoComponent, FooterComponent, FinderComponent, LoginComponent, formatMinutes, ModalComponent, BorderColorDirective, OrderByPipe, FilterByPipe]
})
export class CommonComponentsModule {
}
