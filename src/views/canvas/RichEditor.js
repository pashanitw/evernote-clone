import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as noteActionCreators from "../../actions/note_action_creator"
import classnames from "classnames"
import {Editor, EditorState} from 'draft-js';

const Header = ()=> {
    return <div>
        <button>reminder</button>
        <button>favourite</button>
        <button>info</button>
        <button>delete</button>
        <button>copy notelink</button>
        <button>Share</button>
        <button>Expand</button>
    </div>
};

class RichEditorClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => {
            var data = editorState.getCurrentContent().getPlainText()
            this.setState({editorState})
            props.actions.updateCurrentNoteData(data)
        };
    }
    render() {
        const {editorState} = this.state;
        return <Editor editorState={editorState} onChange={this.onChange} />;
    }
}
const RichEditor = connect((state)=> {
    return {
        data: "something"
    }
}, (dispatch)=> {
    return {
        actions: bindActionCreators(noteActionCreators, dispatch)
    }
})(RichEditorClass);

const CanvasEditor = ()=> {
    return <div style={{float: 'left'}}>
        <Header/>
        <RichEditor/>
    </div>
};

export default CanvasEditor;