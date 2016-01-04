import {Component} from "react"
import React from "react"
import {DropdownButton,MenuItem} from "react-bootstrap";
const Label=({text})=>{
    return <label>{text}</label>
}
class FilterSelection extends Component{
    constructor(props,context){
        super(props,context);
        this.keys={
            MOST_RELEVANT:"Most Relevance",
            PRICE_LOW_TO_HIGH:"Price Low To High",
            PRICE_HIGH_TO_LOW:"Price hight To low",
            RATING_LOW_TO_HIGH:"Rating Low To High",
            RATING_HIGH_TO_LOW:"Rating high To low"
        };
        this.state={
            title:this.getTitle()
        }


    }
    changeSelection(evt,key){
        let {store}=this.context;
        store.dispatch({
            type:"SET_SORTYBY_FILTER",
            filter:key
        })
    }
    update(){
        this.setState({
            title:this.getTitle()
        })
    }
    componentDidMount(){
        let {store}=this.context;
        store.subscribe(this.update.bind(this))
    }
render(){
    var style={marginLeft:100,color:"green"}
    var title=this.getTitle();
    console.log("fucking title is",title)
       return <div><DropdownButton
           bsStyle="info"
           title={this.state.title}
           id="123"
           onSelect={this.changeSelection.bind(this)}>
        <MenuItem eventKey="MOST_RELEVANT">Most Relevance</MenuItem>
        <MenuItem eventKey="PRICE_LOW_TO_HIGH">Price Low To High</MenuItem>
        <MenuItem eventKey="PRICE_HIGH_TO_LOW">Price hight To low</MenuItem>
        <MenuItem eventKey="RATING_LOW_TO_HIGH">Rating Low To High</MenuItem>
        <MenuItem eventKey="RATING_HIGH_TO_LOW">Rating high To low</MenuItem>
    </DropdownButton>
           <label style={style}>{this.state.title}</label>
           </div>
    }
    getTitle(){
        let {store}=this.context;
        var key=this.keys[store.getState().visiblityFilter.sortBy];
        console.log("key is",key);
        return key;
    }

};
FilterSelection.contextTypes={
    store:React.PropTypes.object
}
export default FilterSelection;