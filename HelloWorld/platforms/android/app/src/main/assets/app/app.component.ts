import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My Apple" class="action-bar"></ActionBar>
    <Image src="~/images/apple.jpg"></Image>
  `
})
export class AppComponent {
  constructor() {
    console.dir({ type: "Apple", color: "Red" });
  }
}
