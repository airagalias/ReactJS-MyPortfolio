import { Component, OnInit } from '@angular/core';

interface IWork {
  title: string;
  image: string;
  url: string;
  technologies: string[];
}

@Component({
  selector: 'works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
})
export class WorksComponent {
  works: IWork[] = [
    {
      title: 'Touch by Paolo G.',
      image: 'touch-by-paolo-g.JPG',
      url: 'https://tuitt.gitlab.io/students/batch51/aira-galias/capstone-1/',
      technologies: ['git', 'html', 'css', 'bootstrap', 'javascript'],
    },
    {
      title: 'Jeepney',
      image: 'book-jeepney.JPG',
      url:
        'https://tuitt.gitlab.io/students/batch51/aira-galias/zuitt-capstone-bookjeepney/',
      technologies: ['git', 'html', 'css', 'bootstrap', 'javascript'],
    },
    {
      title: 'Covid Tracker',
      image: 'covid-tracker.JPG',
      url: 'https://rentir.herokuapp.com/',
      technologies: ['git', 'html', 'css', 'bootstrap', 'javascript'],
    },
    {
      title: 'Rentr',
      image: 'rentr.JPG',
      url: 'https://rentir.herokuapp.com/',
      technologies: [
        'git',
        'html',
        'css',
        'bootstrap',
        'javascript',
        'php',
        'laravel',
      ],
    },
  ];
}
