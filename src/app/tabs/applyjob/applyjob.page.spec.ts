import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplyjobPage } from './applyjob.page';

describe('ApplyjobPage', () => {
  let component: ApplyjobPage;
  let fixture: ComponentFixture<ApplyjobPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyjobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
