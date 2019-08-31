import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileService } from './service/profile.service';
import{FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
