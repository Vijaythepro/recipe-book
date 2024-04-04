import { RecepieService } from './../../../shared/service/recepie.service';
import { Recepie } from './../../model/recepie.model';
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.scss']
})
export class RecepieItemComponent implements OnInit{

  @Input() recepieItem:Recepie = {} as Recepie;
  @Input() index!: number;

  constructor(private recepieService: RecepieService) {
   }

  ngOnInit(): void {
  }

  recepieItemClicked() {
    // this.recepieService.recepieSelected.next(this.recepieItem);
  }

 }