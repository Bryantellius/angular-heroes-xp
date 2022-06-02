import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { heroes } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes = heroes;
  selectedHero?: Hero;

  constructor() {}

  ngOnInit(): void {}

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
