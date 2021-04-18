import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckdataService {
value=20
  constructor() { }
  get(){
    return this.value
  }
  set(data:any){
  this.value=data
  }
}
