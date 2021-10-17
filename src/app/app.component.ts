import { Component, OnInit } from '@angular/core';
import { CrudService } from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-mean-crud-tutorial';
  videoURL: string = '';
  isBookmarksVisible: boolean = false;
  totalBookmarks: number = 0;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetBookmarks().subscribe(res => {
      console.log(res)
      this.totalBookmarks = res.length;
    });    
  }

  public displayVideo(videoURL: any) {
    this.videoURL = videoURL;
    console.log(videoURL);
  }

  public showBookmarks() {
    this.isBookmarksVisible = !this.isBookmarksVisible;
  }

  public saveVideo() {
    this.crudService.AddBookmark({ url: this.videoURL })
    .subscribe(() => {
        console.log('Data added successfully!');
      }, (err) => {
        console.log(err);
    });
  }
}
