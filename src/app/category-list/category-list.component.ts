import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories:any=[{"cid":"101","cname":"Electronics","products":[{"pid":"10001","pname":"Laptop"},{"pid":"10002","pname":"Router"}]},{"cid":"102","cname":"Electricals","products":[{"pid":"20001","pname":"Cable"}]},{"cid":"103","cname":"Mechanical","products":[{"pid":"30001","pname":"Transformer"},{"pid":"30002","pname":"Generator"}]}];
  products:any;
  constructor() { }

  ngOnInit() {
  }
  findProducts(value){
    this.products=this.categories[value];
    console.log(this.products);
  }
}
