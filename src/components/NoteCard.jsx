import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';

const NoteCard = ({ note, handleDelete}) => {

    return (
        <Card elevation={1}>
            <CardHeader
                action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutlinedIcon/>
                    </IconButton>
                }
                title={note.title}
                subheader={note.category}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default NoteCard;
