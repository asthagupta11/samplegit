import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AccServiceService } from '../acc-service.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

 // @Output() accountadded = new EventEmitter<{name:string,status:string}>();

  constructor(private acc_service:AccServiceService){
    console.log("new component");
    acc_service.alertstatus.subscribe(
      (status:string)=>{alert(status);}
    );

  } 

  ngOnInit() {
  }
  addacc(account_name:string,account_status:string){
    this.acc_service.AddAccount(account_name,account_status);
    //const service= new LoggingService();
   // this.logservice.logstatus(account_status);
  }


}
