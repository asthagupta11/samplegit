import { Component, ViewEncapsulation } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { AccServiceService } from './acc-service.service';
import {UserServiceService} from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None,
  providers:[AccServiceService]
})
export class AppComponent { 
  accounts:{name:string,status:string}[]=[];
  constructor(private account_service:AccServiceService,private userservice:UserServiceService){
    //console.log("app component");
  }   
  
  // oddnumbers: number[]=[];
  // evennumbers:number[]=[];
  // serverElements = [];

  // onservercreated(serverData:{serverName:string,serverContent:string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent,
  //   });
  // }

  // onblueprintcreated(serverData:{serverName:string,serverContent:string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }

  // onFired(firednumber:number){
  //   console.log(firednumber);
  //   if(firednumber%2 === 0)
  //     this.evennumbers.push(firednumber);
  //   else
  //     this.oddnumbers.push(firednumber);
    
  // }

 ngOnInit(){
   this.userservice.activeUsers;
   this.userservice.inactiveUsers;
 // this.accounts= this.account_service.accounts;
 }

 

 


 
}
