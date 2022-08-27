import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilRowComponent } from './profil-row.component';

describe('ProfilRowComponent', () => {
  let component: ProfilRowComponent;
  let fixture: ComponentFixture<ProfilRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
