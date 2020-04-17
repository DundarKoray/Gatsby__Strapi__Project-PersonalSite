import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import styles from "../../css/modal.module.css";



import {
    FaPhone
  } from "react-icons/fa"

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 300,
    backgroundColor: '#ececec',
    border: '2px solid #AB6B85',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'none'
  },
}));




export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {/* <h4>TEL NO:</h4> */}
      <div style={{display:'flex', alignItems: 'center'}}>
        <a style={{flex: '1', color: '#AB6B85', fontSize:'1.5rem'}} id="simple-modal-description" href="tel:00903862134524">0 386 213 45 24</a>
        

        <a style={{display:'flex', alignItems: 'center', justifyContent: 'center'}} id="simple-modal-description" href="tel:00903862134524"><FaPhone className={styles.pulse}  style={{color: '#AB6B85', fontSize:'40px', padding: '.2rem'}} /></a>
        
       
      </div>
    </div>
  );

  return (
    <div>
      <a onClick={handleOpen} className="btn-primary">
        RANDEVU AL
      </a>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}