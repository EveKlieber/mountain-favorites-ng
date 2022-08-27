import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteBoxComponent } from './favorite-box.component';

describe('FavoriteBoxComponent', () => {
  let component: FavoriteBoxComponent;
  let fixture: ComponentFixture<FavoriteBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
