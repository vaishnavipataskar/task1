import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private arr: any[] = [
    {
      pImg: "https://onedaycart.com/odcb/wp-content/uploads/2016/01/19-Amazing-Benefits-Of-Cumin-Jeera-For-Skin-Hair-And-Health.jpg",
      pprice: "25",
      pname: "jeera"
    },
    {
      pImg: "https://m.media-amazon.com/images/I/51AzriIvcBL._SX342_.jpg",
      pprice: "45",
      pname: "Poha"
    }
  ];
  private bagArr: any[] = [
    {
      pprice: 25,
      pname: "jeera",
      qty: 2,
      total: 50,
    }
  ];  
  dataSubject = new BehaviorSubject<any>(this.arr.slice());
  bagDataSubject = new BehaviorSubject<any>(this.bagArr.slice());

  sendData(data: any[]) {
    this.arr.push({
      pImg: data[1],
      pprice: data[0].pPrice,
      pname: data[0].pName
    })
    this.dataSubject.next(this.arr.slice())
  }
  
  receivedBagData(bagObj: any) {
    this.bagArr.push(bagObj)
    this.bagDataSubject.next(this.bagArr.slice())
  }
  cardIndex(id:number){
    return this.arr.slice()[id] 
  }


 

}
