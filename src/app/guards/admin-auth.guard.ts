import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AdminService} from '../services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private adminService: AdminService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.adminService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['admin/login'], {
        queryParams: {returnUrl: state.url}
      });
      return false;
    }
  }
}
