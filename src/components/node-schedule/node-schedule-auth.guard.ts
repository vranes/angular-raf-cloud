import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeScheduleAuthGuard implements CanActivate, CanDeactivate<unknown> {

  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!localStorage.getItem("jwt"))
      this.router.navigate(['/login'])

    // @ts-ignore
    if(localStorage.getItem("permissions") && localStorage.getItem("permissions").includes("can_start_nodes"))
      return true

    // @ts-ignore
    if(localStorage.getItem("permissions") && localStorage.getItem("permissions").includes("can_stop_nodes"))
      return true

    // @ts-ignore
    return !!(localStorage.getItem("permissions") && localStorage.getItem("permissions").includes("can_restart_nodes"));

  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
