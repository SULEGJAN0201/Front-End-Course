import { NgModule } from "@angular/core";
import { HomeMainComponent } from "./home-main/home-main.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { CommonModule } from "@angular/common";
import { EditCourseDetailsComponent } from "./edit-course-details/edit-course-details.component";
import { DeleteCourseComponent } from "./delete-course/delete-course.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { CourseDetailsPageComponent } from "./course-details-page/course-details-page.component";

@NgModule({
    declarations: [
         CourseDetailsPageComponent,
         HomeMainComponent,
         EditCourseDetailsComponent,
         DeleteCourseComponent,
         AddCourseComponent
    ],

    imports: [
      CommonModule,
      MatTableModule,
      MatPaginatorModule,
      FormsModule,
      MatDialogModule,
      MatIconModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatInputModule,
      MatProgressBarModule


    ],

})
export class CourseModule { }