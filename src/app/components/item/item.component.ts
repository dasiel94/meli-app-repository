import { Component, Input } from "@angular/core";
import { IResult } from "../../utils/interfaces/result";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent {
  @Input() results: IResult[];
}
