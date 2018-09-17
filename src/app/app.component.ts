import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dropdown-test';
  dropdownGroups = [
    {
      title: 'Title',
      dropdownItems: [
        {
          displayName: 'sub',
          url: 'url'
        }
      ]
    }
  ];
}
