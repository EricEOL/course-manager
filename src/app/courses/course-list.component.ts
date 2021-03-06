import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
  title: string = 'Course List';

  _courses: Course[] = [];

  filteredCourses: Course[] = [];

  _filterBy: string = '';

  constructor(private courseService: CourseService) {

  }

  ngOnInit(): void {
    this._courses = this.courseService.retriveAll();
    this.filteredCourses = this.courseService.retriveAll();
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }


}