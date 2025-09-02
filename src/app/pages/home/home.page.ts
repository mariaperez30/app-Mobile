import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API } from 'src/app/shared/service/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
 data: news| null= null;
  constructor(private r:Router, private api:API) { }

  ngOnInit() {
    this.new()
  }
async new(){
this.data = await this.api.get<news>('https://newsapi.org/v2/top-headlines?language=en')
console.log(this.data.articles[0].urlToImage)

 }
}
export interface news{
    status: string
    totalResults: number
    articles: articles[]
}
export interface articles{
    source: any
    author?: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content?: string
}