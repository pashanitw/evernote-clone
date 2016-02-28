import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as noteActionCreators from "../../actions/note_action_creator"
import classnames from "classnames"
import {Editor, EditorState} from 'draft-js';

let NoteList = ({list,actions})=> {
    var style = {
        display: 'block',
        width: '100%'
    }
    const mapNotes = (list)=> {

        return list.map((note, index)=> {
            return <a href="#" className="list-group-item" key={index}>
                <h4 className="list-group-item-heading">{note.get('title')}</h4>
                <p className="list-group-item-text">{note.get('data')}</p>
            </a>
        });
    };
    return <div  className="list-group noteList">{
        mapNotes(list)
        }
    </div>
};

let filterNotes = (noteList, filter)=> {
    switch (filter) {
        case "ALL":
            return noteList
        case 'favourite':
            return noteList.filter(note=>note.get('id').favourite)
        default:
            return noteList
    }
}
const VisibleNoteList = connect((state)=> {
    return {
        list: filterNotes(state.noteListReducer.get("noteList"), state.visblityFilterReducer)
    }
}, (dispatch)=> {
    return {
        actions: bindActionCreators(noteActionCreators, dispatch)
    }
})(NoteList)
export default VisibleNoteList