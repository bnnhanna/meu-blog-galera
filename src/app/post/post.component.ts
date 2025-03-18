
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { RouterModule } from '@angular/router'; // Importe o RouterModule
import { ActivatedRoute } from '@angular/router'; // Para obter o ID da rota
import { PostService, Post } from '../services/post.service'; // Importe o serviço e a interface Post

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  standalone: true, // Mantenha esta linha
  imports: [CommonModule, RouterModule] // Importe o CommonModule e o RouterModule aqui
})
export class PostComponent implements OnInit {
  post: Post | undefined; // Post atual

  constructor(
    private route: ActivatedRoute, // Para acessar os parâmetros da rota
    private postService: PostService // Injete o PostService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Obtenha o ID da rota
    this.post = this.postService.getPostById(id); // Busque o post pelo ID
  }
}
