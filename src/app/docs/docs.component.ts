import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib-v8';
import { Observable } from 'rxjs';

declare var ng: any;

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class DocsComponent implements OnInit {
  
  links$: Observable<any> = this.scully.available$;

  ngOnInit() {
    // debug current pages
    this.links$.subscribe(links => {
      console.log(links);
    });
  }

  constructor(private router: Router, private route: ActivatedRoute, private scully: ScullyRoutesService) {
  }

  
}
