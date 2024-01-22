import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Paper,
  TextareaAutosize,
  Grid,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#77d5cb',
    },
  },
});

function SignUp() {
  const [inputs, setInputs] = useState({
    uid: '',
    name: '',
    age: '',
    spec: '',
    edu: '',
    exp: '',
    lang: '',
    locat: '',
    conslt: '',
    type: 'online',
    cert: '',
    pic: '',
    about: '',
    phn: '',
    email: '',
    cpass: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const InputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const SaveData = () => {
    axios
      .post('http://localhost:5007/api/dnew', inputs)
      .then((response) => {
        alert('Record Saved successfully');
        navigate('/login');
      })
      .catch((err) => console.log(err));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <center>
        <Paper elevation={3} style={{ padding: '20px', width: '400px' }}>
          <Typography variant="h5" align="center">
            Let's Get Started
          </Typography>
          <Typography variant="subtitle1" align="center">
            It's Okay, Now Create doctor's Account.
          </Typography>
          <form>
          <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="NMC UID"
                  name="uid"
                  type="number"
                  placeholder="ex:1757"
                  onChange={InputHandler}
                  value={inputs.uid}
                  margin="normal"
                  InputProps={{
                    pattern: '[0]{1}[0-9]{9}',
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  placeholder="DR."
                  onChange={InputHandler}
                  value={inputs.name}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Age"
                  name="age"
                  type="number"
                  placeholder=""
                  onChange={InputHandler}
                  value={inputs.age}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                {/* Two text fields in one row */}
                <TextField
                  fullWidth
                  label="Location"
                  name="locat"
                  placeholder="Google Map Link"
                  onChange={InputHandler}
                  value={inputs.locat}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Experience"
                  name="conslt"
                  placeholder="till now"
                  onChange={InputHandler}
                  value={inputs.conslt}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Qualification"
                  name="edu"
                  placeholder="MBBS, MD, ..."
                  onChange={InputHandler}
                  value={inputs.edu}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Experience"
                  name="exp"
                  placeholder="in years"
                  onChange={InputHandler}
                  value={inputs.exp}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Language"
                  name="lang"
                  placeholder="for communication"
                  onChange={InputHandler}
                  value={inputs.lang}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Location"
                  name="locat"
                  placeholder="Google Map Link"
                  onChange={InputHandler}
                  value={inputs.locat}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Experience"
                  name="conslt"
                  placeholder="till now"
                  onChange={InputHandler}
                  value={inputs.conslt}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Consultation Type</InputLabel>
                  <Select
                    name="type"
                    value={inputs.type}
                    onChange={InputHandler}
                  >
                    <MenuItem value="online">Online Consultation</MenuItem>
                    <MenuItem value="inclinic">Inclinic Consultation</MenuItem>
                    <MenuItem value="Both">Both</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Upload Certificate"
                  name="cert"
                  type="file"
                  onChange={InputHandler}
                  value={inputs.cert}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Profile Photo"
                  name="pic"
                  type="file"
                  onChange={InputHandler}
                  value={inputs.pic}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize
                  name="about"
                  className="input-text"
                  placeholder="Details about the doctor"
                  onChange={InputHandler}
                  value={inputs.about}
                  style={{ width: '100%', minHeight: '50px', margin: '10px 0' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Mobile Number"
                  name="phn"
                  type="number"
                  placeholder="ex: 9712345678"
                  value={inputs.phn}
                  onChange={InputHandler}
                  margin="normal"
                  InputProps={{
                    pattern: '[0]{1}[0-9]{9}',
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={inputs.email}
                  onChange={InputHandler}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Create New Password"
                  name="npass"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="New Password"
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  name="cpass"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  value={inputs.cpass}
                  onChange={InputHandler}
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={SaveData}
              style={{ marginTop: '20px' }}
            >
              Sign Up
            </Button>
          </form>
        </Paper>
      </center>
    </ThemeProvider>
  );
}

export default SignUp;
