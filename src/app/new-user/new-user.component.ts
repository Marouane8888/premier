import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm : FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private userService: UserService, 
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      firstName :['',Validators.required],
      lastName :['',Validators.required],
      email :['',[Validators.email, Validators.required]],
      drinkPreference : ['',Validators.required]
      })

  }

  onSubmitForm(){
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference']
      
    );
      this.userService.addUsers(newUser);
      this.router.navigate(['/users']);
  }

  getHobbies(){
    return null;
  }

  OnAddHobby(){
    const newHobbyControl = this.formBuilder.control('',Validators.required);
    this.getHobbies().push(newHobbyControl);
  }

}
