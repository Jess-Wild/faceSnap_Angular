// export class FaceSnap {
//     title: string;
//     description: string;
//     imageUrl: string;
//     createdDate: Date;
//     snaps: number;

//     constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number){
//         this.title = title;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this.createdDate = createdDate;
//         this.snaps = snaps;
//     }
    
// }

//fait la même chose mais avec du code beaucoup plus court
//le fait d'ajouter public dit à typescript que :
//la calss FaceSnap aura des propriétés qui auront les nom (title, description ect.)
//et en plus qu'on pourra les placer en argument à notre constructor FaceSnap

export class FaceSnap {
    constructor(public title: string,
        public description: string,
        public imageUrl: string,
        public createdDate: Date,
        public snaps: number){

        }
}