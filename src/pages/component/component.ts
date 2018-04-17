import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform, ModalController } from 'ionic-angular';

/**
 * Generated class for the ComponentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-component',
  templateUrl: 'component.html'
})
export class ComponentPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCrtl: ActionSheetController,
    public platform: Platform,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentPage');
  }

  actionSheet() {
    let actionSheet = this.actionSheetCrtl.create({
      title: 'Choose Menu',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Search',
          icon: !this.platform.is('ios') ? 'search' : null,
          handler: () => {
            console.log('Search clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  modal() {
	let modal = this.modalCtrl.create('ModalPage');
	modal.present();
  }
}
