import { useState, forwardRef, type ReactElement, type Ref } from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from "@mui/material/DialogTitle";    
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: ReactElement<unknown>;
    },
    ref: Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Dashboard = ({ onClose, open }: {open: boolean; onClose: () => void }) =>{ 
    return (
      <Dialog onClose={onClose} open={open} fullScreen TransitionComponent={Transition}>
        <IconButton onClick={onClose} sx={{ position: 'absolute', right: '1rem', top: '1rem' }}>
            <CloseIcon sx={{ fontSize: 22 }} />
        </IconButton>
        <DialogTitle>Room for a dashboard React app</DialogTitle>
        <DialogContent>Content goes here</DialogContent>
      </Dialog>
    );
  }

const DashboardApp = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button type="button" className="btn btn-default btn-access" onClick={() => setOpen(true)}>Dashboard search</button>
            <Dashboard
                open={open}
                onClose={() => setOpen(false)}
            />
        </>
    );
};

export default DashboardApp;
