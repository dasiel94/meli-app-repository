import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ItemsService } from "../../services/items.service";
import { IResult } from "../../utils/interfaces/result";

@Component({
  selector: "app-search-items",
  templateUrl: "./search-items.component.html",
  styleUrls: ["./search-items.component.scss"],
})
export class SearchItemsComponent implements OnInit {
  searchResult: IResult[] = [];
  resultsList: string[] = [];

  constructor(
    private route: ActivatedRoute,
    public itemService: ItemsService
  ) {}

  ngOnInit() {
    this.mapResponseToResult();
  }

  private mapResponseToResult(): void {
    this.route.queryParamMap.subscribe(
      (res: any) => {
        this.itemService
          .getResultsByQuery(res.params.search)
          .subscribe((res: any) => {
            res.filters.forEach((item) => {
              if (item.id === "category") {
                item.values.forEach((cat) => {
                  cat.path_from_root.forEach((path) => {
                    this.resultsList.push(path.name);
                  });
                });
              }
              this.resultsList.push(item.category_id);
            });
            this.itemService.categories = this.resultsList;
            res.results.forEach((item) => {
              this.searchResult.push(<IResult>{
                items: [
                  {
                    id: item.id,
                    title: item.title,
                    price: {
                      amount: item.price,
                      currency: item.currency_id,
                    },
                    free_shipping: item.shipping.free_shipping,
                    condition: item.condition,
                  },
                ],
              });
            });
          });
      },
      (err) => console.error(err)
    );
  }
}
