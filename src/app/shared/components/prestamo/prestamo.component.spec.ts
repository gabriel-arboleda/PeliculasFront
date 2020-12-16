import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { of } from 'rxjs';
import { PrestamoService } from 'src/app/core/services/prestamo.service';
import { PrestamoFormularioComponent } from './prestamo-formulario/prestamo-formulario.component';

import { PrestamoComponent } from './prestamo.component';

describe('PrestamoComponent', () => {
  let component: PrestamoComponent;
  let dialogSpy: jasmine.Spy;
  let fixture: ComponentFixture<PrestamoComponent>;
  const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed : of({}), close: null });
  dialogRefSpyObj.componentInstance = { body: '' }
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamoComponent ],
      providers:[
        PrestamoService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { myData: PrestamoFormularioComponent } }
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        MatDialogModule,
        MatCardModule,
        MatTableModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
    dialogSpy = spyOn(TestBed.inject(MatDialog), 'open').and.returnValue(dialogRefSpyObj);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
