import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error: string | null = null; // Nuevo campo para manejar el mensaje de error

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  submit(): void {
    this.error = null; // Limpiar el mensaje de error en cada nuevo intento

    this.http.post('http://localhost:8000/CVE/login', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        // Manejar el error y asignar el mensaje al campo 'error'
        this.error = error.error.detail || 'Error durante el inicio de sesión';
      }
    );
  }
}
