import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'bindPage' })
@Component({
  selector: 'page-bind',
  templateUrl: 'bind.html'
})
export class BindPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  //화면이 load되면 바로 호출되는 life cycle method  아이 >.<
  ionViewDidLoad() {
    console.log('ionViewDidLoad BindPage' + this.navParams.get('name'));
  }

  backBtn() {
    this.navCtrl.pop();
  }
}
