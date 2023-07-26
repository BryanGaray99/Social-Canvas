import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbCanvasComponent } from './fb-canvas.component';

describe('FbCanvasComponent', () => {
  let component: FbCanvasComponent;
  let fixture: ComponentFixture<FbCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbCanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
