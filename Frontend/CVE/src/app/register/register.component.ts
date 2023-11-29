import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  error: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  }

  submit(): void {
    this.error = null;

    this.http.post('http://localhost:8000/CVE/register', this.form.getRawValue())
      .subscribe(
        () => {
          // Registro exitoso, redirigir al usuario a la página de inicio de sesión
          this.router.navigate(['/login']);
        },
        (error) => {
          // Manejar el error y asignar el mensaje al campo 'error'
          this.error = error.error.detail || 'Error durante el registro';
        }
      );
  }
}
