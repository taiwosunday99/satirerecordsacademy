import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  slideIndex = 0;

  constructor() { }

  ngOnInit() {


    this.showSlides();

  }



showSlides = () => {
  const slides = document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>;
  const dots = document.getElementsByClassName('dot') as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

     this.slideIndex++;

     if (this.slideIndex > slides.length) {
       this.slideIndex = 1;
     }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
     slides[this.slideIndex - 1].style.display = 'block';
     dots[this.slideIndex - 1].className += ' active';

    setTimeout(this.showSlides, 6000);
  }



}
