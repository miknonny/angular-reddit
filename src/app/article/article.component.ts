import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row'; // <app-article class=row> when rendered.
  @Input() article: Article;

  constructor() {
    // article is populated by the input now
    // we do not need to do anything here.
  }

  // returning false prevents the page from reloading on click.
  votesUp() {
    this.article.voteUp();
    return false;
  }

  votesDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
