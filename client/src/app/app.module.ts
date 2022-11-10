import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/containers/header/header.component'
import { SearchComponent } from './components/ui/search/search.component'
import { ButtonComponent } from './components/ui/button/button.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ButtonComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
