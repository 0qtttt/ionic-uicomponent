import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the SlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private images = [
    {src: 'assets/imgs/1.jpg', title: "11111", subTitle: '11111111'},
    {src: 'assets/imgs/2.jpg', title: "22222", subTitle: '22222222'},
    {src: 'assets/imgs/3.jpg', title: "33333", subTitle: '33333333'},
    {src: 'assets/imgs/4.jpg', title: "44444", subTitle: '44444444'},
    {src: 'assets/imgs/5.jpg', title: "55555", subTitle: '55555555'},
  ]

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidePage');
  }

}
