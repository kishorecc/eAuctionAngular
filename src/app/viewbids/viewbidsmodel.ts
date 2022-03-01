import { BindingScope } from "@angular/compiler/src/render3/view/template"
import { NgModule } from "@angular/core";


export interface seller {
    result:product[]
    
}


export interface product {
    ProdID: string;
    ProductName: string;
    ShortDescription:string;
    DetailDescription:string;
    Category:string;
    BidEndDate:any;
    StartingPrice: number;
    FirstName:string;
    LastName:string;
    Address:string;
    City:string;
    State:string;
    Pin:string;
    Phone:string;
    Email:string;
    Bids:buyer[];

}

export interface buyer {
    BidID: string;
    FirstName:string;
    LastName:string;
    Address:string;
    City:string;
    State:string;
    Pin:string;
    Phone:string;
    Email:string;
    BidAmounr:number;
    ProdID: string;
}
