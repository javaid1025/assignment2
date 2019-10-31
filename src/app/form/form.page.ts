import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public nameText: string;
  public authorText: string;
  data = [{ name: this.nameText, author: this.authorText }];
  constructor(public alertController: AlertController, private books: BooksService) { }

  ngOnInit() {
  }
  async addBook() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Congratulations!!',
      message: 'Student  ' + this.nameText + ' having Roll No. ' + this.authorText + ' is added into the list ',
      buttons: ['OK']
    });
    alert.present();
    this.books.addBook(this.nameText, this.authorText);
  }

}
