import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from '../../services/admin.service';
import { User } from '../../services/user';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit{

  personalList!: Observable<User[]>

  constructor(private adminService: AdminService){

  }
  ngOnInit(): void {
    this.personalList = this.adminService.getPersonalList() 
  }
}
