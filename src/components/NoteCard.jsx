import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';
import { green, pink, yellow, blue } from '@mui/material/colors';

const noteBackgroundColor = (note) => {
    if(note.category === 'work')
        return yellow[700];
    else if(note.category === 'money')
        return green[500];
    else if(note.category === 'todos')
        return pink[500];
    else
        return blue[500];
}

const NoteCard = ({ note, handleDelete}) => {

    return (
        <Card elevation={1} style={{border: (note.category === 'work') ? '1px solid red' : '1px solid transparent'}}>
            <CardHeader
                avatar={
                    <Avatar
                        style={{ backgroundColor: noteBackgroundColor(note) }}
                    >
                        {note.category[0].toUpperCase()}
                    </Avatar>
                }
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
