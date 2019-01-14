import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotoLibrary } from "@ionic-native/photo-library";

/**
 * Generated class for the PhotoLibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-photo-library',
    templateUrl: 'photo-library.html',
})
export class PhotoLibraryPage {

    photos = [];

    constructor(public navCtrl: NavController, private photoLibrary: PhotoLibrary) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PhotoLibraryPage');
    }

    loadPhotos() {
        /**
         * creationDate: Sat Mar 31 2018 03:14:19 GMT+0800 (CST)

         fileName: "IMG_0006.HEIC"

         filePath: "/Users/wenpeng/Library/Developer/CoreSimulator/Devices/826F340D-989F-4A1C-8EAB-E8045868EFED/data/Media/DCIM/100APPLE/IMG_0006.HEIC"

         height: 3024

         id: "CC95F08C-88C3-4012-9D6D-64A413D254B3/L0/001"

         latitude: 37.76007833333333

         longitude: -122.50956666666667

         mimeType: "image/heic"

         photoURL: "cdvphotolibrary://photo?photoId=CC95F08C-88C3-4012-9D6D-64A413D254B3%2FL0%2F001"

         thumbnailURL: "cdvphotolibrary://thumbnail?photoId=CC95F08C-88C3-4012-9D6D-64A413D254B3%2FL0%2F001&width=512&height=384&quality=0.5"

         width: 4032
         */
        this.photoLibrary.requestAuthorization().then(() => {
            this.photoLibrary.getLibrary().subscribe({
                next: library => {
                    console.log('fk', library)
                    library.forEach(function (libraryItem) {
                        console.log(libraryItem.id);          // ID of the photo
                        console.log(libraryItem.photoURL);    // Cross-platform access to photo
                        console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
                        console.log(libraryItem.fileName);
                        console.log(libraryItem.width);
                        console.log(libraryItem.height);
                        console.log(libraryItem.creationDate);
                        console.log(libraryItem.latitude);
                        console.log(libraryItem.longitude);
                        console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
                    });
                },
                error: err => {
                    console.log('could not get photos');
                },
                complete: () => {
                    console.log('done getting photos');
                }
            });
        })
            .catch(err => console.log('permissions weren\'t granted'));
    }

    savePhoto() {
        this.photoLibrary.requestAuthorization().then(()=>{
            this.photoLibrary.saveImage(encodeURI('http://47.75.244.75/test-files/mengxuan_store.png'),'mengxuan_store.png').then(()=>{
                console.log('fk save')
            })
        });

    }

}
