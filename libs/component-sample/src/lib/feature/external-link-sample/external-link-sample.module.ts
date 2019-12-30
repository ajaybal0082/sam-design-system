import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExternalLinkSampleComponent } from './external-link-sample.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SDSExternalLinkModule } from '@gsa-sam/components';
@NgModule({
  imports: [FontAwesomeModule, FormsModule, CommonModule, RouterModule, SDSExternalLinkModule],
  exports: [ExternalLinkSampleComponent],
  declarations: [ExternalLinkSampleComponent],
  providers: []
})
export class ExternalLinkSampleModule {}
