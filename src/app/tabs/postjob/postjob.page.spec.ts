import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostjobPage } from './postjob.page';

describe('PostjobPage', () => {
  let component: PostjobPage;
  let fixture: ComponentFixture<PostjobPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostjobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
