import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService:HeroesService,
    private router:Router
  ) { }
  heroes:any[] = [];
  term:string;
  ngOnInit() {

    this._activatedRoute.params.subscribe(params =>{
      this.term = params['term'];
      this.heroes = this._heroesService.searchHeros(params['term']);
      console.log( this.heroes );

    });

  }
  verHeroe( idx:number){
    console.log(idx);
    this.router.navigate(['/heroe',idx]);
  }

}
