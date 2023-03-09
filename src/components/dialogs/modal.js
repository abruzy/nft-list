import React from "react";
import { Dialog, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: "24px",
    minHeight: "500px",
    minWidth: "300px",
    [theme.breakpoints.up("md")]: {
      // minHeight: '41rem',
      minWidth: "71rem",
      borderRadius: "24px",
    },
  },
  backDropStyle: {
    backgroundColor: "rgba(43, 42, 44, 0.85)",
    backdropFilter: "blur(5px)",
  },
  root: {
    "& .MuiDialog-paper": {
      borderRadius: "24px",
    },
  },
}));

const Modal = ({ openModal, handleClose }) => {
  const classes = useStyles();

  return (
    <Dialog
      className={classes.root}
      PaperProps={{
        className: classes.paper,
      }}
      BackdropProps={{
        className: classes.backDropStyle,
      }}
      classes={{
        root: classes.root,
      }}
      onClose={handleClose}
      open={openModal}
    >
      <Box>
        <Box
          display={"flex"}
          justifyContent="flex-end"
          mt={"0.75rem"}
          mr="0.75rem"
        >
          <Box
            onClick={handleClose}
            height={"2.75rem"}
            width="2.75rem"
            borderRadius={"50%"}
            display="flex"
            sx={{ background: "#FFE7E7", cursor: "pointer" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box component={"img"} src="/close.svg" alt="close" />
          </Box>
        </Box>
        <Box mx={"3.5rem"} mb="3.5rem" display={"flex"}>
          <Box component={"img"} src="/image26.svg" alt="image26" />
          <Box>
            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>1</Box>
              <Box>2</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default Modal;
