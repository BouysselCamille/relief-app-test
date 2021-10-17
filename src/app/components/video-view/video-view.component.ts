import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'video-view',
  templateUrl: './video-view.component.html'
})

export class VideoViewComponent implements OnInit {
  
  videoUrl:string = '';

  ngOnInit(): void {}

}