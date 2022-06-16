import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ItemComponent } from "./components/item/item.component";
import { MainComponent } from "./components/main/main.component";
import { DetailsComponent } from "./components/details/details.component";
import { SearchItemsComponent } from "./components/search-items/search-items.component";
import { CategoryComponent } from "./components/category/category.component";

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    MainComponent,
    DetailsComponent,
    SearchItemsComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: "never" }),
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
