import React from "react";
import CreateNote from "./CreateNote";
import notes from "../../notes";

function Note(){
    return(
        <>
            {notes.map((newNote) =>{
                return(
                    <CreateNote
                    key={newNote.id}
                    title={newNote.title}
                    content={newNote.content}
                    
                    />
                )
            })}
        </>
    )
}

export default Note