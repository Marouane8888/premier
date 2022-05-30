import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { error } from "protractor";



@Injectable()
export class AppareilService {

    appareilSubject = new Subject<any[]>();

    private appareils = [
        {
          id : 1,
          name : "PARIS",
          statut : "At time"
        },
        {
          id : 2,
          name : "CASABLANCA",
          statut : "Canceled"
        }
      ];


      constructor(private httpClient: HttpClient){}

      emiAppareilSubject(){
        this.appareilSubject.next(this.appareils.slice());
      }

      getAppareilById(id: number){
        const appareil = this.appareils.find(
          (appareilObject) => {
            return appareilObject.id === id;
          } 
        );
        return appareil;
          this.emiAppareilSubject();
      }

      swithOnAll(){
     for(let appareil of this.appareils){
       appareil.statut = 'At time';
     }
     this.emiAppareilSubject();
      }

      swithOffAll(){
        for(let appareil of this.appareils){
          appareil.statut = 'Annulé';
        }
        this.emiAppareilSubject();
      }

      switchOnOne(index : number){
        this.appareils[index].statut = "At time";
        this.emiAppareilSubject();
      }

      switchOnOff(index : number){
        this.appareils[index].statut = "Canceled";
        this.emiAppareilSubject(); 
      }
      addAppareil(name : string, status : string){
        const appareilObject = { 
          id : 0,
          name : "",
          statut : ''
        }
        appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1 ;
        appareilObject.name = name;
        appareilObject.statut = status;
        
        this.appareils.push(appareilObject);
        this.emiAppareilSubject();

      }

      saveAppareilsToServer(){

        this.httpClient.
        put('https://http-client-demo-mar-default-rtdb.europe-west1.firebasedatabase.app/appareils.json',this.appareils)
        .subscribe(
          () => { console.log('Enregistrement términé ! ');},
          (error) => { console.log('Erreur de sauvegarde ! '+ error);}

        );

      }

      getAppareilsFromserver(){
        this.httpClient
        .get<any[]>('https://http-client-demo-mar-default-rtdb.europe-west1.firebasedatabase.app/appareils.json')
        .subscribe(
          (response) => {
            this.appareils = response; 
            this.emiAppareilSubject();

          },
          (error) => {console.log('Erreur de chargement :'+ error)}
        );
      }

}