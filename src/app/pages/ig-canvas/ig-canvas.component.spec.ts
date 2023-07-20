import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgCanvasComponent } from './ig-canvas.component';

describe('IgCanvasComponent', () => {
  let component: IgCanvasComponent;
  let fixture: ComponentFixture<IgCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgCanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
