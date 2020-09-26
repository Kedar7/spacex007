import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpacexFiltersComponent } from './spacex-filters.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('SearchFormComponent', () => {
  let component: SpacexFiltersComponent;
  let fixture: ComponentFixture<SpacexFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ SpacexFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trig button click', fakeAsync(() => {
    const buttonElement = fixture.debugElement.query(By.css('button'));
    spyOn(component, 'filterData');
    buttonElement.triggerEventHandler('click', null);
    tick();
    expect(component.filterData).toHaveBeenCalled();
  }));
});
