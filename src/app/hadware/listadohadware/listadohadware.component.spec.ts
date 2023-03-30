import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadohadwareComponent } from './listadohadware.component';

describe('ListadohadwareComponent', () => {
  let component: ListadohadwareComponent;
  let fixture: ComponentFixture<ListadohadwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadohadwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadohadwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
