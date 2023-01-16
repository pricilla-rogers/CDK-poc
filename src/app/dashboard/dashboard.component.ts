import { Component, Input, OnInit, TemplateRef, ViewContainerRef,SimpleChanges } from '@angular/core';
import { ModalComponent,ModalRef, ModalService } from '@rogers/cdk/modal';
// import { FormModalComponent} from 'src/app/form-modal/form-modal.component';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

import { ViewChild } from '@angular/core';
import { TabsComponent } from '@rogers/cdk/tabs';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { CheckboxChange } from '@rogers/cdk/form';
import { RadioChange} from '@rogers/cdk/form';
import { Platform } from '@angular/cdk/platform';
import { Link } from '@rogers/cdk/link';
import { PopoverComponent } from '@rogers/cdk/popover';
import { ElasticTile } from '@rogers/cdk/assembled/elastic-tile/elastic-tile.interface';
import { Parallax } from '@rogers/cdk/assembled/parallax/parallax.interface';
import { Footer } from '@rogers/cdk/assembled/footer';
import { Button } from '@rogers/cdk/button';
import { Info } from '@rogers/cdk/assembled/info';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
     
  hour: Array<String>=['5-6','6-7','7-8','8-9'];
  selectedtutionValue=[];
  tiles: Array<ElasticTile>;
 
  banners: Array<Info>;
  footer: Footer;
  data1={copy:{title:"Please fill the all components"}};
 
  

  // items = [{ title:'Slide1',color:'StoryBook-CDK/src/assets/image.jpeg'}, { title: 'Slide 2' }, { title: 'Slide 3' }];
  
    event: any;
  incrementCaption: any;
  decrementCaption: any;
  billboards: ({ header: string; copy: string; copyAlign: string; headerType: string; image: { src: string; mobileSrc: string; alt: string; }; ctas?: undefined; } | { header: string; copy: string; copyAlign: string; headerType: string; image: { src: string; mobileSrc: string; alt: string; }; ctas: { copy: string; val: string; variant: string; alt: string; }[]; })[];
  alert: { header: string; }[];
  fileData: { note: string; dragAndDropCopy: string; overlayCopy: string; btnFile: { copy: string; }; btnRemove: { copy: string; }; fileNotSupportedCopy: string; fileListHeading: string; };
  links: {};
  
  
      radioonChange(event: RadioChange){
      console.log("reached Headers",event)
      this.event.emit(event);
      // console.log(event.target.value);
    //  this.list.push(e.value)
    }

    handleElementClick(e: PopoverComponent) {
      console.log(e);
    }
   
    
  handleClick1(event): void {
    console.log(event);
  }
    get captions() {
      console.log('from caption');
      return {
        incrementCaption: this.incrementCaption,
        decrementCaption: this.decrementCaption,
      };
    }
    onChange(event: CheckboxChange) {
      console.log('changed: ', event);
      this.event.emit(event);
    }
  // checkboxModel: boolean = true;
  checkboxControl = new FormControl({
   
  });

 @Input() 
 imgSrc1:string="/assets/img1.jpeg"
 imgSrc2:string="/assets/img2.jpeg"
 imgSrc3:string="/assets/img3.jpeg"
 imgSrc4:string="/assets/init1.png"
 imgSrc5:string="/assets/init2.png"
 imgSrc6:string="/assets/init3.png"
 imgSrc7:string="/assets/init4.png"
 imgSrc8:string="/assets/init5.png"
 imgSrc9:string="/assets/init6.png"


 @Input() expanded = false;
 
//  @Input()
//  altTxt?: string ='Save Earth';

//  @Input()
//  figCaptionTxt?: string=
//  'The average global surface temperature has already increased by more than 1°Cin the last 140 years. In particular, according to the scientific reports of the Intergovernmental Panel on Climate Change (IPCC), the sharp increase in global warming since 1950 can no longer be explained by natural climate fluctuations. According to the sixth IPCC report from 2021, the “extent of the most recent changes in the entire climate system […] are unprecedented in many hundreds to thousands of years".Greenhouse gases such as carbon dioxide (CO2) are responsible for this, which enter the atmosphere through the burning of fossil fuels such as coal, crude oil and natural gas and through large-scale land use, for example, the deforestation of tropical rainforests, and increase the greenhouse effect. '
 
