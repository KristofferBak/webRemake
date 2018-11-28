import { Component, OnInit } from '@angular/core';
import {FitnessAppDataService} from '../fitness-app-data.service';
//import { from } from 'rxjs';
//import { EventManagerPlugin } from '@angular/platform-browser/src/dom/events/event_manager';
//import { userInfo } from 'os';

export class User {
  email: string;
  name: string;
  workouts: Array<string>;
  amountOfWorkouts: number;
}

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {

  constructor(private fitnessAppDataService: FitnessAppDataService) { } 

  public users: User[];

  private getUsers(): void{
    this.fitnessAppDataService.getUsers().then(foundUsers => this.users = foundUsers);
  }  

  //amount = function name(params:User) {
  //  params.workouts.length;
  //}

  ngOnInit() {
    this.getUsers();
  }
}
