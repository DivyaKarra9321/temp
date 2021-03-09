import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycourse-page',
  templateUrl: './mycourse-page.component.html',
  styleUrls: ['./mycourse-page.component.scss']
})
export class MycoursePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course:any[]=[
    {
      image:'assets/ai.png',
      title:'Artificial intelligence',
      description:'Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving',
      duration:'30 minutes'
    },
    {
      image:'assets/java.png',
      title:'Java',
      description:'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      duration:'30 minutes'
    }
  ]
  status:string="incomplete"

}
