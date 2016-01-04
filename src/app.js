import ReactDom from "react-dom";
import store from "./reducers"
import {Provider,connect} from "react-redux"
import ProductList from "./ProductList"
import React from "react"
import {Component} from "react";
import FilterSelection from "./FilterSelection.js"



class ProductView extends Component{
    changeProductView(key){
        let {store}=this.context;
        store.dispatch({
            type:"SET_PRODUCT_VIEW",
            productView:key
        })
    }
    render(){
   var style={
       float:"right",
       marginRight:10

   }
        var activeStyle={
            background:"blue"
        }
      return  <div style={style}>
           <button onClick={this.changeProductView.bind(this,"LIST_VIEW")}>list</button>
           <button onClick={this.changeProductView.bind(this,"GRID_VIEW")}>grid</button>
       </div>
    }
}
ProductView.contextTypes={
    store:React.PropTypes.object
}
const ProductsApp=()=>{
    return <div>
        <FilterSelection/>
        <ProductView/>
        <ProductList/>
        </div>
};
const MainApp = ()=> {
    return <Provider store={store}>
        <ProductsApp/>
    </Provider>
};

ReactDom.render(<MainApp/>, document.getElementById('app'))