import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  NgbdDropdownBasic: any;
  NgbdButtonsCheckbox: any;
  model = {
    left: true,
    middle: false,
    right: false,
  };

  constructor() { }

  ngOnInit() {
  }

}
