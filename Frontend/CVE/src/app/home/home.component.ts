import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Emitters} from '../emitters/emitters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = '';

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/CVE/user', {withCredentials: true}).subscribe(
      (res: any) => {
        this.message = `Bienvenido! ${res.name}`;
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.message = 'ÚNETE Y SE PARTE NUESTRA FAMILIA';
        Emitters.authEmitter.emit(false);
      }
    );
  }

}