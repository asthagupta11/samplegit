import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() servercreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintcreated = new EventEmitter<{serverName:string,serverContent:string}>();

  serverElements=[];
  newServerName:string;
  newServerContent:string;
  

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.servercreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintcreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }

}
