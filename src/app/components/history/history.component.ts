import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'history',
  templateUrl: './history.component.html'
})

export class HistoryComponent implements OnInit {
  @Output() onVideoSelected = new EventEmitter<any>();
  
  Videos:any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetVideos().subscribe(res => {
      console.log(res)
      this.Videos =res;
    });    
  }

  public selectVideo(url: string) {
    this.onVideoSelected.emit(url);
  }

}