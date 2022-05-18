import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, RouterModule.forRoot([], { relativeLinkResolution: 'legacy' })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
