import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.css']
})
export class SearchTextComponent implements OnInit {
  descricao = ""

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearch() {
    if (this.descricao) {
      this.router.navigate(["/produtos"], { queryParams: { descricao: this.descricao } });
      return;
    }
    this.router.navigate(["/produtos"])
  }
}
