import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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
                endIcon={<KeyboardArrowRightIcon/>}
            >
                Submit
            </Button>
        </Container>
    );
};

export default Create;
