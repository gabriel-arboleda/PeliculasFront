import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule
  ],
  exports:[
    HeaderComponent,
    CommonModule,
    BrowserModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [
    MatDatepickerModule,
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'}
  ]
})
export class SharedModule { }
