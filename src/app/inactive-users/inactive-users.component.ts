import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  // @Input() users:string[];
  // @Output() userSetActive = new EventEmitter<number>();
  users:string[]=[];

  constructor(private userservice: UserServiceService) { }

  ngOnInit() {
    this.users=this.userservice.inactiveUsers;
  }
  SetActive(index:number){
    //this.userSetActive.emit(index);
    this.userservice.onsetactive(index);
  }


}
