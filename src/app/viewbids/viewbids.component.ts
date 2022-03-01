import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { SellerService } from '../seller.service';
import { empty, Observable } from 'rxjs';
import { product, seller } from './viewbidsmodel';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-viewbids',
  templateUrl: './viewbids.component.html',
  styleUrls: ['./viewbids.component.css']
})
export class ViewbidsComponent implements OnInit {
productID:any
products:any=[]
sellerSelect:any=[]
bids:any=[]
displayedColumns = ['BidAmount', 'Name', 'Email', 'Mobile'];
dataSource = this.products;

  constructor(public rest:SellerService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }


  getAllProducts() {
    this.products = [];
    this.rest.getAllProducts().subscribe((data: {}) => {
            this.products = data;
      //this.products.ProductName=data.
      console.log(this.products);
    });
  }

  getSeller(pid: any) {  
       
    this.sellerSelect = this.products.filter((d:any)=>d.id==pid);   
    console.log(this.sellerSelect); 
    this.bids=this.sellerSelect[0].bids;
    console.log(this.bids);   
  }



  
}


