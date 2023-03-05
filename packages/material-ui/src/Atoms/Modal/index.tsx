import CloseIcon from "@mui/icons-material/Close";
import { Box, Modal } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { style } from "./Modal.style";

// Not optimized, there is a lot of confusion

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  minWidth: '400px'
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function ModalTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 0 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 0,
            top: 1,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

interface DialogProps {
  open: boolean
  children: React.ReactNode
  handleSubmit?: () => void
  handleClose: () => void
  title: string
}


export default function CustomizedDialogs({ open, title, children, handleSubmit, handleClose }: DialogProps) {


  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      sx={{ zIndex: 99 }}
    >
      <Box sx={{ ...style, minWidth: 500 }}>
        <ModalTitle onClose={handleClose} id="parent-modal-title">
          <Typography variant="h4" color={'info.light'} >{title}</Typography>
        </ModalTitle>
        {children}
      </Box>
    </Modal>
  );
}
