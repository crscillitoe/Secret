import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  messages: Message[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get("https://yenlee-4a86e.firebaseio.com/message.json")
      .subscribe((data: any) => {
        for (let key of Object.keys(data)) {
          console.log(key);
          this.messages.push({
            header: data[key]["header"],
            message: data[key]["message"]
          });
        }
      });
  }
}

interface Message {
  header: string;
  message: string;
}
