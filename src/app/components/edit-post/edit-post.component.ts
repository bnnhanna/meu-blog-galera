import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService, Post } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  postForm: FormGroup;
  postId: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      spotifyUrl: ['', Validators.required]
    });
    this.postId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.loadPost(this.postId);
  }

  // Carrega o post para edição
  loadPost(id: number): void {
    this.postService.getPostById(id).subscribe(
      (data: Post) => this.postForm.patchValue(data),
      (error: any) => console.error('Erro ao carregar post:', error)
    );
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const updatedPost: Post = { id: this.postId, ...this.postForm.value };
      this.postService.editPost(updatedPost).subscribe(
        () => this.router.navigate(['/']),
        (error: any) => console.error('Erro ao editar post:', error)
      );
    }
  }
}
