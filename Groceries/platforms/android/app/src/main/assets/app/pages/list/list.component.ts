import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { GroceryListService } from "../../shared/grocery/grocery-list.service";
import { Grocery } from "../../shared/grocery/grocery";
import { TextField } from "ui/text-field";


@Component({
  selector: "list",
  moduleId: module.id,
  templateUrl: "./list.html",
  styleUrls: ["./list-common.css", "./list.css"],
  providers: [GroceryListService]
})
export class ListComponent implements OnInit {
  groceryList: Array<Grocery>;
  grocery = "";
  listLoaded = false;
  isLoading = true;

  @ViewChild("groceryTextField") groceryTextField: ElementRef;

  constructor(private _list: GroceryListService) {}

  ngOnInit() {
    this.isLoading = true;
    this._list.load().subscribe(res => {
      var res2 = JSON.parse(JSON.stringify(res));
      this.groceryList = res2;
      this.isLoading = false;
      this.listLoaded = true;
    });
  }

  add() {
    if (this.grocery.trim() === "") {
      alert("Enter a grocery item");
      return;
    }

    // Dismiss the keyboard
    let textField = <TextField>this.groceryTextField.nativeElement;
    textField.dismissSoftInput();

    var xyz = new Grocery();

    var lenght = this.groceryList.length + 1;

    xyz.id = lenght.toString();

    xyz.name = this.grocery;

    this.groceryList.push(xyz);

    this._list.add(xyz).subscribe(res => alert("ok"), err => alert(err));
  }
}
