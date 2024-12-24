import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./ui/navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { StatesComponent } from "./pages/states/states.component";
import { ContactComponent } from "./pages/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent, StatesComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tourism';
}
