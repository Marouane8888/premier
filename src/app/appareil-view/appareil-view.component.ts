import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from 'src/app/services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  isAuth = true;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date= new Date();
      setTimeout(
         () => {
           resolve(date);
         }, 1000
      );
    } 
  )

  appareils : any[];
  appareilSubscription : Subscription;

  constructor(private appareilService : AppareilService){
    
  }

  OnAllumer(){
        this.appareilService.swithOnAll();
  }

  OnEteindre (){
    this.appareilService.swithOffAll();
  }

  ngOnInit(){
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils : any[]) => this.appareils = appareils);
  this.appareilService.emiAppareilSubject();

  }


  OnSave(){
    this.appareilService.saveAppareilsToServer();
  }

  onFetch(){
    this.appareilService.getAppareilsFromserver();
  }

}
 