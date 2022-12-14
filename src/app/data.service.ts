import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  public content= new Subject<any>();
  // public share=this.content.asObservable();

  //login
  public login=new Subject<any>();

  // updating tab for form modal
  public tab= new Subject<any>();

  constructor() { }
  updateData(text){
    this.content.next(text);
  }

  loggedData(text:boolean){
    //console.log("sample",text);
    this.login.next(text);
    
  }

  updateTab(text: string) {
    this.tab.next(text);
  }


}
