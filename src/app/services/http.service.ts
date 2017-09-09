import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as config from '../globalConfig';
import * as dictionary from '../appDictionary';
import 'rxjs/add/operator/map';
declare var swal: any;

@Injectable()
export class HttpService {

  constructor(private http: Http) {}
  
  APIURL = config.apiUrl;

  get(url) {
    return this.http.get(this.APIURL + url, {})
    .map((res:Response) => {
      console.log('get ' + url + ' response: ', res);
      if(res.json().code === 500) {
        swal(dictionary.heading500, dictionary.message500, "error");
        return false;
      } else if(!res.json().success) {
        swal(dictionary.headingFail, res.json().info, "error");
        return false;
      } else{
        return res.json();
      }
    });
  }

  post(url, data) {
    console.log('request data: ', data);
    return this.http.post(this.APIURL + url, data, {})
    .map((res:Response) => {
      console.log('post ' + url + ' response: ', res);
      if(res.json().code === 500) {
        console.log('fail res!');
        swal(dictionary.heading500, dictionary.message500, "error");
        return false;
      } else if(!res.json().success) {
        swal(dictionary.headingFail, res.json().info, "error");
        return false;
      } else{
        return res.json();
      }
    });
  }

  put(url, data) {
    console.log('request data: ', data);
    return this.http.put(this.APIURL + url, data, {})
    .map((res:Response) => {
      console.log('post ' + url + ' response: ', res);
      if(res.json().code === 500) {
        console.log('fail res!');
        swal(dictionary.heading500, dictionary.message500, "error");
        return false;
      } else if(!res.json().success) {
        swal(dictionary.headingFail, res.json().info, "error");
        return false;
      } else{
        return res.json();
      }
    });
  }

  delete(url) {
    return this.http.delete(this.APIURL + url, {})
    .map((res:Response) => {
      console.log('post ' + url + ' response: ', res);
      if(res.json().code === 500) {
        swal(dictionary.heading500, dictionary.message500, "error");
        return false;
      } else if(!res.json().success) {
        swal(dictionary.headingFail, res.json().info, "error");
        return false;
      } else{
        return res.json();
      }
    });
  }
}
