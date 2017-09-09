import { Component, OnInit } from '@angular/core';
import { RedirectService } from '../../services/redirect.service';
import { HttpService } from '../../services/http.service';
import * as dictionary from '../../appDictionary';
declare var swal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HttpService, RedirectService]
})
export class LoginComponent implements OnInit {

  constructor(private redirectService: RedirectService, private http: HttpService) { }

  user = { password: "prabhjyot", repassword: "prabhjyot", name: "Prabhjyot", username: "prabhjyot", email: "prabhjyotgambhir1994@gmail.com", mobileno: "9990847576"};
  
  login() {
    this.http.post("/account/login", this.user).subscribe(data => {
      if(data) {
        localStorage.setItem("currentUser", JSON.stringify({name: data.user[0].name, username: data.user[0].username, email: data.user[0].email}));
        this.redirectService.redirectHome();     
      }
    });
  }
  
  ngOnInit() {
  }

  register() {
    // var self = this;
    // if(this.user.password !== this.user.repassword) {
    //   swal({title: "Error", text: dictionary.passwordMiamatch, type: "error"});
    // } else {
    //   this.http.post("/users", this.user).subscribe(data => {
    //     if(data) {
    //       swal({title: dictionary.registrationHeading, text: dictionary.registrationSuccess, type: "success", timer: 3000}).then(function(){}, function(dismiss){
    //         self.showHideRegister();
    //       });
    //     }
    //   });
    // }
  }


}
