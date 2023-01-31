import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../service/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  ngOnInit(){
    this.buttonText = "Oh Snap!";
  }

  constructor(private faceSnapsService: FaceSnapsService){}

  onSnap(){
    if (this.buttonText === "Oh Snap!") {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "snap");
      this.buttonText = "Oops, un Snap!";
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "unsnap");
      this.buttonText = "Oh Snap!";
    }
  }

}
