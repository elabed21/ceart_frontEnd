import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import * as $ from 'jquery';
import {FilePondModule} from 'ngx-filepond';
import {FilePondOptions} from 'filepond';
import {DataService} from "../../services/data.service";
import {FilePondComponent} from "ngx-filepond/filepond.component";
import {ProductModel} from "../../models/product.model";
import {ProductProfileModel} from "../../models/productProfile.model";
import {environment} from "../../../environments/environment";
import {CategoryModel} from "../../models/category.model";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  @ViewChild('myPond') myPond: FilePondComponent
  data: any;
  file: File;
  files = [];
  fileBlob: any;
  dataa: any;
  fileToUpload: File | null = null;
  form: FormGroup = new FormGroup(
    {
      name: new FormControl("", [Validators.required, Validators.minLength(4)]),
      image: new FormControl("", [Validators.required, Validators.email]),
    }
  );
  uploadForm: FormGroup;
  products = [];
  categories: any;

  constructor(private dataService: DataService,
              private fb: FormBuilder,
              private http: HttpClient,
  ) {
    this.uploadForm = this.fb.group({
      files: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.getData();
    this.getCategories();
  }

  pondOptions: FilePondOptions = {
    allowMultiple: true,
    labelIdle: 'Drop files here...'
  }

  pondHandleAddFile(event: any) {
    // @ts-ignore
    const attachments = this.uploadForm.get('files') as FormArray;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.file.file);
    fileReader.onload = () => {
      attachments.push(this.createFile(fileReader, event.file.file, event));
    };
  }

  createFile(fileReader: any, file: any, event: any): any {
    return this.fb.group({
      fullName: file,
      size: file.size,
      mimeType: file.type,
      document: (fileReader.result as string).split(',')[1]
    });
  }

  multiUploadFile(event: any): any {
    // @ts-ignore
    this.form4.controls.CS_CASE_ATTACHMENTS.value.attachments.map((attachment) => {
      if (attachment.fullName === event.file.file.name) {
        this.downloadFile(attachment);
      }
    });
  }

  downloadFile(row: any): any {
    const URL = 'data:' + row.mimeType + ';base64,' + row.document;
    // this.extraService.downloadBlobFile(row.fullName, URL);
  }

  pondHandleRemoveFile = (event: any) => {
    // @ts-ignore
    const attachments = this.uploadForm.get('files') as FormArray;
    // @ts-ignore
    attachments.removeAt(attachments.value.findIndex((attachment) => attachment.fullName.name === event.file.file.name));

  };

  getData(): any {
    // @ts-ignore
    this.dataService.getCollection(new ProductProfileModel(), "/profile")
      .pipe()
      .subscribe(
        (response: any) => {
          if (response) {
            console.log("response", response.products);
            this.data = response.products;
          }
        }, (error) => {

        });

  }

  postdata(data: any): any {

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'multipart/form-data');
    headers.set('Accept', 'application/json');
    this.http.post(environment.secureApiURL + 'product/add', data, {headers})
      .pipe()
      .subscribe(
        (response: any) => {
          if (response) {
            console.log("response", response);
            this.products = response.body;
          }
        }, (error) => {

        });

  }

  onClickSubmit(values: any) {
    console.log("AAAAA", values);
    const formData = new FormData();
    formData.append("name", values.product_name);
    formData.append("name_cat", values.name_cat);
    formData.append("price", values.price);

    for (const element of this.uploadForm.controls.files.value) {
      const file = element.fullName;
      if (file) {
        // @ts-ignore
        formData.append('files', file);
      }
    }
    this.postdata(formData);
  }

  getCategories(): void {
// @ts-ignore
    this.dataService.getCollection(new CategoryModel(), '/all')
      .pipe()
      .subscribe(
        (response: any) => {
          if (response) {
            this.categories = response;
          }
        });
  }
}
