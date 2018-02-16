import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

export const secondLibRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule]
})
export class SecondLibModule {}
