import { Component, Input } from "@angular/core";
import { isEmpty } from "lodash";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
})
export class CategoryComponent {
  @Input() categories: string[];

  isEmptyCategory(index: number): boolean {
    return isEmpty(this.categories[index]);
  }
}
