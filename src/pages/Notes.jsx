import { useEffect, useState } from 'react';

const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/notes`)
            .then(response => response.json())
            .then(data => setNotes(data));
    }, []);

    return (
        <div>
            {notes.map(note => (
                <p key={note.id}>{note.title}</p>
            ))}
        </div>
    );
};

export default Notes;
