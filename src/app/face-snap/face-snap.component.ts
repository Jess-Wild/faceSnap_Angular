import { FaceSnapsService } from './../service/face-snaps.service';
import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

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
