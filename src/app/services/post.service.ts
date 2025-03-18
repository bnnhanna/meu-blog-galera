import { Injectable } from '@angular/core';

// Interface para definir a estrutura de um post
export interface Post {
  id: number;
  title: string;
  content: string;
  spotifyUrl: string; // URL do Spotify para o player
}

@Injectable({
  providedIn: 'root' // O serviço estará disponível em toda a aplicação
})
export class PostService {
  // Dados mockados dos posts
  private posts: Post[] = [
    {
      id: 1,
      title: 'Meu Álbum Favorito',
      content: 'Este é o meu álbum favorito de todos os tempos!',
      spotifyUrl: 'https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3' // Exemplo de URL do Spotify
    },
    {
      id: 2,
      title: 'Outro Álbum Incrível',
      content: 'Este álbum também é incrível e merece ser ouvido!',
      spotifyUrl: 'https://open.spotify.com/embed/album/2DFixLWuPkv3KT3TnV35m3' // Exemplo de URL do Spotify
    }
  ];

  constructor() { }

  // Método para obter todos os posts
  getPosts(): Post[] {
    return this.posts;
  }

  // Método para obter um post específico pelo ID
  getPostById(id: number): Post | undefined {
    return this.posts.find(post => post.id === id);
  }
}
