import { Box, Card, Typography, TextField, Button, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import OTPInput, {ResendOTP} from 'otp-input-react'
import bg from '../assets/netflix-bg.jpg'

export default function Register(){
  const [open, setOpen] = useState(false)
  const [OTP, setOTP] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return(
    <Box className="register" sx={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Card sx={{width: 350, background: 'rgba(0,0,0,0.9)', p: 5}}>
          <Typography variant="h4" sx={{fontWeight: 700, letterSpacing: 1}} color='white'>Daftar</Typography>
          <TextField id="filled-basic" label="Email" variant="filled" type="email" sx={{background: 'gray', color: 'white', mt: 4, borderRadius: 1.5}} fullWidth />
          <TextField id="filled-basic" label="Sandi" variant="filled" type="password" sx={{background: 'gray', color: 'white', mt: 2, borderRadius: 1.5}} fullWidth />
          <Button variant="contained" color="error" sx={{mt: 4, py: 1.5, fontWeight: 600}} onClick={handleClickOpen} fullWidth>Masuk</Button>
          <Dialog open={open} onClose={handleClose} sx={{textAlign: 'center'}}>
            <DialogTitle sx={{fontSize: 16, fontWeight: 700}}>Kode OTP</DialogTitle>
            <DialogContent>
              <DialogContentText sx={{mb: 4}}>
                Masukan Kode OTP yang telah di kirim melalui Email
              </DialogContentText>
              <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <OTPInput className="input-otp" value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} />
              </Box>
            </DialogContent>
            <DialogActions sx={{display: 'flex', justifyContent: 'center'}}>
              <Button onClick={handleClose} color='inherit'>Kirim</Button>
            </DialogActions>
          </Dialog>
      </Card>
    </Box>
  )
}