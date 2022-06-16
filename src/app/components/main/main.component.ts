import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  query = "";

  constructor(private router: Router, private title: Title) {}

  ngOnInit() {
    this.title.setTitle("Buscar productos");
  }

  search() {
    this.router.navigate(["/items"], { queryParams: { search: this.query } });
  }
}
