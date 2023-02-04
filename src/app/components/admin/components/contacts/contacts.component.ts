import { Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { filter, mapTo, merge, Observable } from 'rxjs';
import { AdminService } from '../../services/admin.service';
import { User } from '../../user';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit{

  private showLoader!: Observable<boolean>
  private hideLoader!: Observable<boolean>
  
  isLoading!: Observable<boolean>


  personalList!: Observable<User[]>

  constructor(private adminService: AdminService, private router: Router){

  }
  ngOnInit(): void {
    this.personalList = this.adminService.getPersonalList() 

    this.hideLoader = this.router.events.pipe(filter((e) => e instanceof ResolveEnd), mapTo(false));

    this.showLoader = this.router.events.pipe(filter((e) => e instanceof ResolveStart), mapTo(true));

    this.isLoading = merge(this.hideLoader, this.showLoader)

  }
}
