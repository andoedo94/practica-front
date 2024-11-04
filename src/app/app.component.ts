import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { User } from './models/User';
import { HomeService } from './services/home.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'nuevopro';
  users: User[] = [];
  userEdit: User = {
    id: 0,
    nombres: "",
    apellidos: ""
  };

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.get();
  }

  editar(id: number)
  {
    this.userEdit = this.users.filter(x=> x.id == id)[0];
  }

  sendEditar()
  {
    this.homeService.UpdateUser(this.userEdit).subscribe({
      next: (x=>{
        this.get();
      })
    })
  }

  get(){
    this.homeService.getUsers().subscribe({
      next: (x=>{
        this.users = x;
      })
    })
  }

}
