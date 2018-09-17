import {
  Component,
  OnInit,
  Input,
  ViewChild,
  TemplateRef,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';

export interface NavLink {
  displayName: string;
  url: string;
}

export interface DropdownGroup {
  title?: string;
  dropdownItems?: NavLink[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input()
  dropdownGroups: DropdownGroup[];

  isCollapsed = true;

  constructor() {}
  ngOnInit() {}

  ngOnChanges(changes: any) {}
}
