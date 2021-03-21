import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NavMenuComponent } from './Component/Layouts/nav-menu/nav-menu.component';

@NgModule({
  imports: [ MatInputModule, MatIconModule, MatFormFieldModule, MatSelectModule, NavMenuComponent ],
  exports: [ MatInputModule, MatIconModule, MatFormFieldModule, MatSelectModule, NavMenuComponent ]
})


export class MaterialModule{}