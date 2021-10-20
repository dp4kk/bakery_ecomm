import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Snackbar,
  TextField,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { useContext,useEffect,useState } from "react";
import { AppContext } from "../Context/Datacontext";
import { FirebaseContext } from "../Firebase/AuthProvider";

const Userlogins = () => {
    //snackbar
    const [open,setOpen]=useState(false)

    const handleClose=(event,reason)=>{
        if(reason==='clickaway'){
            return
        }
        setOpen(false)
    }

    const [donotMatch,setDonotMatch]=useState(false)
  const {
    loginOpen,
    handleLoginClose,
    signupOpen,
    handleSignupClose,
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    confirmPassword,
    setConfirmPassword,
    handleConfirmPasswordChange,
    setEmail,
    setPassword,
    setLoginOpen,
    setSignupOpen,
  } = useContext(AppContext);

  const { signup, login,error,setError } = useContext(FirebaseContext);

  useEffect(()=>{
     if(error.message){
         setOpen(true)
     }
  },[error])

  const handleLogin = async (e, email, password) => {
    e.preventDefault();
    setError('')
    try {
      await login(email, password);
      setOpen(true)
    } catch (error) {
      console.log(error.message);
    //   window.alert("incorrect credential");
    setError(error)
    setOpen(true)
    
}
    setPassword("");
    setEmail("");
    setLoginOpen(false);
  };

  const handleSignup = async (e, email, password, confirmPassword) => {
    e.preventDefault();
    setError('')
        setDonotMatch(false)
    if (password === confirmPassword) {
    try {
        await signup(email, password);
        setOpen(true)
      
    } catch (error) {
      console.log(error.message);
    }
}else{  
    
        setDonotMatch(true)
        setOpen(true)
}
    setPassword("");
    setEmail("");
    setConfirmPassword("");
    setSignupOpen(false);
  };


  return (
    <div>
      <Dialog open={loginOpen} onClose={handleLoginClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              autoFocus
              spellCheck="false"
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={(e) => handleLogin(e, email, password)}
            >
              Login
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog open={signupOpen} onClose={handleSignupClose}>
        <DialogTitle>Sign up</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              autoFocus
              spellCheck="false"
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmpassword"
              label="Confirm Password"
              type="password"
              id="confirmpassword"
              autoComplete="current-password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={(e) => handleSignup(e, email, password, confirmPassword)}
            >
              Sign up
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      {error ? (
        <Snackbar
          autoHideDuration={3000}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
        >
          <Alert severity="error">{error.message}</Alert>
        </Snackbar>
      ) : (
        <Snackbar
          autoHideDuration={3000}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
        >
          <Alert severity="success">Logged In </Alert>
        </Snackbar>
      )}
      {
          donotMatch ? ( <Snackbar
          autoHideDuration={3000}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
        >
          <Alert severity="error">Passwords donot match</Alert>
        </Snackbar>)
        :(null)
      }
    </div>
  );
};

export default Userlogins;
