import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-mean-crud-tutorial';
  videoURL: string = '';

  public displayVideo(videoURL: string) {
    this.videoURL = videoURL;
    console.log(videoURL);
  }
}
