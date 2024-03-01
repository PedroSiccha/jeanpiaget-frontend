// course-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../core/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses().subscribe(courses => this.courses = courses);
  }
}

// Otros componentes seguirían una estructura similar
