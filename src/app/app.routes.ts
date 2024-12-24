import { Routes } from '@angular/router';
import { authGuard } from './core/guards/authguard.guard';
import { routeGuard } from './core/guards/route.guard';
import { UserResolver } from './core/guards/resolve';
import { DeactivateGuardGuard } from './core/guards/deactivate-guard.guard';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./pages/home/home.component').then((m)=>m.HomeComponent),
    },
    {
        path:'login',
        loadComponent:()=>import('./pages/login/login.component').then((m)=>m.LoginComponent)
    },
    {
        path:'dashboard',
        loadComponent: ()=>import('./pages/dashboard/dashboard.component').then((m)=>m.DashboardComponent),
        canActivate:[authGuard,routeGuard],
        canDeactivate:[DeactivateGuardGuard],
        data:{
            role:['Admin']
        },
        resolve:{
            "user": UserResolver
        }
    },
    {
        path:"**",
        redirectTo:''
    }
];
