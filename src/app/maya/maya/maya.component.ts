import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-maya',
  templateUrl: './maya.component.html',
  styleUrls: ['./maya.component.scss'],
})
export class MayaComponent implements OnInit {
  @ViewChild('outputContainer')
  outputContainer: ElementRef;

  public width: number;
  public height: number;

  ngOnInit() {
    this.onResize();
  }

  onResize() {
    this.width = this.outputContainer.nativeElement.offsetWidth;

    this.height = this.width;

    console.log(this.height, 'x', this.width);
    // this.outputContainer.nativeElement.offsetHeight = this.width;
  }
}
