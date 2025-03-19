import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importe o RouterModule
import { PostService, Post } from '../services/post.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule], // Adicione o RouterModule aqui
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  // Carrega os posts da API
  loadPosts(): void {
    this.postService.getPosts().subscribe(
      (data: Post[]) => this.posts = data,
      (error: any) => console.error('Erro ao carregar posts:', error)
    );
  }

  // Exclui um post
  deletePost(id: number): void {
    this.postService.deletePost(id).subscribe(
      () => this.loadPosts(),
      (error: any) => console.error('Erro ao excluir post:', error)
    );
  }
}
