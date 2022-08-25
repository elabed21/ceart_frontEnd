import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as $ from 'jquery';
import {AuthService} from 'src/app/services/auth.service';
import {LocalStorageService} from 'src/app/services/local-storage.service';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public loginForm: FormGroup;
  public signupForm: FormGroup;
  private token = " " || undefined;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private storage: LocalStorageService,
    private router: Router,
    public snackBar: MatSnackBar,
  ) {

    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      fullname: ['', Validators.required],
      shop_name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    $.getScript('../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js');
    $.getScript('assets/js/main.min.js');
    $.getScript('assets/js/script.js');
  }

  onLogin() {
    this.authService.login(this.loginForm.value).subscribe((res) => {
      this.storage.saveToken(res.body!.token!);
      this.openSnackBar("connection avec succès ", 'X', 'snackBar-success');
      this.router.navigate(['/']);
    }, (err) => {
      this.openSnackBar("votre login/password est incorrect", 'X', 'snackBar-danger');
    });
  }

  openSnackBar(message: string, action: string, type: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      panelClass: [type],
    });
  }
  onSignup() {
        this.authService.signup(this.signupForm.value).subscribe(res => {
          window.location.reload();
          this.openSnackBar("Votre compte à été créer avec succès", 'X', 'snackBar-success');
    }, (err) => {
      this.openSnackBar("Merci de vérifier vos informations", 'X', 'snackBar-danger');
    });
  }

}
