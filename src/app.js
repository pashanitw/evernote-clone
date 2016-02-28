import ReactDom from "react-dom";
import store from "./reducers"
import {Provider,connect} from "react-redux"
import React from "react"
import {Component} from "react";
import Canvas from "./views/canvas"


const MainApp = ()=> {
    return <Provider store={store}>
        <Canvas/>
    </Provider>
};

ReactDom.render(<MainApp/>, document.getElementById('app'))