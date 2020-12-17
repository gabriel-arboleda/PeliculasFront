import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { of } from 'rxjs';
import { PeliculaService } from 'src/app/core/services/pelicula.service';
import { PeliculaFormularioComponent } from './pelicula-formulario/pelicula-formulario.component';

import { PeliculaComponent } from './pelicula.component';

describe('PeliculaComponent', () => {
  let component: PeliculaComponent;
  let dialogSpy: jasmine.Spy;
  let fixture: ComponentFixture<PeliculaComponent>;
  const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed : of({}), close: null });
  dialogRefSpyObj.componentInstance = { body: '' }
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaComponent ],
      providers:[
        PeliculaService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { myData: PeliculaFormularioComponent } }
      ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        MatCardModule,
        MatTableModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
    dialogSpy = spyOn(TestBed.inject(MatDialog), 'open').and.returnValue(dialogRefSpyObj);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
