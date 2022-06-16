import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { ItemsService } from "../../services/items.service";
import { isEmpty } from "lodash";
import { IItem } from "../../utils/interfaces/item";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {
  item: IItem;

  constructor(
    public itemService: ItemsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.itemService.getItemById(id).subscribe(
      (res: any) => {
        this.item = res;
      },
      (err) => console.error(err)
    );
  }

  isNotEmptyItemId(): boolean {
    return !isEmpty(this.item.id);
  }

  isNotEmptyItem(): boolean {
    return !isEmpty(this.item);
  }
}
