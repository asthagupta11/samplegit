import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  users:string[]=[];
  
 
  constructor(private userservice: UserServiceService) { }

  ngOnInit() {
    this.users=this.userservice.activeUsers;
  }

  SetInactive(index:number){
    this.userservice.onsetinactive(index);
 
  }


}
