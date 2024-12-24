import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  private authService = inject(AuthService);

  role:string | null = null;
  
  ngOnInit(){
    this.role = this.authService.getUserRole();
  }

}
