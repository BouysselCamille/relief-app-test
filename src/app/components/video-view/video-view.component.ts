import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'video-view',
  templateUrl: './video-view.component.html'
})

export class VideoViewComponent implements OnInit {
  @Input() videoURL:string = '';
  safeURL: SafeResourceUrl = '';

  constructor(private _sanitizer: DomSanitizer){ }
  
  

  ngOnInit(): void {
    this.safeURL = this.getSafeURL(this.videoURL);
  }

  ngOnChanges (): void {
    this.safeURL = this.getSafeURL(this.videoURL);
  }

  public getSafeURL(url: string): SafeResourceUrl {
    const embedURL = "https://www.youtube.com/embed/" + this.videoURL.split('=')[1];
    return this._sanitizer.bypassSecurityTrustResourceUrl(embedURL);
  }

}