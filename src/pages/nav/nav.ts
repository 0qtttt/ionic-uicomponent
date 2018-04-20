import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AccountInterface} from "../../interfaces/account";

/**
 * Generated class for the NavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name: 'navPage'})
@Component({
  selector: 'page-nav',
  templateUrl: 'nav.html',
})
export class NavPage {
  private accountData = {} as AccountInterface;

  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer
  ) {
  }

  ionViewDidLoad() {
    this.accountData = this.navParams.get('account')
    console.log('ionViewDidLoad NavPage');
  }

  sendEmail(item: ItemSliding, user) {
    item.close();
    let email = {
      to: user.email,
      subject: 'To :' + user.name,
      body: '',
      isHtml: true
    };
// Send a text message using default options
    this.emailComposer.open(email);
  }


}