//  @Input()
//  imgOpacity?: number =1;


  @ViewChild(TabsComponent, { static: true }) tabs: TabsComponent;

  title = 'CDK';
  list : any=[];
  tution:any=[];
  teachersList:any=[];
  studentList:any=[];
  // logged:boolean=false;
  currentTab:string;

  modalRef: ModalRef;
  activeIndex: number;

  moreForm: FormGroup;
  userForm: FormGroup;
  tutionForm:FormGroup;
  morelist: any;

  id: string;
  
  constructor(
    private modalService: ModalService,
    private viewContainerRef: ViewContainerRef,
    private data:DataService,
    private router : Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private _platform: Platform
  ) {

    this.links={
      copy:'Tution Details'
    }
    
    this.fileData = {

      note:

        'Note: Upload only valid marksheets',

      dragAndDropCopy: '...or drag and drop files here',

      overlayCopy: 'Drop your file(s) here',

      btnFile: {

        copy: 'Select File(s) for upload',

      },

      btnRemove: {

        copy: 'Remove',

      },

      fileNotSupportedCopy: 'File type not supported',

      fileListHeading: 'Your selected files',

    };

    // this.data.content.subscribe( x=> {this.list.push(x);});
    this.footer = {
      static: {
        copyright: {
          years: '&copy; 1995 - 2023',
          organization: ' Pinellas County School',
        },
      },
      dynamic: {
        logo: {
          image: {
            url:
              'https://www.pcsb.org/cms/lib/FL01903687/Centricity/Template/30/pcs-footer-logo-2x.png',
            alt: '',
          },
          cta: {
            copy: '',
            val: '',
            alt: '',
          },
        },
        col1: [
         
        
        ],
        col2: [
          
        
        ],
       
        cta: [
        
       
        ],
        social: [

          
        ],
      },
    };

    this.banners = [
      {
        image: {
          src:
            'https://images.ctfassets.net/2v2b28hn7ahz/tl8CBdByW14DtKvR7WpJc/d06b4e667a3122d27c33c75651cdd002/lifestyle-hands-up.jpg',
          alt: 'Leads Gen',
        },
        copy: {
          header: '',
          body: 'In our school, everything that we do is guided by these 4 core values:',
        },
        cta: {
          copy: 'Read More',
          val: '/read more',
          href: 'values',
          alt: 'Read morre',
        },
      },
      {
        image: {
          src:
            'https://i.pinimg.com/736x/ec/06/c5/ec06c5139310705f3e3c59e207d3189a.jpg',
          alt: 'Leads Gen',
        },
        copy: {
          header: '',
          body: 'Planning to enroll your child in a good school? Consider these factors for wise decision!',
        },
        cta: {
          copy: 'Read More',
          val: '/read more',
          href: 'details',
          target: '_blank',
        },
        isImageIcon: false,
      },
      
     
    ];

    this.billboards = [
      {
        header: '',
        copy:
          '',
        copyAlign: '',
        headerType: '',
        image: {
          src:
          '../assets/image2.jpeg',
          mobileSrc:
          '../assets/image2.jpeg',
          alt: '',
        },
      },
      {
        header: '',
        copy:
          '',
        copyAlign: '',
        headerType: '',
        image: {
          src:
          '../assets/image6.jpeg',
          mobileSrc:
          '../assets/image6.jpeg',
          alt: '',
        },
      },
      {
        header: '',
        copy:
          '',
        copyAlign: '',
        headerType: '',
        image: {
          src:
          '../assets/image5.jpeg',
          mobileSrc:
          '../assets/image5.jpeg',
          alt: '',
        },
      },
      {
        header: '',
        copy:
          '',
        copyAlign: '',
        headerType: '',
        image: {
          src:
          '../assets/image4.jpeg',
          mobileSrc:
          '../assets/image4.jpeg',
          alt: '',
        },
        ctas: [
          {
            copy: 'button',
            val: 'the href',
            variant: 'primary',
            alt: 'this is the alt text for button',
          },
          {
            copy: 'button 2',
            val: 'the second href',
            variant: 'secondary',
            alt: 'this is the alt text for second button',
          },
        ],
      },
      {
        header: '',
        copy:
          '',
        copyAlign: '',
        headerType: '',
        image: {
       
          src:
            '../assets/image7.jpeg',
          mobileSrc:
            '../assets/image7.jpeg',
          alt: '',
          
        },
        ctas: [
          {
            copy: 'button',
            val: 'the href',
            variant: 'primary',
            alt: 'this is the alt text for button',
          },
        ],
      },
    ];

   
  
    this.tiles = [
      {
        copy: {
          header:
            'Fido Home Internet 75u for $45/mo for the first 6 months!',
          body:
            'Looking for a great deal on your home internet? Get our fastest internet plan with unlimited usage at only $45/mo1 for the first 6 months. $65/mo thereafter2. Limited time.',
          promotion: 'For New Customers',
          listType: 'ordered',
          list: [
            'Internet speeds of up to 150 Mbps download speeds and up to 15 Mbps upload speeds with unlimited usage',
            '35+ TV channels',
            'HD Box and Wi-Fi modem rental included',
            'No term required',
          ],
        },
        image: {
          url:
            'https://images.ctfassets.net/2v2b28hn7ahz/2hoJbJvRx2wuHQ7L62x1Bs/5e9fa401c20cea058a334dc756880944/crave.jpg',
          alt: 'laptop',
        },
        cta: [
          {
            copy: 'Buy Online',
            alt: 'Buy Online',
            val: '/buy',
          },
          {
            copy: 'Find a store',
            alt: 'Find a store',
            val: '/store',
            variant: 'secondary',
          },
        ],
      },
      {
        copy: {
          header: 'Enjoy the iPhone 11 Pro for $0!',
          body:
            'Get the iPhone 11 Pro 64 GB for $0 with <b>Upfront Edge</b><sub>TM</sub> on a 2-year <b>Rogers Infinite</b><sub>TM</sub> plan with an Edge 40 tab.<sup>1</sup>',
        },
        image: {
          url:
            'https://images.ctfassets.net/2v2b28hn7ahz/BJfeGj8vFOy70IzHimJPP/ffd98f77905217d24f3a671514708395/device.jpg',
          alt: 'iphone',
        },
        cta: [
          {
            copy: 'Buy Online',
            alt: 'Buy Online',
            val: '/buyNow',
          },
        ],
        showAdditionalContent: true,
        additionalContent: {
          expander: {
            expandedCta: {
              copy: 'Show Less',
              alt: 'Show Less alt',
              val: 'Less',
              icon: 'chevron-up',
            },
            collapsedCta: {
              copy: 'Show More',
              alt: 'Show More alt',
              val: 'More',
              icon: 'down',
            },
          },
          contentLayout: {
            content: [
              {
                header: 'Offer details',
                body:
                  'Offer subject to change without notice. A Setup Service Fee of $35 per line applies to set up your device and related services. The Setup Service Fee is waived through self-serve on rogers.com (but not through Live Chat and Customer Service). If you require device setup in-store thereafter, a $35 Setup Service Fee will apply. Early cancellation fees apply. Taxes extra.',
                listType: 'ordered',
                list: [
                  'Program consists of purchase of eligible phone on a 2-year Rogers Infinite plan Edge 40 Tab or Edge 30 Tab; Upfront Edge amount is applied after taxes to lower upfront device cost. You must return phone in good working condition (must power up to the home screen, accept a charge, and have the ability to perform a factory reset; LCD/touchscreen must be functioning and cannot have any dark spots, blemishes or broken and/or cracked glass; all accounts and passwords must be removed and/or turned off; device cannot have been reported lost or stolen) during month 24 (or in months 13-24 while upgrading to a new phone on a 2-yr term), otherwise Upfront Edge amount will be charged to your account. Cancellation of your services during your 2-year term will also result in charging of early cancellation fees and Upfront Edge amount.',
                ],
              },
            ],
          },
        },
      },
      {
        copy: {
          header:
            'Trade in your current device and get up to a $500 credit',
          body:
            'Get a brand-new iPhone, Apple Watch, or iPad on a 2-year term and get a credit of up to $500 when you trade in your eligible current device.<sup>1</sup>',
        },
        image: {
          url:
            'https://images.ctfassets.net/2v2b28hn7ahz/5GHXt1aRG3qzSbkHGUklOp/c1983e8826380b3dbbc5cbb331231be4/devices.jpg',
          alt: 'devices',
        },
        cta: [
          {
            copy: 'Learn More',
            alt: 'Learn More',
            val: '/learn',
          },
          {
            copy: 'Find a store',
            alt: 'Find a store',
            val: '/store',
            variant: 'secondary',
          },
        ],
        showAdditionalContent: true,
        additionalContent: {
          expander: {
            expandedCta: {
              copy: 'Show Less',
              alt: 'Show Less alt',
              val: 'Less',
              icon: 'chevron-up',
            },
            collapsedCta: {
              copy: 'Show More',
              alt: 'Show More alt',
              val: 'More',
              icon: 'down',
            },
          },
          contentLayout: {
            content: [
              {
                header: 'How it works',
                body:
                  'Your new iPhone, Apple Watch or iPad can be more affordable with our trade-in program. For example:',
                list: [
                  'Trade in your iPhone X 64 GB and you can get a $500 credit.',
                  'Trade in your Apple Watch Series 3 and you can get a minimum $100 credit.',
                  'Trade in your Apple iPad (6th Gen) and you can get a minimum $100 credit.',
                ],
              },
              {
                body:
                  'There is a limit of 1 device trade-in for each activation or upgrade on a 2-year term. If trading in a smartwatch the device must be with Edge FinancingTM and with a smartwatch plan.',
              },
              {
                header: 'Pick your plan:',
                list: [
                  'With Rogers Infinite, you can get unlimited data starting at 10 GB of max speed data with reduced speed thereafter. Plus, you can add a smartwatch or a tablet plan and share your unlimited data with all your devices.',
                ],
              },
              {
                header: 'Terms and conditions',
                body:
                  'A Setup Service Fee of $35 per line applies to setup your device and related services. The Setup Service Fee is waived through self-serve on rogers.com (but not through Live Chat and Customer Service). If you require device setup in-store thereafter, a $35 Setup Service Fee will apply. Early cancellation fees apply. Taxes extra.',
                listType: 'ordered',
                list: [
                  'Trade-in credit of up to $500 available to new and existing customers that trade in an eligible device with a minimum $25 value and purchase a smartwatch on Edge Financing with a smartwatch plan, with trade-in of an eligible device and purchase or upgrade to a new iPad and added as a tablet line to a Rogers Infinite plan, or with trade-in of an eligible old device and purchase or upgrade to a new phone on a 2-year Rogers Infinite plan. Full $500 trade-in credit available to customers that trade in an iPhone X 64GB. In participating Rogers retail locations only. Visit rogers.com/tradeup for details on eligible devices. Subject to Rogers Trade-Up Program Terms and Conditions available at rogers.com/tradeup.',
                ],
              },
            ],
            waysToBuyTitle: 'Other Ways to Buy',
            waysToBuyCTAs: [
              {
                copy: '1-800-000-0000',
                alt: '1-800-000-0000 alt',
                val: '18000000000',
              
              },
            ],
          },
        },
      },
      {
        copy: {
          header:
            'Automate and control your home for only $19.99/mo on a 2-year term',
          body:
            'Introducing the Smart Home Monitoring Automate Package.<br><br> With the convenience of one mobile app, you can unlock the power of your smart home.  Monitor your home with live video streaming, get real-time alerts when doors or windows are opened and automate your devices with customized routines like turning on lights to welcome you home. It’s the smart home made easy.<br><br>Smart Home Monitoring Automate is only $19.99/mo on a 2-year term. Add more devices as your needs grow or upgrade to security packages with 24/7 Central Monitoring by certified security professionals! Plus, get $300 worth of hardware:<br><br>',
          promotion:
            'Exclusive offer for <strong>Ignite Internet</strong><sup>TM</sup> customers',
          list: [
            'Day/Night HD camera',
            'Door/Window Sensor',
            'Smart Light Bulb',
            'Smart Hub with mobile app controls',
          ],
        },
        image: {
          url:
            'https://images.ctfassets.net/2v2b28hn7ahz/3z2j81JUozPZ6TmKk72kNB/de55d40b79f49ec97e8d427375ffde72/live-nation.jpg',
          alt: 'live nation',
        },
        cta: [],
        showAdditionalContent: true,
        additionalContent: {
          expander: {
            expandedCta: {
              copy: 'Hide Details',
              alt: 'Show Less alt',
              val: 'Less',
              icon: 'chevron-up',
            },
            collapsedCta: {
              copy: 'Show Details',
              alt: 'Show More alt',
              val: 'More',
              icon: 'down',
            },
          },
          contentLayout: {
            content: [
              {
                header: 'Terms and conditions',
                body:
                  'Offer available for a limited time to new or existing Ignite Internet customers within Ontario, New Brunswick, Newfoundland and Labrador (where technology permits) subscribing on a 2-yr term. Subject to change without notice. Requires a MyRogers account and a compatible iOS or Android device for solution setup and mobile app usage.<br>Taxes extra. A $99 installation fee applies (additional install fees may apply for professional install of optional add-ons). See rogers.com/smarthome for details. An Early Cancellation Fee applies if customer cancels eligible Internet service and/or Smart Home Monitoring plan prior to end of 2-yr term.',
              },
              {
                body:
                  '<strong>EARLY CANCELLATION FEE</strong> (applicable to term commitment customers only). Only the value of the economic inducement you were granted will be used to calculate the Early Cancellation Fee ("ECF"). Your economic inducement is confirmed in the Order Confirmation delivered to you under separate letter. An ECF applies if you were given an economic inducement, and if, for any reason, your Service or your new term is cancelled before the end of your Service Agreement Term. The ECF is equal to your economic inducement multiplied by the number of months remaining in your Service Agreement Term divided by the total number of months of your Service Agreement Term (plus applicable taxes). In other words: <strong>ECF = economic inducement x # months left in your Service Agreement Term ÷ total # months in your Service Agreement Term + applicable taxes.</strong>',
              },
            ],
            waysToBuyTitle: 'How to get it',
            waysToBuyCTAs: [
              {
                copy: '1-800-000-0000',
                alt: '1-800-000-0000 alt',
                val: '18000000000',
              
              },
            ],
          },
        },
      },
    ];

    this.setTab("basicdetails");
    this.morelist=[];
    this.list=[];
    this.tution=[];
    this.teachersList=[];

    this.moreForm=this.fb.group({
      nameControl:['',Validators.required],
      phoneControl:['',Validators.required],
      emailControl:['',Validators.required],
      subjectControl:['',Validators.required],
      experienceControl:['',Validators.required],
      slots:['',Validators.required]
    })

    this.userForm=this.fb.group({
      nameControl : new FormControl('', [Validators.required]),
      phoneControl : new FormControl('', [Validators.required]),  
      addressControl : new FormControl('', [Validators.required]),  
      percentageControl : new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      slots:new FormControl('', [Validators.required]),
      fileUpload: new FormControl('', [Validators.required]),
    })    
    

    this.tutionForm=this.fb.group({
      nameControl : new FormControl('', [Validators.required]),
      phoneControl : new FormControl('', [Validators.required]),  
      addressControl : new FormControl('', [Validators.required]),  
      gender: new FormControl('', [Validators.required]),
      hours: this.addHoursControls()
    }) 

    }
    dateControl = new FormControl('', []);
    dateRangeControlFrom = new FormControl('', []);
    dateRangeControlTo = new FormControl('', []);
  
    ngOnChanges(changes: SimpleChanges) {
      if (changes.currentValue) {
        this.dateControl.disable();
        this.dateRangeControlFrom.disable();
        this.dateRangeControlTo.disable();
      } else {
        this.dateControl.enable();
        this.dateRangeControlFrom.enable();
        this.dateRangeControlTo.enable();
      }
    }
   
    addHoursControls() {
      const arr = this.hour.map(element => {
         return this.fb.control(false);
      });
      return this.fb.array(arr);
    
   // console.log(this.list);
  }

  get hourArray(){
    return <FormArray>this.tutionForm.get('hours')
  }
