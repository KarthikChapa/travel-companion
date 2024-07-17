import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({ 
    chip: {
        margin: '5px 5px 5px 0',
    },
    subtitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '10px',
    },
    spacing: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    img: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
    },
    photo: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
}));
