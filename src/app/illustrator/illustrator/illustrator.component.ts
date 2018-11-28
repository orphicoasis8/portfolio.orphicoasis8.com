import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, ResponseType } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-illustrator',
  templateUrl: './illustrator.component.html',
  styleUrls: ['./illustrator.component.scss'],
})
export class IllustratorComponent implements OnInit, OnDestroy {
  public articleText: string;

  // public articles: any[] = [];

  private sub: Subscription;

  public articleSources = [
    {
      title: 'Factory',
      imgPaths: ['/assets/illustrator/1Factory guides.svg'],
      articlePath: '/assets/illustrator/1Factory guides.md',
      articleText: null,
    },
    {
      title: 'Magnifying Glass and Stars',
      imgPaths: ['/assets/illustrator/2Magnifying glass and stars.svg'],
      articlePath: '/assets/illustrator/2Magnifying glass and stars.md',
      articleText: null,
    },
    {
      title: 'Gear',
      imgPaths: ['/assets/illustrator/3Gear.svg'],
      articlePath: '/assets/illustrator/3Gear.md',
      articleText: null,
    },
    {
      title: 'Wizard of Oz',
      imgPaths: ['/assets/illustrator/4WizardofOz1.svg', '/assets/illustrator/4WizardofOz2.svg'],
      articlePath: '/assets/illustrator/4WizardofOz.md',
      articleText: null,
    },
    {
      title: 'Path Join Tool Arrow',
      imgPaths: ['/assets/illustrator/5Path.JoinToolArrow.svg'],
      articlePath: null,
      articleText: null,
    },
    {
      title: 'Linear Spiral',
      imgPaths: ['/assets/illustrator/5Path.LinearSpiral.svg'],
      articlePath: null,
      articleText: null,
    },
  ];
  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this.sub = new Subscription();
    this.populateArticles();
  }

  private populateArticles() {
    this.articleSources.forEach(articleSource => {
      if (articleSource.articlePath) {
        const sub = this._http
          .get(articleSource.articlePath, { responseType: 'text' })
          // .takeUntil(componentDestroyed(this))
          .subscribe(data => (articleSource.articleText = data));
        this.sub.add(sub);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
