import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Importe o RouterModule e Routes
import { ReactiveFormsModule } from '@angular/forms'; // Importe o ReactiveFormsModule para formulários
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule para requisições HTTP
import { AngularFireModule } from '@angular/fire/compat'; // Importe o AngularFireModule para Firebase
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Importe o AngularFireAuthModule para autenticação
import { environment } from '../environments/environment'; // Importe as configurações do Firebase

// Componentes (standalone)
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component'; // Importe o PostComponent
import { AddPostComponent } from './components/add-post/add-post.component'; // Importe o AddPostComponent
import { EditPostComponent } from './components/edit-post/edit-post.component'; // Importe o EditPostComponent
import { LoginComponent } from './components/login/login.component'; // Importe o LoginComponent
import { RegisterComponent } from './components/register/register.component'; // Importe o RegisterComponent

// AuthGuard
import { AuthGuard } from './services/auth.guard'; // Importe o AuthGuard

// Defina as rotas
const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota para a página inicial
  { path: 'post/:id', component: PostComponent }, // Rota dinâmica para os posts
  { path: 'add-post', component: AddPostComponent, canActivate: [AuthGuard] }, // Rota para o formulário de adicionar posts (protegida)
  { path: 'edit-post/:id', component: EditPostComponent, canActivate: [AuthGuard] }, // Rota para o formulário de editar posts (protegida)
  { path: 'login', component: LoginComponent }, // Rota para o formulário de login
  { path: 'register', component: RegisterComponent }, // Rota para o formulário de registro
  { path: '**', redirectTo: '' } // Rota curinga para redirecionar para a página inicial
];

@NgModule({
  declarations: [
    // Nenhum componente aqui, pois eles são standalone
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configure as rotas
    ReactiveFormsModule, // Adicione o ReactiveFormsModule para formulários
    HttpClientModule, // Adicione o HttpClientModule para requisições HTTP
    AngularFireModule.initializeApp(environment.firebase), // Inicialize o Firebase
    AngularFireAuthModule, // Adicione o AngularFireAuthModule para autenticação
    // Importe os componentes standalone
    AppComponent,
    HomeComponent,
    PostComponent,
    AddPostComponent,
    EditPostComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [AuthGuard], // Adicione o AuthGuard como provedor
  bootstrap: [AppComponent] // Componente inicial da aplicação
})
export class AppModule { }
