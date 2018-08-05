import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public-root-routes',
  templateUrl: './public-root-routes.component.html',
  styleUrls: ['./public-root-routes.component.css']
})
export class PublicRootRoutesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  /*   console.log(this.route);

    this.route.queryParams.pipe(
      map(params => console.log(params))
    ).subscribe();


    this.route.queryParamMap.pipe(
      map(params => console.log(params))
    ).subscribe();
 */
  }

}
