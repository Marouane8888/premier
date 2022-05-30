import { Component, OnInit , OnDestroy} from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  constructor(){}

  secondes : number;
  counterSubscibtion : Subscription;

  ngOnInit(){

    const counter = interval(1000);
    this.counterSubscibtion = counter.subscribe(
      (value : number) => { this.secondes = value;}
    );

    // counter.subscribe(
    //   (value: number) => { this.secondes = value; },
    //   (error: any) => { console.log('une erruer a été rencontere !'); },
    //   () => { console.log('Observable compléter !'); }
    // );
 
  }

  ngOnDestroy(){
    this.counterSubscibtion.unsubscribe();

}

}
