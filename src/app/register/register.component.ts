import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data1 : any;
  constructor(public data : DataService, public routing:Router) { }

  ngOnInit() {
  }

  add(value){
    this.data.regData(value).subscribe(res => {
      this.data1 = res;
      this.routing.navigate(['/login']);
      console.log(res)
    })
  }

}
