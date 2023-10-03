import { Component ,OnInit} from '@angular/core';
import { EmploysService } from '../services/employs.service';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {

  users : any;
  constructor(private employService : EmploysService){}
  ngOnInit(): void {
    this.employService.viewEmploys().subscribe((data) =>{
      this.users = data;
      console.log(this.users);
      
    })
  }
}
