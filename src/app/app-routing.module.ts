import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsComponent } from "./components/details/details.component";
import { SearchItemsComponent } from "./components/search-items/search-items.component";

const routes: Routes = [
  { path: "items", component: SearchItemsComponent },
  { path: "items/:id", component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
