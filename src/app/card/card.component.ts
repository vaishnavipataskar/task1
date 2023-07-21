import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../shared/dataService.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  recievedData: any;
  dataVar:any;
  counter:number = 1;
  @ViewChild('one')one:any;  
  constructor(private dataServe:DataService){
    this.dataServe.dataSubject.subscribe((res)=>{
      this.recievedData = res
    })    
  }
  onBtnClick(eve:any){
    if(eve.target.id==='minus'){
      eve.target.nextElementSibling.value > 1 ? this.counter = --eve.target.nextElementSibling.value : this.counter = eve.target.nextElementSibling.value=1;
}
else{
  this.counter = ++eve.target.previousElementSibling.value;}
  }
    addToBag(i:number){ 
      let cardVar = this.dataServe.cardIndex(i)
      this.dataServe.receivedBagData({pname : cardVar.pname , pImg: cardVar.ImgPath, pprice : cardVar.pprice , qty:this.counter})     
    }
}