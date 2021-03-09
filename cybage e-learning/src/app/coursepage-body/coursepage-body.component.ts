import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursepage-body',
  templateUrl: './coursepage-body.component.html',
  styleUrls: ['./coursepage-body.component.scss']
})
export class CoursepageBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course: any[]= [
    {
     id:1,
     name: 'Angular JS',
     desc: 'AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTMLs syntax to express your applications components clearly and succinctly.',
     author:' Misko Hevery',
     duration: '2 months',
    }
  ]
  course1:any[]=[
    {
      id:1,
      title:'Artificial intelligence',
      description:'Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving',
      duration:'30 minutes'
    },
    {
      id:2,
      title:'Java',
      description:'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      duration:'30 minutes'
    }
  ]
  comments:any[]=[
    {
    comment:'this course is helpful!'
    },
    {
    comment:'gained knowledge from this course!'
    },
    {
      comment:'skills improved!'
    }
  ]
  likes:number=13521

}
