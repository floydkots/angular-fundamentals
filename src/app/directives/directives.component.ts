import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  show = false;
  toggles = 0;
  logs = [];
  constructor () {
  }

  ngOnInit() {
  }

  toggleParagraph () {
    this.show = !this.show;
    this.toggles += 1;
    this.logToggle();
  }

  logToggle () {
    this.logs.push(new Date().getTime());
  }
}
