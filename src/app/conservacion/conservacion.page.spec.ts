import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConservacionPage } from './conservacion.page';

describe('ConservacionPage', () => {
  let component: ConservacionPage;
  let fixture: ComponentFixture<ConservacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConservacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
