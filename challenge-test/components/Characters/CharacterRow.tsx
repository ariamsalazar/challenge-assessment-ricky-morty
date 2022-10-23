/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Grid, Box } from '@mui/material';
import moment from 'moment';
import Modal from '@mui/material/Modal';

const CharacterRow = (props: any) => {
  const { row } = props;
  const characterId = row.id;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: '#d8d8d8',
    border: 'none',
    padding: 0,
    borderRadius: '8px',
    boxShadow: '0 3px 6px 0 rgba(176, 174, 174, 0.2)',
    borderCollapse: 'separatem',
    outline: 'none',
    overflow: 'hidden',
  };
  
  return (
    <> 
      <Grid item xs={12} md={4} className="item-container" onClick={handleOpen}>
        <div className="item-content">
          <div className="circle" style={{ backgroundImage: `url(${row.image})`}} />
          <div className="info-item">
            {row.name}
          </div>
        </div>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal-container">
          <div className="modal-side image" style={{ backgroundImage: `url(${row.image})`}} /><div className="modal-side left">
            <div className="info-details">
              <span className="detail">
                <span className="detail-title"> 
                ● Name: {' '}
                </span>
                {row.name}
              </span>
              <span className="detail">
                <span className="detail-title">
                ● Status: {' '}
                </span>
                {row.status}
              </span>
              <span className="detail">
                <span className="detail-title">
                ● Species: {' '}
                </span>
                {row.species}
              </span>
              <span className="detail">
                <span className="detail-title">
                ● Gender: {' '}
                </span> 
                {row.gender}
              </span>
              <span className="detail">
                <span className="detail-title">
                ● Created:{' '}
                </span> 
                {moment(row.created).format("DD/MM/YYYY")}
              </span>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default CharacterRow;
