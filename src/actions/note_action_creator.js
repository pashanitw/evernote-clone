/**
 * Created by space on 2/7/16.
 */

export const addNote = ()=> {
    var config = {
        method: 'POST',
        mode: 'cors',
        cache: 'default'
    };
    fetch("http://localhost:3000/notes/",config).then(function(response){
        console.log(response)
    })
        .catch(function(err){
            console.log("the problem is "+err)
        })
    return {
        type: "ADD_NOTE"
    }
}
export const updateCurrentNoteData = (data)=> {
    return {
        type: "UPDATE_CURRENT_NOTE_DATA",
        data: data
    }
}
export const saveCurrentNotes = ()=> {

}
export const createNotes=(data)=>{

}
