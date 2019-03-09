import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  interval:any;
  num:number =0;

  @Output() firedEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  startgame(){
    this.interval=setInterval((e)=>
    {
      this.firedEvent.emit(this.num+1);
      this.num++;
    }
      ,1000);
  }

  stopgame(){
    clearInterval(this.interval);
  }

}
