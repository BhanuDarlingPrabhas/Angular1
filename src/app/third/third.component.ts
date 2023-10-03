import { Component, OnInit } from '@angular/core';
import { EmploysService } from '../services/employs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  title: any;
  employs: any;

  constructor(private employService: EmploysService, private way: Router) { }

  ngOnInit(): void {
    this.title = 'It is my Third Component';
    this.employService.viewEmploys().subscribe((data) => {
      this.employs = data;
      console.log(this.employs);
    })
  }
  //Delete Employs from list
  deleteEmploy(id: any) {
    this.employService.deleteEmploy(id).subscribe((data) => {
      console.log(data);

    })
  }

  //Editing employs details
  editUser(id: any) {
    this.way.navigate(['fourth/' + id])
  }
}
