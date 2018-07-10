import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games:Object;
  constructor() { }

  ngOnInit() {
  this.games = [
				{name:'Cricket', fee:100, lastDate:'5/10/2018'},
				{name:'Hockey',fee:500,lastDate:'9/9/2018'},
				{name:'football',fee:1000,lastDate:'7/9/2018'}]
  }

}
