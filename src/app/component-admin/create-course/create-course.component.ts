import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Course } from '../../classes/Course';
import { CourseService } from '../../services/course.service';
import { FormControl, Validators } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  course: Course = new Course();
  submitted = false;
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredDays: Observable<string[]>;
  weekDaysControl = new FormControl('', Validators.required);
  days: string[] = ['Sunday'];
  allDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private courseService: CourseService,
    private router: Router) {
    this.filteredDays = this.weekDaysControl.valueChanges.pipe(
      startWith(null),
      map((day: string | null) => day ? this._filter(day) : this.allDays.slice())
    );
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.days.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.weekDaysControl.setValue(null);
  }

  remove(day: string): void {
    const index = this.days.indexOf(day);

    if (index >= 0) {
      this.days.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.days.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.weekDaysControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allDays.filter(day => day.toLowerCase().indexOf(filterValue) === 0);
  }
  ngOnInit() {
    this.course = new Course();
  }

  save() {
    this.courseService.insertCourse(this.course)
      .subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Done...',
          text: 'Course added successfully!',
        });
        this.back();
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Opps...',
          text: 'There is an issue with creating course!',
        });
        console.log(error);
      });
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  back() {
    this.router.navigate(['/list/course']);
  }
}
