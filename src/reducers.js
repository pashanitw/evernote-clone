import {combineReducers,createStore} from "redux";

let sampleData=[
    {
        name:"Iphone 6s",
        price:200,
        relevance:200,
        rating:5,
        img:"http://placehold.it/200x150"
    },
    {
        name:"Samsung Galaxy 7",
        price:50,
        relevance:100,
        rating:2,
        img:"http://placehold.it/200x150"
    },
    {
        name:"iphone 6",
        price:75,
        relevance:75,
        rating:3,
        img:"http://placehold.it/200x150"
    },
    {
        name:"Iphone 6e",
        price:100,
        relevance:50,
        rating:4,
        img:"http://placehold.it/200x150"
    },
    {
        name:"Samsung Galaxy 7",
        price:50,
        relevance:100,
        rating:2,
        img:"http://placehold.it/200x150"
    },
    {
        name:"iphone 6",
        price:75,
        relevance:75,
        rating:1,
        img:"http://placehold.it/200x150"
    }
];

const products=(state=sampleData,action)=>{
    switch (action.type){
      case "ADD_TO_CART":
            return state;
        default:
            return state;
    }

};
const visiblityFilter=(state={
    sortBy:"MOST_RELEVANT" ,
    productView:"GRID_VIEW"
},action)=>{
    switch (action.type){
      case "SET_SORTYBY_FILTER":
          console.log("in sort by Filter")
            return Object.assign({},state,{
          sortBy:action.filter
      });
      case "SET_PRODUCT_VIEW":
       return Object.assign({},state,{
           productView:action.productView
       });
        default:
            return state;
    }

};

const ProductsApp=combineReducers({
    products,
    visiblityFilter
});

export default createStore(ProductsApp);