import React from "react"
import {Component} from "react";
import {connect} from "react-redux"
import classnames from "classnames"
import StarRating from "react-star-rating"

const Product=({name,price,img,rating})=>{
    return <li className={"product"}>
        <h3 className={"prodName"}>{name}</h3>
        <img className={"img"} src={img}/>
        <h3 className={"price"}>Price <span>{price}</span></h3>
        <StarRating name="product-rating" rating={rating}/>
    </li>
};

class ProductList extends Component{
    render(){
        let {products,productView}=this.props;
        var containerClass = classnames({
            'grid':productView=="GRID_VIEW",
            'list':productView=="LIST_VIEW"
        });
        return <ul className={containerClass}>
        {
            products.map(function(item,index){
                return <Product {...item}
                    key={index}
                />
            })

            }
        </ul>
    }
}
const mapProductListStateToProps = (state)=> {
    var products;
    switch(state.visiblityFilter.sortBy){
        case "MOST_RELEVANT":
             products=state.products.slice();
             products.sort(function(a,b){
                 return b.relevance-a.relevance
             });
            console.log("products are",products)
            break;
        case "PRICE_LOW_TO_HIGH":
            products=state.products.slice();
            products.sort(function(a,b){
                return a.price-b.price
            });
            break;
        case "PRICE_HIGH_TO_LOW":
            products=state.products.slice();
            products.sort(function(a,b){
                return b.price-a.price
            });
            break;
        case "RATING_LOW_TO_HIGH":
            products=state.products.slice();
            products.sort(function(a,b){
                return a.rating-b.rating
            });
            break;
        case "RATING_HIGH_TO_LOW":
            products=state.products.slice();
            products.sort(function(a,b){
                return b.rating-a.rating
            });
            break;
    }
    return {
        products: products,
        productView:state.visiblityFilter.productView
    }
};
const VisiblityProductList=connect(mapProductListStateToProps,null)(ProductList);
export default VisiblityProductList;