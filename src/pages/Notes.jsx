import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/notes`)
            .then(response => response.json())
            .then(data => setNotes(data));
    }, []);

    return (
        <Container>
            {/*<Grid container>*/}
            {/*    <Grid item xs={12} sm={6} md={3}>*/}
            {/*        <Paper>1</Paper>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={12} sm={6} md={3}>*/}
            {/*        <Paper>2</Paper>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={12} sm={6} md={3}>*/}
            {/*        <Paper>3</Paper>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={12} sm={6} md={3}>*/}
            {/*        <Paper>4</Paper>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}

            <Grid container>
                {notes.map(note => (
                    <Grid item key={note.id} xs={12} md={6} lg={4}>
                        <Paper>
                            {note.title}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Notes;
