import { async as asyncTest, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HeaderComponent, NavLink } from './header.component';
import { By } from '@angular/platform-browser';
import { Directive, Input, Component, SimpleChange } from '@angular/core';
import { BsDropdownToggleDirective, BsDropdownModule, BsDropdownDirective } from 'ngx-bootstrap';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[routerLink]'
})
// tslint:disable-next-line:directive-class-suffix
class RouterLinkDirectiveStub {
  @Input()
  routerLink: any;
}

@Component({
  selector: 'app-test-header',
  template: '<app-header [dropdownGroups]="dropdownGroups"></app-header>'
})
class AppTestHeaderComponent {
  links: NavLink[];
  dropdownGroups: any;
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(
    asyncTest(() => {
      TestBed.configureTestingModule({
        imports: [CollapseModule.forRoot(), BsDropdownModule.forRoot()],
        declarations: [HeaderComponent, RouterLinkDirectiveStub, AppTestHeaderComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit(
    'should render normal link dropdown menu item correctly',
    asyncTest(async () => {
      const testFixture = TestBed.createComponent(AppTestHeaderComponent);
      const testComp = testFixture.componentInstance;
      testComp.dropdownGroups = [
        {
          title: 'normal',
          isUser: false,
          dropdownItems: [
            {
              displayName: 'sub',
              url: 'url',
              isAbsolute: false
            }
          ]
        }
      ];
      await testFixture.detectChanges();
      const dropdownDirective = testFixture.debugElement.query(By.directive(BsDropdownDirective));
      expect(dropdownDirective).toBeTruthy();
      const dropdown = dropdownDirective.injector.get(BsDropdownDirective);
      dropdown.show();
      await testFixture.detectChanges();

      const routerDirective = testFixture.debugElement.query(By.directive(RouterLinkDirectiveStub));
      expect(routerDirective).toBeTruthy();
    })
  );
});
