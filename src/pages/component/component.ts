import {Component} from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  IonicPage,
  LoadingController,
  ModalController,
  NavController,
  NavParams,
  Platform,
  ToastController
} from 'ionic-angular';
import {AccountInterface} from "../../interfaces/account";

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
  private accountData = {} as AccountInterface

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCrtl: ActionSheetController,
    public platform: Platform,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) {
  }

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
    modal.onDidDismiss(data => {
      console.log(data)
    })
    modal.present();
  }

  slide() {
    this.navCtrl.push('SlidePage')
  }

  promptAlert() {
    let prompt = this.alertCtrl.create({
        title: 'Login',
        message: "이름과 E-Mail를 입력하세요",
        inputs: [{name: 'name', placeholder: 'Name 입력'}, {name: 'email', placeholder: 'Email 입력'},],
        buttons: [{
          text: '취소', handler: data => {
            console.log('Cancel clicked');
          }
        }, {
          text: '저장', handler: data => {
            this.accountData = {name: data.name, email: data.email}
            this.navCtrl.push('navPage', {account: this.accountData});
          }
        }]
      })
    ;
    prompt.present();
  }

  toast() {
    let toast = this.toastCtrl.create({
      message: '3초 동안 보였다가 사라집니다.',
      duration: 3000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'ggpgpg'
    });
    toast.present()
  }

  loading() {
    let loading = this.loadingCtrl.create();
    loading.present();

    setTimeout(() => {
      loading.dismiss()
    }, 3000)
  }
}
