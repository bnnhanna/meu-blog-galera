import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  async login(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/']);
    } catch (error) {
      throw error;
    }
  }

  async register(email: string, password: string) {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.router.navigate(['/']);
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    await this.afAuth.signOut();
    this.router.navigate(['/login']);
  }
}
