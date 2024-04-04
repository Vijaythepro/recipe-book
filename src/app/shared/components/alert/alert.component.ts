import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
//import * as $ from 'c:/Users/1818306/Learning/web development/angular/Recepie-book/node_modules/jquery';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor() { }

  @Input() message!: string;
  @Output() close = new EventEmitter<void>();

  ngOnInit(): void {
  
  }

  onClose() {
    this.close.emit();
  }
}
