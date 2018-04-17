import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}
  items = [{ id: 1, name: 'Component' }, { id: 2, name: '두번째 item' }, { id: 3, name: '세번째 item' }];
  disabledSwitch = false;
  username = 'hohohoho';

  ionViewDidLoad() {
    console.log('로드다 임마');
  }

  ionViewWillEnter() {
    console.log('엔터다임마 홈페이지');
  }

  itemSelected(item) {
    if (item.id === 1) {
      this.navCtrl.push(item.name + 'Page');
    }
    // alert(item.id + item.name);
  }

  MyButton(event) {
    if (this.username) {
      this.navCtrl.push('bindPage', { name: this.username });
    } else {
      alert('입력 해주세요.');
    }
  }

  ionViewWillUnload() {
    console.error('디스트로이될때래');
  }
}
