import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCartComponent } from './course-cart/course-cart.component';
import { CoursepageBodyComponent } from './coursepage-body/coursepage-body.component';
import { MycoursePageComponent } from './mycourse-page/mycourse-page.component';

const routes: Routes = [
  { path: 'coursepage', component: CoursepageBodyComponent  },
  { path: 'mycoursepage', component: MycoursePageComponent  },
  { path: 'cartpage', component: CourseCartComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
