import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { RouterModule } from '@angular/router'; // Importe o RouterModule
import { PostService, Post } from '../services/post.service'; // Importe o serviço e a interface Post

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true, // Mantenha esta linha
  imports: [CommonModule, RouterModule] // Importe o CommonModule e o RouterModule aqui
})
export class HomeComponent implements OnInit {
  posts: Post[] = []; // Array para armazenar os posts

  constructor(private postService: PostService) { } // Injete o PostService

  ngOnInit(): void {
    this.posts = this.postService.getPosts(); // Obtenha os posts ao inicializar o componente
  }
}
