import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [ MatInputModule, MatIconModule, MatFormFieldModule, MatSelectModule ],
  exports: [ MatInputModule, MatIconModule, MatFormFieldModule, MatSelectModule ]
})


export class MaterialModule{}