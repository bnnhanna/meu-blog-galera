import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importe o CommonModule para usar *ngIf
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NavbarComponent] // Adicione CommonModule
})
export class AddPostComponent {
  postForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      spotifyUrl: ['', Validators.required] // Adicione o campo spotifyUrl
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      console.log('Post adicionado:', this.postForm.value);
    }
  }
}
