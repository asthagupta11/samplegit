import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }
  logstatus(status:string){
    console.log("Logging service:"+status);
  }
}
