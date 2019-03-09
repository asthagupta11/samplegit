import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }
  activecount:number=0;
  inactivecount:number=0;

 countactive(){
   this.activecount++;
   console.log(this.activecount);
 }

 countinactive(){
  this.inactivecount++;
  console.log(this.inactivecount);
}
}
