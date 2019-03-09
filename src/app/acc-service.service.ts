import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service'

@Injectable({
  providedIn: 'root'
})
export class AccServiceService {

  constructor(private log:LoggingService) { }

  accounts = [
    {
      name:'Master Account',
      status:'Active'
    },
    {
      name:'Test2',
      status:'Inactive'
    }
  ];

  AddAccount(name:string,status:string){
    this.accounts.push({name,status});
    this.log.logstatus(status);
    
   // console.log(newaccount);

  }

  ChangeStatus(id:number,status:string){
    this.accounts[id].status=status;
    this.log.logstatus(status);
  }

 
  alertstatus= new EventEmitter<string>();


}
