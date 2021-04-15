import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  // { path: 'home', loadChildren: './admin/home/home.module#HomePageModule' },
  // { path: 'home', loadChildren: './student/home/home.module#HomePageModule' },
  // { path: 'scan-qr', loadChildren: './student/scan-qr/scan-qr.module#ScanQrPageModule' },
  // { path: 'profile', loadChildren: './student/profile/profile.module#ProfilePageModule' },
  // { path: 'setting', loadChildren: './student/setting/setting.module#SettingPageModule' },
  // { path: 'class', loadChildren: './student/class/class.module#ClassPageModule' },
  // { path: 'attendance', loadChildren: './student/attendance/attendance.module#AttendancePageModule' },
  // { path: 'profile', loadChildren: './admin/profile/profile.module#ProfilePageModule' },
  // { path: 'setting', loadChildren: './admin/setting/setting.module#SettingPageModule' },
  // { path: 'manage-student', loadChildren: './admin/manage-student/manage-student.module#ManageStudentPageModule' },
  // { path: 'manage-teacher', loadChildren: './admin/manage-teacher/manage-teacher.module#ManageTeacherPageModule' },
  // { path: 'manage-class', loadChildren: './admin/manage-class/manage-class.module#ManageClassPageModule' },
  // { path: 'manage-timetable', loadChildren: './admin/manage-timetable/manage-timetable.module#ManageTimetablePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
