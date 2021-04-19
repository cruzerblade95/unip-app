import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Course } from '../classes/Course';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getCourse() {
    return this.firestore.collection('course').snapshotChanges();
  }
  addCourse(payload: Course) {
    return this.firestore.collection('course').add(payload);
  }
  updateCourse(id: number, payload: Course) {
    return this.firestore.doc('course/' + id).update(payload);
  }
  deleteCourse(id: number) {
    return this.firestore.doc('course/' + id).delete();
  }

}

export interface course{
  id: number;
  name: string;
  hourFrom: string;
  hourTo: string;
  days: string;
  hours: number;
  sectionNumber: number;
}

