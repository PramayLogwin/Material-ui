import React, { useState, useEffect } from 'react';
import { Alert, Stack, Button, Backdrop, CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import { Add, AddLocation } from "@mui/icons-material";
import { color } from '@mui/system';

export default function Feedback() {

    // back-drop
    const [show, setShow] = useState(false)
    const openBackDrop = () => {
        setShow(true);
    }
    const closeBackDrops = () => {
        setShow(false);
    }

    //dialog-box(add google account)

    const [openDiaLog, setopenDiaLog] = useState(false);

    const openAccont = () => {
        setopenDiaLog(true);
    }
    const closeAccount = () => {
        setopenDiaLog(false);
    }
    //location

    const [openloc, setLoc] = useState(false);

    const openLocationMenu = () => {
        setLoc(true);
    }

    const closeLocationMenu = () => {
        setLoc(false);
    }
    //form

    const [openForm, setForm] = useState(false);

    const openFormBox = () => {
        setForm(true);
    }
    const closeForm = () => {
        setForm(false);
    }
    return (
        <>
            <Alert style={{ color: "red", width: "200px" }} severity='error'>Hey Getting A Error...!</Alert>
            <Alert style={{ color: "orange", width: "200px" }} severity='warning'>Hey Getting A Error...!</Alert>
            <Alert style={{ color: "green", width: "200px" }} severity='success'>Hey Getting A Error...!</Alert>
            <Alert style={{ color: "skyblue", width: "200px" }} severity='info'>Hey Getting A Error...!</Alert>

            <p>Back-Drop</p>
            <div>
                <Button onClick={openBackDrop}>Click For Data</Button>

                <Backdrop open={show} onClick={closeBackDrops}>
                    <CircularProgress />
                </Backdrop>
            </div>

            <p>Dialog</p>
            <div>
                <Button onClick={openAccont}><Add /> Account</Button>
                <Dialog open={openDiaLog} onClick={closeAccount}>
                    <DialogTitle>Add Your Google Account</DialogTitle>
                </Dialog>
            </div>

            <div>
                <Button onClick={openLocationMenu}><AddLocation />Location</Button>
                <Dialog open={openloc}>
                    <DialogTitle>Use Google Location Service.?</DialogTitle>
                    <DialogContent>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</DialogContent>
                    <Button onClick={closeLocationMenu}>Agree</Button>
                    <Button onClick={closeLocationMenu}>DisAgree</Button>
                    <DialogActions>
                        <Alert severity='warning'> Please Read Terms & Conditions Carfully.</Alert>
                    </DialogActions>
                </Dialog>
            </div>

            <div>
                <Button onClick={openFormBox}>Fill The Form</Button>
                <Dialog open={openForm}>
                    <DialogTitle>Enter Your Email Account</DialogTitle>
                    <DialogContent>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</DialogContent>
                    <TextField variant='standard' label="Email Address" type="email" />
                    <Button onClick={closeForm}>Submit</Button>
                    <DialogActions>
                        <Alert severity='warning'> Please Read Terms & Conditions Carfully.</Alert>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}


