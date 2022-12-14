// import { Component, OnInit, ViewContainerRef } from '@angular/core';

// import { ModalInjectableData } from '@rogers/cdk/common/classes';

// import { ModalRef, ModalService } from '@rogers/cdk/modal';


// import { Form,FormBuilder,FormGroup,FormsModule,ReactiveFormsModule,Validators } from '@angular/forms';
// import { DataService } from '../data.service';

// @Component({
//   selector: 'app-form-modal',
//   templateUrl: './form-modal.component.html',
//   styleUrls: ['./form-modal.component.scss']
// })
// export class FormModalComponent implements OnInit {

//   userForm: FormGroup;
//   listData:any;
//   modalRef: ModalRef;
//   tab: string;
  
  

//   // data:any;
//   constructor(private modalData: ModalInjectableData,
//      private fb: FormBuilder, private data:DataService,
//      private modalService: ModalService) {
//     // this.data = modalData.source;
//     this.listData=[];

//     this.userForm=this.fb.group({
//       name:['',Validators.required],
//       phone:['',Validators.required],
//       address:['',Validators.required],
//       percentage:['',Validators.required],
//     })
    
//   }

//   public addItem(): void{
//     this.listData.push(this.userForm.value);
//     this.data.updateData(this.userForm.value);
//     //console.log(this.listData);    
    
//   }


//   reset() {
//     this.userForm.reset();
//     // this.modalRef.close();

    
//   }

 

//   ngOnInit(): void {
//   }

// }
