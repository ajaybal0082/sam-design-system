import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SDSExternalLinkDirective } from './external-link.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  declarations: [SDSExternalLinkDirective],
  exports: [SDSExternalLinkDirective]
})
export class SDSExternalLinkModule { }
