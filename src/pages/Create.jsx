import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import useClasses from '../hooks/useClasses.js';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../routes.js';

const styles = (theme) => ({
    field: {
        marginTop: '20px !important',
        marginBottom: '20px !important',
        display: 'block !important'
    }
});

const Create = () => {
    const classes = useClasses(styles);
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const [category, setCategory] = useState('money');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitleError(false);
        setDetailsError(false);

        if(title === '')
            setTitleError(true);
        if(details === '')
            setDetailsError(true);

        if(title && details) {
            fetch(`http://localhost:3000/notes`, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({ title, details, category })
            })
                .then(response => {
                    navigate(routes.notes);
                });
        }
    };

    return (
        <Container>
            <Typography
                variant="h6"
                component="h2"
                gutterBottom
                color="textSecondary"
            >
                Create a New Note
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    label="Note Title"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    className={classes.field.toString()}
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    error={titleError}
                />

                <TextField
                    label="Details"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    className={classes.field.toString()}
                    multiline
                    rows={4}
                    onChange={(e) => setDetails(e.target.value)}
                    value={details}
                    error={detailsError}
                />

                <FormControl className={classes.field} color="secondary">
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel value="money" control={<Radio color="secondary"/>} label="Money"/>
                        <FormControlLabel value="todos" control={<Radio color="secondary"/>} label="Todos"/>
                        <FormControlLabel value="reminders" control={<Radio color="secondary"/>} label="Reminders"/>
                        <FormControlLabel value="work" control={<Radio color="secondary"/>} label="Work"/>
                    </RadioGroup>
                </FormControl>

                <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon/>}
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default Create;
