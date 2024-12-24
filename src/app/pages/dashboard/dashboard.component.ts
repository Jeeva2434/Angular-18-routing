import { Component, inject } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Observable, of } from 'rxjs';
import { User } from '../../core/model/user.model';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../../shared/components/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    // AsyncPipe
    MatDialogModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  private apiService:ApiService = inject(ApiService);
  private route:ActivatedRoute = inject(ActivatedRoute);
  private dialog:MatDialog = inject(MatDialog);

  // users$:Observable<User[]> = this.apiService.getUser$;

  users!:User[];

  constructor(){
    console.log(this.route.snapshot);
  }

  ngOnInit(){

    // Getting resolver data from route
    this.users = this.route.snapshot.data['user']
  }

  canDeactivate():Promise<boolean>{
    return new Promise((resolve,reject) => {
      const dialogRef = this.dialog.open(ConfirmationModalComponent,{
        width: '450px',
        height: '200px',
        data:{
          message:"Are you sure you want to leave without saving."
        }
      })
  
      dialogRef.afterClosed().subscribe((res)=>{
        if(res){
          resolve(true)
        }else{
          reject(false);
        }
      })
    })

  }  


}
