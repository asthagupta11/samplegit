import { Injectable } from '@angular/core';
import {CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private counter:CounterService) { }

 activeUsers=['Max','Chris'];
 inactiveUsers=['John','Pop'];

 onsetinactive(id:number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id,1);
    this.counter.countactive();
 }

 onsetactive(id:number){
  this.activeUsers.push(this.inactiveUsers[id]);
  this.inactiveUsers.splice(id,1);
  this.counter.countinactive();
}



}
