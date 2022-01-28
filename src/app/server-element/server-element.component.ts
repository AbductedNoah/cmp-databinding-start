import { Component, ContentChild, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { kill } from 'process';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,OnChanges,OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading',{static: true}) header: ElementRef;
  @ContentChild('contentP', {static: true}) contentP: ElementRef;
  constructor() { }

  ngOnChanges(change: SimpleChanges){
  }

  ngOnDestroy() {
    console.log('Destroyed');
  }

  ngOnInit(): void {
  }

}
