import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Create = () => {

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

            <Button
                type="submit"
                color="secondary"
                variant="contained"
                onClick={() => console.log('you clicked me')}
            >
                Submit
            </Button>
        </Container>
    );
};

export default Create;
