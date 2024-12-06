import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() rating: number = 0; // Évaluation par défaut
  @Input() maxRating: number = 5; // Nombre maximum d'étoiles

  get stars() {
    return Array(this.maxRating).fill(0);
  }

  testimonials = [
    {
      name: 'Amanda C',
      image: 'images/amanda.png',
      text: 'Pilgrims Chapel has transformed my life. The community is warm and welcoming, and the sermons are truly inspiring. It\'s a place where I feel at home.'
    },
    {
      name: 'John M',
      image: 'images/john.png',
      text: 'I\'ve found a loving family at Pilgrims Chapel. The chapel\'s dedication to reformed faith and Baptist confession really resonates with me.'
    },
    {
      name: 'Sarah L',
      image: 'images/sarah.png',
      text: 'The mission to live a life of worship is evident in everything Pilgrims Chapel does. I\'m grateful for the genuine care for each member.'
    }
  ];

}
