import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    SidebarComponent,
    ControlSidebarComponent,
    FooterComponent,
    ContentWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
