import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public headerStyle: string;
  public headerFontSize = '2em';
  private currentIdx = 0;
  private availableFonts: string[] = [
    '"Kaushan Script", cursive',
    // '"Homemade Apple", cursive',
    // '"Limelight", cursive',
    // '"Gafata", sans-serif',
    // '"Spirax", cursive',
    // '"Montserrat Subrayada", sans-serif',
    // '"Londrina Shadow", cursive',
    // '"Nova Cut", cursive',
  ];

  public changeFont(idxShift: number) {
    // console.log(idxShift, this.currentIdx);
    const min = 0;
    const max = this.availableFonts.length - 1;
    const nextIdx = this.currentIdx + idxShift;
    // console.log(nextIdx);
    if (nextIdx < 0) {
      this.currentIdx = max;
      // console.log('maxed out');
    } else if (nextIdx > max) {
      this.currentIdx = min;
      // console.log('minned out');
    } else {
      this.currentIdx = nextIdx;
    }
    // console.log(this.currentIdx);
    this.headerStyle = this.availableFonts[this.currentIdx];
    // console.log(this.headerStyle);
  }
  constructor() {}

  ngOnInit() {
    // this.headerStyle = this.availableFonts[this.currentIdx];
    this.changeFont(0);
  }
}
