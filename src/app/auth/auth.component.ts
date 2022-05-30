import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  AuthStatus : boolean;


  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
    this.AuthStatus = this.authService.isAuth;

  }
onSignIn (){
  this.authService.signIn().then(
    () => {
      this.AuthStatus = this.authService.isAuth;
      this.router.navigate(['appareils'])
    }
  )
}

onSignOut (){
  this.authService.signOut();
  console.log("La Déconnexion Réussit !");
  alert("La Déc onnexion Réussit !");
  this.AuthStatus = this.authService.isAuth;

}
}
