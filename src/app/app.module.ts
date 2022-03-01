import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewbidsComponent } from './viewbids/viewbids.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule} from '@angular/material/slider';
import { MatCardModule} from '@angular/material/card';
import {MatTabsModule } from '@angular/material/tabs';
import {MatInputModule } from '@angular/material/input';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatListModule } from '@angular/material/list';
import { MatDatepickerModule} from '@angular/material/datepicker';
import{HttpClientModule }from '@angular/common/http';
import { MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';




@NgModule({
  declarations: [
    AppComponent,
    ViewbidsComponent
  ],
  imports: [
 
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatButtonToggleModule,
      MatButtonModule,
      MatMenuModule,
      MatToolbarModule, 
      MatIconModule,MatCheckboxModule,MatSliderModule,
      MatCardModule,MatTabsModule,MatInputModule,MatFormFieldModule,MatListModule,
      MatDatepickerModule,MatDialogModule,HttpClientModule,MatSelectModule,
      MatTableModule,MatGridListModule,MatDividerModule,MatCardModule
             
    ],
    

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


