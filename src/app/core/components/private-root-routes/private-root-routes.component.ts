import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-private-root-routes',
  templateUrl: './private-root-routes.component.html',
  styleUrls: ['./private-root-routes.component.css']
})
export class PrivateRootRoutesComponent implements OnInit {

  tenancyUrlParam$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log(this.route);

    this.tenancyUrlParam$ = this.route.params.pipe(
      map(params => params.tenancy)
    );



  }

}
