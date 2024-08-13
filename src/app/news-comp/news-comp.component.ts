import { Component } from '@angular/core';
import { NewsServiceService } from '../new-service.service';

@Component({
  selector: 'app-news-comp',
  templateUrl: './news-comp.component.html',
  styleUrls: ['./news-comp.component.css']
})
export class NewsCompComponent {

  constructor(private service:NewsServiceService){}
  info:any
  ngOnInit(){
    this.service.getNews().subscribe((data: { articles: any; })=>{
     console.log(data)
     this.info = data.articles
    })

   
  }
}
