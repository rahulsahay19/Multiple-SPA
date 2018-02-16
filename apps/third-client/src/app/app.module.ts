import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { secondLibRoutes } from '@first-suite/second-lib';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: 'second-lib', children: secondLibRoutes },
        { path: 'third-lib', loadChildren: '@first-suite/third-lib#ThirdLibModule' }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
