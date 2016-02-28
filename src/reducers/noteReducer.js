import {Map,List} from "immutable"

let getNoteModel = ()=> {
    return Map({
        id: new Date().getTime(),
        title: "untitled",
        favourite: false,
        data: "write from here",
        shared: List(),
        author: "fuck this shit"
    })
};
let getNoteWithId = (list, id)=> {
    return list.find(item=>item.get('id') == id)
}
let deleteFromList = (list, id)=> {
    return list.filter(item=>item.get("id") != id)
}
export const noteReducer = (state = Map(), action)=> {
    switch (action.type) {
        case "ADD_NOTE":
            return getNoteModel()
        case "UPDATE_NOTE":
            return state.update(action.attribute, action.data)
        default :
            return state
    }

}
export const noteListReducer = (state = Map({
    noteList: List(),
    currentNoteId: null
}), action)=> {
    switch (action.type) {
        case 'ADD_NOTE':
            let note = noteReducer(null, action);
            let newstate = state.update("currentNoteId", ()=>note.get("id"));
            return newstate.update("noteList", (noteList)=>noteList.push(note));
        case "UPDATE_NOTE":
            note = getNoteWithId(state.noteList);
            noteReducer(note);
            return state;
        case 'DELETE_NOTE':
            return deleteFromList(state, action.id);
        case 'UPDATE_CURRENT_NOTE_DATA':
            return state.update("noteList",
                (noteList)=>{
                    return noteList.update(noteList.findIndex(function (item) {
                        return item.get("id") === state.get("currentNoteId");
                    }), function (item) {
                        return item.set("data", action.data);
                    })
                }
            );


        default :
            return state

    }
};
export const visblityFilterReducer = (state = "ALL", action)=> {
    switch (action.type) {
        case "SET_FILTER":
            return state = action.filter
        default :
            return state
    }
}
