import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-image',
  standalone: true,
  imports: [],
  templateUrl: './slider-image.component.html',
  styleUrl: './slider-image.component.css'
})
export class SliderImageComponent implements OnInit {

  contentImage : string[] = [
    'image/image2.png',
    'image/image1.png',
    'image/image2.png',
    'image/image1.png',
    'image/image2.png',
    'image/image1.png',
  ]

  content ?: string | undefined = this.contentImage[0]
  
  ngOnInit(): void {
    for (let i=0; i<this.contentImage.length;i++){
      setTimeout(() => {
        this.content = this.contentImage[i]
      }, 8000);
      console.log('Hola')
    }
  }

  

}
