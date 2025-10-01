import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggedinPage } from "./loggedin-page/loggedin-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoggedinPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
