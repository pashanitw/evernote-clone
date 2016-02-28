import {combineReducers,createStore} from "redux";
import {noteListReducer,visblityFilterReducer} from "./reducers/noteReducer"

let sampleData=[
    {
        name:"pasha",
        pwd:"password"
    },
    {
        name:"Ammi",
        pwd:"abba"
    }
];

const users=(state=sampleData,action)=>{
    switch (action.type){
      case "ADD_TO_CART":
            return state;
        default:
            return state;
    }

};

const ProductsApp=combineReducers({
    noteListReducer,
    visblityFilterReducer
});

export default createStore(ProductsApp);