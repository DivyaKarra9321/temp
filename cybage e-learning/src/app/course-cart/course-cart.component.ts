import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-cart',
  templateUrl: './course-cart.component.html',
  styleUrls: ['./course-cart.component.scss']
})
export class CourseCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course:any[]=[
    {
      imageSrc:'assets/ai.png',
      title:'Artificial intelligence',
      description:'Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions.',
      duration:'30 minutes'
    },
    {
      imageSrc:'assets/java.png',
      title:'Java',
      description:'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      duration:'30 minutes'
    }
  ]
}
