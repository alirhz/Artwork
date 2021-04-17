import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  data = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.data$.subscribe((value) => {
      this.data = value;
    });
  }

  favourites = [];

  addToFavourite(datus) {
    this.favourites.push(datus);
    this.dataService.setFavouriteData = this.favourites;
  }
  deleteItem(i: number): void {
    this.data.splice(i,1);
  }
}
