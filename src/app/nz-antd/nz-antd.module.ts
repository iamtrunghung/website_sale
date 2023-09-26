import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
@NgModule({
  exports: [
    CommonModule,
    NzIconModule,
    NzToolTipModule,
    NzInputModule,
    NzButtonModule,
    NzSliderModule,
    NzInputNumberModule,
    NzSelectModule
  ]
})
export class NzAntdModule { }
