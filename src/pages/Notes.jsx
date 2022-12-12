import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import NoteCard from '../components/NoteCard.jsx';


const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/notes`)
            .then(response => response.json())
            .then(data => setNotes(data));
    }, []);

    const handleDelete = async (id) => {
        await fetch(`http://localhost:3000/notes/${id}`, {
            method: 'DELETE'
        });

        const newNotes = notes.filter(note => note.id !== id);
        setNotes(newNotes);
    };

    return (
        <Container>
            <Grid container spacing={3}>
                {notes.map(note => (
                    <Grid item key={note.id} xs={12} md={6} lg={4}>
                        <NoteCard note={note} handleDelete={handleDelete}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Notes;
