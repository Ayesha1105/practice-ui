import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faLock = faLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // if (this.loginForm.valid) {
    //   this.auth.login(this.loginForm.value).subscribe(
    //     (result) => {
    //       console.log(result);
    //       this.router.navigate(['/admin']);
    //     },
    //     (err: Error) => {
    //       alert(err.message);
    //     }
    //   );
    // }
  }

}
