import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccServiceService } from '../acc-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() account:{name:string,status:string};
  @Input() id: number;
 
  constructor(private accservice:AccServiceService) { 
    console.log("account component");
    console.log(this.account);
  }

  ngOnInit() {
  }

  setTo(status:string){
    this.accservice.ChangeStatus(this.id,status);
    //this.statuschanged.emit({id: this.id, status: status});
    this.accservice.alertstatus.emit(status);
  }

}
