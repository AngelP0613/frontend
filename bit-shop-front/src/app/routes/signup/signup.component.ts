import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms'
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( public userService: UserService ) { }

  ngOnInit(): void {
  }

  createUser(form: NgForm){

    console.log(form.value)//{datos del formulario}

    let {name, description } = form.value

    this.userService.createUser(form.value).subscribe( (res:any ) => {
      alert(res.msg)
    })

  }

}
