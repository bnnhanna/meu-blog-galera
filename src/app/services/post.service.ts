import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importe o HttpClient
import { Observable } from 'rxjs'; // Importe o Observable

// Interface para o Post
export interface Post {
  id: number; // Remova o "?" para garantir que o id sempre exista
  title: string;
  content: string;
  spotifyUrl: string;
}

@Injectable({
  providedIn: 'root' // O serviço está disponível em toda a aplicação
})
export class PostService {
  private apiUrl = 'http://localhost:3000/posts'; // URL da API

  constructor(private http: HttpClient) { } // Injete o HttpClient

  // Busca todos os posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  // Busca um post pelo ID
  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  // Adiciona um novo post
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }

  // Edita um post existente
  editPost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${post.id}`, post);
  }

  // Exclui um post
  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
