import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BestofDetailComponent } from './bestof-detail.component';


describe('RecipeArchiveComponent', () => {
  let component: BestofDetailComponent;
  let fixture: ComponentFixture<BestofDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BestofDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestofDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
