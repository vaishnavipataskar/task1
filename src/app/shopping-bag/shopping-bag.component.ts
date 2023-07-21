import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService.service';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.css']
})
export class ShoppingBagComponent implements OnInit{
  bagDataReceived : any[]=[];
  total : number=0
  constructor(private dataServe:DataService){
    this.dataServe.bagDataSubject.subscribe((param)=>{
      this.bagDataReceived = param
    }) 
  }
  ngOnInit(): void {   
  } 
  deleteAction(index:number) {
    this.bagDataReceived.splice(index, 1);
  }
  calculateTotal(): number {
    return this.bagDataReceived.reduce((total, item) => total +item.pprice*item.qty, 0);
  }
}
