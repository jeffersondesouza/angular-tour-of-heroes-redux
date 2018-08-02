import { map } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() tenancy: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    /*  console.log(this.route);



     this.route.queryParams.pipe(
       map(params => console.log(params))
     ).subscribe();


     this.route.queryParamMap.pipe(
       map(params => console.log(params))
     ).subscribe(); */

  }


  onLogout() {
    this.router.navigate(['/']);
  }

}
