import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Input, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { EditCourseDetailsComponent } from '../edit-course-details/edit-course-details.component';
import { DeleteCourseComponent } from '../delete-course/delete-course.component';
import { HomeServiceService } from 'src/app/data/services/home/home-service.service';
import { Course } from 'src/app/data/schema/course';


@Component({
  selector: 'app-course-details-page',
  templateUrl: './course-details-page.component.html',
  styleUrls: ['./course-details-page.component.scss']
})
export class CourseDetailsPageComponent {
  isChecked: boolean = false;
  isLoading: boolean = false;
  pageSize :number = 5;
  currentPage :number = 0;
  displayedColumns: String[] = ['id', 'name', 'description', 'language', 'year', 'fee', 'active', 'action'];
  Courses: any;
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchKey: string = '';
  dataFromDialog: any;
  @Input() notifier!:boolean;
  status!: boolean;
  constructor(
    private  HomeService :HomeServiceService,
    private _router: Router,
    private dialog: MatDialog,
  ) {}
  ngOnInit(): void {
    this.getCourses();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getCourses();
  }

  getCourses() {
    this.isLoading = true;
    this.HomeService.getCourses().subscribe(
      (response: any) => {
        this.isLoading = false;
       
        this.Courses = response.data;
        this.dataSource.data = this.Courses;
       
        console.log(response);
        
      },
      error => {
        console.log(error);
        
      }
    );
  }
  isCheck(response: any){
  if(response.data.active == true){
    this.isChecked = true;

  }
  else{
    this.isChecked = false;
  }
}
  openEditCourse(dialogCourse: any) {
    const dialogRef = this.dialog.open(EditCourseDetailsComponent, {
      width: '350px',
      height: '450px',
      data: dialogCourse,
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data.status);
      if (data.status) {
        this.getCourses();
      }
    });
  }
  openConfirmDeleteCourse(id:number){
    const dialogRef = this.dialog.open(DeleteCourseComponent, {
      width: '350px',
      height: '150px',
      disableClose: true,
      autoFocus: true,
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data.status);
      if (data.status) {
        //Delete Hotel
        this.deleteCourse(id);

      }
    });

  }
  deleteCourse(id: number) {
              this.HomeService.deleteCourse(id).subscribe({
            next: (response) => {
              console.log(response);
              this.getCourses();
            },
            error: (error) => {
              console.log(error);
            },
            complete: () => {
              console.log('complete');
            },
          });
  }
}
