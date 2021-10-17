import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'bookmarks',
  templateUrl: './bookmarks.component.html'
})

export class BookmarksComponent implements OnInit {
  @Output() onBookmarkSelected = new EventEmitter<string>();
  
  Bookmarks:any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetBookmarks().subscribe(res => {
      console.log(res)
      this.Bookmarks =res;
    });    
  }

  public selectBookmark(url: string) {
    this.onBookmarkSelected.emit(url);
  }

}