getselectedtutionvalue(event:CheckboxChange){
  this.selectedtutionValue=[];
  this.hourArray.controls.forEach((control, i) =>{
    if(control.value){
      this.selectedtutionValue.push(this.hour[i]);
      this.event.emit(event);
    }
  });
  console.log(this.selectedtutionValue);
}

  ngOnInit(): void {
    this.id=localStorage.getItem('token');
  }
selectedDay:string='';
  selectChangeHandler(event:any){
    this.selectedDay=event.target.value;
   
   
  }
  handleClick(link: Link) {
    console.log(link);
  }
 
  handleTrackingEvent(event) {
    console.log(event);
  }

  handleCtaClick(link: Link) {
    console.log(link);
  }

  handleCloseClick(id: string) {
    console.log(id);
  }

  handleClick2(event) {
    console.log('Data:', event);
  }

  handleClick3(cta: Button) {
    console.log('cta: ', cta);
  }

  // ngOnIt(): void {
    
    
  // }
  
  modalCloseButtonClick(event: Event) {
    this.userForm.reset();
    this.moreForm.reset();
    console.log(event);
  }

  closeModal() {
    this.modalRef.close();
  }
  onExpanderChange(isExpanded: boolean) {
    this.expanded = isExpanded;
    this.event.emit(isExpanded);
  }
  details(){
    this.router.navigateByUrl('details')
  }
   ngAfterViewInit() {
  //   // property "activeIndex" of tabs can be accessed this way
  //   this.activeIndex = this.tabs.activeIndex;
   }
   handleSlideChange($event) {
    console.log($event.newIndex);
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
    else if (this.currentTab=='basicdetails') 
    {
      this.list.forEach((value,index) => {
        if(value==element){
          this.list.splice(index,1);
        }
      });

    }
    else{
      this.tution.forEach((value,index) => {
        if(value==element){
          this.tution.splice(index,1);
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

  openModalWithComponent(templateRef:TemplateRef<any>) {
    this.modalRef=this.modalService.open(
      templateRef,
      this.viewContainerRef,
      null,
    );

  }

  openModal(templateRef: TemplateRef<any>) {
    this.modalRef = this.modalService.open(
      templateRef,
      this.viewContainerRef,
      null,
    );
  }

  reset() {
    if(this.currentTab=='moredetails'){
      this.moreForm.reset();
    }
    else if(this.currentTab=='basicdetails'){
      this.userForm.reset();
    }
    else{
      this.tutionForm.reset();
    }
  }

  setTab(tab: string){
    this.currentTab=tab;
    this.data.updateTab(this.currentTab);


  }
  gender:any;

  addItem() :void {
    if(this.currentTab=='moredetails'){
      this.morelist.push(this.moreForm.value);
      console.log(this.morelist);
      console.log(this.selectedDay);
      this.modalRef.close();
      this.moreForm.reset();

    }
    else if(this.currentTab=='basicdetails'){
      this.list.push(this.userForm.value);
      console.log(this.userForm.value.slots)
      for(var i=0;i<this.morelist.length;i++){
        if(this.userForm.value.slots==this.morelist[i].slots){
          this.teachersList.push(this.morelist[i])
          this.studentList.push(this.userForm.value)
        }
  
      }
      console.log("teacherslist",this.teachersList);
      console.log("studentlist", this.studentList);
      this.gender=this.list[0]
      console.log(this.list);
      this.modalRef.close();
      this.userForm.reset();
    }
    else{
      this.tution.push(this.tutionForm.value);
      this.gender=this.list[0]
      console.log(this.tution);
      this.modalRef.close();
      this.tutionForm.reset();
    }


  
}}
