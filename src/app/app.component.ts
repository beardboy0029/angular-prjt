import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/env';
import { AppService } from './_servies/app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'my-angular-app';

  constructor(
    private apiservice: AppService
  ) { }

  ngOnInit() {
    this.apiservice.getUsers().subscribe((response) => {
      console.log('API Response:', response);
    });
  }

}
