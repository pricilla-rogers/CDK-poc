import { Component, TemplateRef, ViewContainerRef } from '@angular/core';
import { ModalInjectableData } from '@rogers/cdk/common/classes';
import { ModalRef, ModalService } from '@rogers/cdk/modal';
// import { FormModalComponent } from './form-modal/form-modal.component';
import { DataService } from './data.service';
import { Router } from '@angular/router';

import { AfterViewInit, ViewChild } from '@angular/core';
import { TabsComponent } from '@rogers/cdk/tabs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(TabsComponent, { static: true }) tabs: TabsComponent;

  title = 'CDK';
  list : any=[];
  // logged:boolean=false;
  currentTab:string;

  modalRef: ModalRef;
  activeIndex: number;

  moreForm: FormGroup;
  morelist: any;

  id: string;
  
  constructor(
    private modalService: ModalService,
    private viewContainerRef: ViewContainerRef,
    private data:DataService,
    private router : Router,
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.data.content.subscribe( x=> {this.list.push(x);});
    this.setTab("basicdetails");
    this.morelist=[];

    this.moreForm=this.fb.group({
      class:['',Validators.required],
      teacher:['',Validators.required],
      schoolname:['',Validators.required],
      comments:['',Validators.required],
    })
    
    
    
    
    
   // console.log(this.list);
  }

  ngOnIt(): void {
    this.id=localStorage.getItem('token');
    
  }

   ngAfterViewInit() {
  //   // property "activeIndex" of tabs can be accessed this way
  //   this.activeIndex = this.tabs.activeIndex;
   }

  // login() {
  //   this.data.login.subscribe(res=>{this.logged=res;console.log("res",res);})
  //   this.router.navigate(['/login']);
  // }

  // logout() {
  //   this.logged=false;
  //   console.log(this.logged);
  //   this.router.navigate(['/login']);
  // }

  logout(){
    console.log("logout");
    this.authService.logout();
    this.router.navigate(['/login']);

  }

  remove(element) {
    if(this.currentTab=='moredetails')
    {
      this.morelist.forEach((value,index) => {
        if(value==element){
          this.morelist.splice(index,1);
        }
      });

    }
    else {
      this.list.forEach((value,index) => {
        if(value==element){
          this.list.splice(index,1);
        }
      });

    }
  }

  // openModalWithComponent() {
  //   const data = new ModalInjectableData({ hello: 'world' });
  //   //console.log(this.list);
  //   this.modalRef = this.modalService.open(
  //     FormModalComponent, // see ModalData1Component for more details
  //     this.viewContainerRef,
  //     null,
  //     data,
  //   )
  // }

  openModal(templateRef: TemplateRef<any>) {
    this.modalRef = this.modalService.open(
      templateRef,
      this.viewContainerRef,
      null,
    );
  }

  reset() {
    this.moreForm.reset();
  }

  setTab(tab: string){
    this.currentTab=tab;
    this.data.updateTab(this.currentTab);


  }

  addItem() :void {
    this.morelist.push(this.moreForm.value);
    console.log(this.morelist);
    this.modalRef.close();
  }
}
