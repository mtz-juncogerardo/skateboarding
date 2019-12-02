import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../firestore.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name: any;
  price: number;
  description: any;
  image1: any;
  file1 = null;
  medida: any;
  extras: any;
  cat = null;
  user: firebase.User;
  userId: any;
  downloadURL1: Observable<string>;
  downloadURL2: Observable<string>;
  uploadPercent: Observable<any>;
  loading = false;

  constructor(private firestore: FirestoreService,
              private route: Router,
              private auth: AuthService,
              private http: HttpClient,
              private storage: AngularFireStorage) { }

  addProduct() {

    const product = {
      id: 'Ruberik',
      name: this.name,
      price: this.price,
      description: this.description,
      image1: this.image1,
      image2: '',
      medida: this.medida,
      extras: this.extras
    };

    this.firestore.createProduct(product, this.cat)
      .then(res => {
        product.id = res.id;
        this.firestore.updateProduct(res.id, product, this.cat);
        this.route.navigate(['/administrador']);
      });
  }

  uploadImage1(e) {
    this.loading = true;
    this.file1 = e.target.files[0] as File;
    const path = `Products/${this.file1.name}`;
    const task = this.storage.upload(path, this.file1);
    const ref = this.storage.ref(path);
    this.uploadPercent = task.percentageChanges();
    console.log('Image uploaded!');
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL1 = ref.getDownloadURL();
        this.downloadURL1.subscribe(url => {
          this.image1 = url;
          this.loading = false;
        });
      })
    )
      .subscribe(res => {
        console.log('Response', res);
      });
  }


  ngOnInit() {
    this.auth.getUserState()
      .subscribe(user => {
        this.user = user;
        this.userId = user.uid;
      });
  }

}
