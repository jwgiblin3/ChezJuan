import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BestOfCardComponent } from './bestof-card.component';


describe('Header5Component', () => {
  let component: BestOfCardComponent;
  let fixture: ComponentFixture<BestOfCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BestOfCardComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestOfCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
