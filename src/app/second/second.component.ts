import { Component } from '@angular/core';
import { users } from '../models/user';
import { EmploysService } from '../services/employs.service';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  
    user : users;

    constructor(private userService : EmploysService)
    {
      this.user = new users()

    }

    onSubmit(form : any) : any {
        console.log(this.user)
        this.userService.addEmploy(this.user).subscribe((data) => {
          console.log(data);
      })
      }
    }

