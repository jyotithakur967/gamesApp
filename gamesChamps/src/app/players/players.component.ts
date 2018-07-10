import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Object;
  constructor() { }

  ngOnInit() {
	this.players = [
	{ name: 'Dhoni' , runs: 90 } ,
	{ name: 'Virat' , runs: 78 } ,
	{ name: 'Rohit shrama' , runs: 88 }
	]
  
  }

}
