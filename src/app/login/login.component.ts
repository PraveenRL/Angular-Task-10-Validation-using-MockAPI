import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  bind: any;
  constructor(public data : DataService, public routing : Router) { }

  ngOnInit() {
    this.data.getData().subscribe(res => {
      this.bind = res;
      console.log(res)
    })
  }

  add(value){
    for(let i = 0; i < this.bind.length; i++){
      if(value.email == this.bind[i].email){
        if(value.password == this.bind[i].password){
          this.routing.navigate(['/home']);
        }
      else{
        alert('Invalid Email/Password');
      }
    }
  }
}
}
