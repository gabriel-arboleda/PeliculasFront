import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PrestamoFormularioComponent } from './prestamo-formulario.component';
import { PrestamoService } from 'src/app/core/services/prestamo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

describe('PrestamoFormularioComponent', () => {
  let component: PrestamoFormularioComponent;
  let fixture: ComponentFixture<PrestamoFormularioComponent>;
  let dialogSpy: jasmine.Spy;
  const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed : of({}), close: null });
  dialogRefSpyObj.componentInstance = { body: '' };
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamoFormularioComponent ],
      providers: [PrestamoService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { myData: PrestamoFormularioComponent } }],
      imports: [
        MatDialogModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatSelectModule,
        HttpClientTestingModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatNativeDateModule,
        MatDatepickerModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoFormularioComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
    dialogSpy = spyOn(TestBed.inject(MatDialog), 'open').and.returnValue(dialogRefSpyObj);  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
