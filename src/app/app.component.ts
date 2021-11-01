import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'phoenix-wc-wiki-ngx';

  sendCustomEvent(){
    const data = {
      name: 'DataSentThroughCustomEvent'
    };
    const event = new CustomEvent('phoenix-wc-wiki-ngx-ce-data-sent-test', { detail: data });
    window.dispatchEvent(event);
  }
}
