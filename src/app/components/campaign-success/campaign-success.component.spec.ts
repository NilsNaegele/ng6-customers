import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignSuccessComponent } from './campaign-success.component';

describe('CampaignSuccessComponent', () => {
  let component: CampaignSuccessComponent;
  let fixture: ComponentFixture<CampaignSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
