import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}
  items = [{ id: 1, name: '첫번째 item' }, { id: 2, name: '두번째 item' }, { id: 3, name: '세번째 item' }];
  disabledSwitch = false;
  username = 'hohohoho';

  itemSelected(item) {
    alert(item.id + item.name);
  }

  MyButton(event) {
    if (this.username) {
      this.navCtrl.push('bindPage', { name: this.username });
    } else {
      alert('입력 해주세요.');
    }
  }
}
