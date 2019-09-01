import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
