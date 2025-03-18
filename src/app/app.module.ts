import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Importe o RouterModule e Routes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from './forms.module';

// Defina as rotas
const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota para a página inicial
  { path: 'post/:id', component: PostComponent }, // Rota dinâmica para os posts
  { path: '**', redirectTo: '' } // Rota curinga para redirecionar para a página inicial
];

@NgModule({
  declarations: [
    // Não declare componentes standalone aqui
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configure as rotas
    AppComponent, // Importe o AppComponent aqui
    HomeComponent, // Importe o HomeComponent aqui
    PostComponent, FormsModule // Importe o PostComponent aqui
  ],
  providers: [],
  bootstrap: [AppComponent] // Componente inicial da aplicação
})
export class AppModule { }
