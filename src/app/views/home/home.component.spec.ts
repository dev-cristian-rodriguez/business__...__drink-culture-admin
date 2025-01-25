import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentf } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponentf;
  let fixture: ComponentFixture<HomeComponentf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponentf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponentf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
