import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { CourseService } from "./course.service";

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

  course: any;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {
    
  }
  
  ngOnInit(): void {
    this.course = this.courseService.retriveById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
  }
}