import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckdataService } from '../checkdata.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // @Input() submit:any
@Output() data=new EventEmitter<any>()
  editform!:FormGroup;
  paramsSubscription:any
  showpassword:boolean=false
  constructor(private fb:FormBuilder,
    private route:ActivatedRoute, private router:Router,private service:CheckdataService) { }

  ngOnInit(): void {
    this.editform=this.fb.group({
      firstname:['ajay'],
      lastname:[''],
      email:[''],
      phone:[''],
      password:[''],
      confirmpassword:['']
    });
    console.log("chid service data",this.service.get())
    
  }
  getFormdata(editform:any){
    // this.paramsSubscription = this.route.queryParams.subscribe(params=>{
    //   this.showpassword=params.check
    //   this.editform.patchValue({
    //     firstname: params.firstname,
    //     lastname: params.lastname,
    //     email: params.email,
    //     phone: params.phone,
    //   });

    // })
    console.log("childdata",editform)
    this.data.emit(editform);

  }
  onSubmit(){
    console.log("addeditsubmitdata",this.editform.value)
    this.getFormdata(this.editform.controls)
    // console.log("submit",this.submit)
    console.log("chid service data",this.service.get())
    
  }

}
