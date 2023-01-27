import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from 'src/app/data/schema/course';


@Injectable({
  providedIn: 'root'
})


export class HomeServiceService {

  constructor(
    private http:HttpClient
  ) { }

  getCourses():Observable<Course[]>{
    return this.http.get<Course[]>('http://localhost:53943/api/Course/SelectCourse')
  }
  deleteCourse(id:number):Observable<Course[]>{ 
    return this.http.delete<Course[]>('http://localhost:53943/api/Course/DeleteCourse/'+id)
  }

}
