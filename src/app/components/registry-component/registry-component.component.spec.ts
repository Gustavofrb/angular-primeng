import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryComponentComponent } from './registry-component.component';

describe('RegistryComponentComponent', () => {
  let component: RegistryComponentComponent;
  let fixture: ComponentFixture<RegistryComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistryComponentComponent]
    });
    fixture = TestBed.createComponent(RegistryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
