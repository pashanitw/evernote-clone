import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as noteActionCreators from "../../actions/note_action_creator"
import classnames from "classnames"
import {Editor, EditorState} from 'draft-js';

let Action = ({classAttr,handleClick})=> {
    let classes = {
        "fa fa-3x": true
    }
    console.log(classAttr)
    classes[classAttr] = true
    return <a className={'action'}
        onClick={handleClick}>
        <i className={classnames(classes)}></i>
    </a>
}
let ToolBar = ({actions})=> {
    return <div className="action-toolbar">
        <Action handleClick={actions.addNote}
            classAttr="fa-plus-circle"/>
    </div>
};
ToolBar = connect(null, (dispatch)=> {
    return {
        actions: bindActionCreators(noteActionCreators, dispatch)
    }
})(ToolBar);
export default ToolBar
/**
 * Created by space on 2/26/16.
 */
