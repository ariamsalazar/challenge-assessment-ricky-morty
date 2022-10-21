import React, { Fragment, useState } from "react";
import { Grid, Box } from '@mui/material';
import Image from 'next/image';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

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
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  return (
    <> 
      <Grid item xs={12} md={3} lg={4} className="item-container" onClick={handleOpen}>
        <div className="item-content">
          {/* <Image
            src={row.image}
            width={45}
            height={45}
            alt=""
          /> */}
          <img
            src={row.image}
            width={250}
            height={250}
            alt=""
          />
          <div className="info-item">
            {row.name}
            <span className="min-text">Gender: {row.gender}</span>
          </div>
        </div>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {row.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {row.status}
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

export default CharacterRow;
