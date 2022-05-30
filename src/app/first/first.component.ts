import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @Input() AppareilName: String;
  @Input() AppareilStatus: String;
  @Input() indexOfAppareil : number;
  @Input() id : number;

  constructor(private appareilService : AppareilService) { }

  ngOnInit(): void {

  }

  getColor(){
    return 'green';
  }

  getStatus(){

    return this.AppareilStatus;

  }

  OnSwitchOne(){
    this.appareilService.switchOnOne(this.indexOfAppareil);

  }

  OnSwitchOff(){
    this.appareilService.switchOnOff(this.indexOfAppareil);

  }
}
