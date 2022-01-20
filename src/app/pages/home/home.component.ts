import { Component, OnInit } from '@angular/core';
import { WorkFlix, Work } from './models/workflix';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public workflix: WorkFlix;
  public work1: Work;
  
  constructor() {
    this.workflix = {
      navbar: {
        logo: {
          src: '../../../assets/images/LOGO/logo.png',
          alt: 'logo de WorkFlix',
        },
        logo2: {
          src: '../../../assets/images/LOGO/logo2.png',
          alt: 'logo de agb',
        },
      },
      hero: {
        title: 'Mi top 5',
        imgGallery: [
          {
            src: '../../../assets/images/top5/vueltaex.png',
            alt: 'Imagen resumen Vuelta Extremadura',
          },
          {
            src: '../../../assets/images/top5/beher.png',
            alt: 'Imagen resumen BEHER',
          },
          {
            src: '../../../assets/images/top5/nextcsa.png',
            alt: 'Imagen resumen Next Level',
          },
          {
            src: '../../../assets/images/top5/qq-poker.png',
            alt: 'Imagen resumen Next Level',
          },

          {
            src: '../../../assets/images/top5/logosgaming.png',
            alt: 'Imagen resumen Next Level'
          }
        ],
      },
      
    };
    this.work1 = {
      title: "GALERÍA VUELTA EXTREMADURA",
      imgGallery: [
        {
          src: "../../../assets/images/trabajos1/vueltaex1.png",
          alt: "GITS"
        },
        {
          src: "../../../assets/images/trabajos1/vueltaex2.png",
          alt: "Deep Impact"
        },
        {
          src: "../../../assets/images/trabajos1/vueltaex3.png",
          alt: "12 Monos"
        },
        {
          src: "../../../assets/images/trabajos1/vueltaex4.png",
          alt: "Core"
        },
        {
          src: "../../../assets/images/trabajos1/vueltaex2.png",
          alt: "6 dia"
        }
      ]
    };
  }

  ngOnInit(): void {}
}
