import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styles/loginStyle";
import { useHistory } from "react-router-dom";

export default function SignIn() {
  const classes = useStyles();
  let history = useHistory();
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    if (state.email === "admin" && state.password === "admin") {
      localStorage.setItem(
        "token",
        "BGJUUSHJbgsehjrjkghjghHJGHJGBNMVHB5667GYYGO90HJKHGHFD"
      );
      history.push("/home");
    }
  };
  const handleChange = (evt) => {
    const value = evt.target.value;
    console.log(evt);
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(event) => handleChange(event)}
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
          onChange={(event) => handleChange(event)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => handleSubmit()}
          className={classes.submit}
        >
          Sign In
        </Button>
        <Grid container></Grid>
      </div>
    </Container>
  );
}
