import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService, private router : Router) { }

  ngOnInit(): void {
  }
  login(form: NgForm){

    this.userService.currentUser = form.value

    let response = this.userService.getUsers()

    response.subscribe( (res: any) =>{

      
      this.userService.currentUser = new User()

      if(res.msg === 'Incorrect password') return alert(res.msg)
      if(res.msg === 'usuario no exite') return alert(res.msg)

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ingresando',
        showConfirmButton: false,
        timer: 1500,
        
      })

      const redirect =  () => { this.router.navigate(['/home'])}

      setTimeout(redirect, 2500);

    }); 


  }

}
