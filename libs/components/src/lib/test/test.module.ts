import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TestComponent],
  exports: [TestComponent]
})
export class TestModule {}

export { TestComponent } from './test.component';