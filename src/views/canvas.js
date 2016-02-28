import React, { PropTypes } from 'react'
import ToolBar from "./canvas/ToolBar"
import VisibleNoteList from "./canvas/NoteList"
import RichEditor from "./canvas/RichEditor"
import '../styles/canvas.scss'
import {bindActionCreators} from 'redux'
import {connect} from "react-redux"
import * as noteActionCreators from "../actions/note_action_creator"


let TempButtons=({actions})=>{
    let saveToServer=()=>{
        var config = {
            method: 'POST',
            mode: 'no-cors',
            cache: 'default'
        };
        fetch("http://localhost:3000/notes/",config).then(function(response){
            console.log(response)
        })
            .catch(function(err){
                console.log("the problem is "+err)
            })
       /* return {
            type: "ADD_NOTE"
        }
        actions.saveCurrentNotes()*/
    }
    return <div>
    <button onClick={saveToServer}>save</button>
    </div>
}
TempButtons=connect(null,(dispatch)=>{
    return{
        actions:bindActionCreators(noteActionCreators,dispatch)
    }
})(TempButtons)
const Canvas = ()=> {
    return <div className={"main-container"}>
        <ToolBar/>
        <VisibleNoteList/>
        <RichEditor/>
        <TempButtons/>
    </div>
};
export default Canvas;
