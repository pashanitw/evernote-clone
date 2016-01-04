import React from "react"
import {Component} from "react";
import {connect} from "react-redux"
import ProductList from "./ProductList";

const mapProductListStateToProps = (state)=> {
    var products;
    switch(state.visiblityFilter.sortBy){
        case "MOST_RELEVANT":
            products=state.products.slice();
            products.sort(function(a,b){
                return b.relevance-a.relevance
            });
            break;
        case "PRICE_LOW_TO_HIGH":
            products=state.products.slice();
            products.sort(function(a,b){
                return a.price-b.price
            });
            break;
    }
    return {
        products: products
    }
};
let prodList=ProductList;
export default connect(mapProductListStateToProps,null)(prodList);