import { Component, OnInit } from '@angular/core';
import { EventManagerPlugin } from '@angular/platform-browser/src/dom/events/event_manager';
import { userInfo } from 'os';

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

  constructor() { } 

  users: User[] = [{
    email: 'test@email.dk',
    name: 'testUser',
    workouts: ['workout1','workout2','workout3'],
    amountOfWorkouts: 3
  },{
    email: 'test2@gmail.com',
    name: "fjolset",
    workouts: ['workout1','workout2'],
    amountOfWorkouts: 2
  }];

  //amount = function name(params:User) {
  //  params.workouts.length;
  //}

  ngOnInit() {
  }
}
