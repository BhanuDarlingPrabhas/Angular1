import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmploysService } from '../services/employs.service';
import { users } from '../models/user';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  user: users;

  constructor(private activateRoute: ActivatedRoute, private employService: EmploysService) {
    this.user = new users();

  }

  ngOnInit(): void {
    let id = this.activateRoute.snapshot.params['id'];
    this.employService.getUserById(id).subscribe((data) => {
      console.log(data);
      this.user = data
    })


  }

  // Update employs 
  updateUser(form: any) {
    if(form.valid){
      console.log(this.user);
      this.employService.updateUser(this.user).subscribe((data) => {
        console.log(data);
    })
    } else {
      alert('Enter Required Details')
    }
   
  }

}
