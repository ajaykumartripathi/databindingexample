import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CheckdataService } from '../checkdata.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit ,AfterViewInit {
@ViewChild(ChildComponent) child !:ChildComponent
  constructor(private service:CheckdataService) { }
firstname:any
lastname:any
email:any
phone:any
  ngOnInit(): void {
    console.log("parent service data",this.service.get())
  }
onSubmit(value:any){
  // const name="ajay"
  this.firstname=value.firstname.value
  this.lastname=value.lastname.value
  this.email=value.email.value
  this.phone=value.phone.value
  console.log("parent service data",this.service.get())
  this.service.set(30)
}
ngAfterViewInit(){
  console.log(this.child)
}
}
