import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import leftTriangle from "../Images/left_triangle.svg";
import topCircle from "../Images/top_circle.svg";
import bottomRectangle from "../Images/bottom_rectangle.svg";
import { InputLabel } from "@mui/material";
import api from "./Api";
import "./AuthPage.css";

function AuthPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  function handleChangeLogin(value: string) {
    setLogin(value);
  }

  function handleChangePasword(value: string) {
    setPassword(value);
  }

  function handleSubmit(evt: any) {
    evt.preventDefault();
    if (!login || !password) {
      setErrorText("Ошибка");
    } else {
      console.log({ login: login, password: password });
      api.loginUser({ login: login, password: password }).catch((err) => {
        console.log(err);
        setErrorText(err);
      });
    }
  }
  /*   const theme = createTheme({
    palette: {
      primary: { main: "#FFFFFF" },
    },
  }); */

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth="320px"
        paddingTop="172px"
        margin="auto"
      >
        <h1 className="authPage__heading">Войти</h1>
        <Box
          component="form"
          display="flex"
          flexDirection="column"
          onSubmit={handleSubmit}
        >
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <InputLabel
              disableAnimation={true}
              shrink={false}
              filled={false}
              focused={false}
              variant="standard"
              sx={{
                position: "initial",
                color: "white",
                marginBottom: "4px",
                textAlign: "left",
                animation: "none",
              }}
              className="authPage__form-label"
            >
              Логин
            </InputLabel>
            <Input
              /* value={login} */
              onChange={(e) => handleChangeLogin(e.target.value)}
              disableUnderline={true}
              sx={{
                backgroundColor: "white",
                height: "40px",
                borderRadius: "4px",
                border: "1px solid var(--Black-100, #DDE0E4)",
                padding: "10px 12px",
              }}
              /* required={true} */
            ></Input>
            <FormHelperText
              className="authPage__form-error"
              error={true}
              sx={{ textAlign: "left", margin: "0", height: "12px" }}
            >
              {errorText}
            </FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel
              disableAnimation={true}
              shrink={false}
              filled={false}
              focused={false}
              variant="standard"
              sx={{
                position: "initial",
                color: "white",
                marginBottom: "4px",
                textAlign: "left",
                animation: "none",
              }}
              className="authPage__form-label"
            >
              Пароль
            </InputLabel>
            <Input
              /* value={password} */
              onChange={(e) => handleChangePasword(e.target.value)}
              type="password"
              /* required={true} */
              disableUnderline={true}
              sx={{
                backgroundColor: "white",
                height: "40px",
                borderRadius: "4px",
                border: "1px solid var(--Black-100, #DDE0E4)",
                padding: "10px 12px",
              }}
            ></Input>
            <FormHelperText
              className="authPage__form-error"
              error={true}
              sx={{ textAlign: "left", margin: "0", height: "12px" }}
            >
              {errorText}
            </FormHelperText>
          </FormControl>
          <Button
            variant="contained"
            type="submit"
            sx={{
              marginTop: "40px",
              width: "250px",
              fontSize: "16px",
              alignSelf: "center",
            }}
          >
            Войти
          </Button>
        </Box>

        <span className="authPage__span-acent">или</span>
        <Button
          variant="outlined"
          sx={{
            border: "1px solid white",
            color: "white",
            width: "250px",
            height: "50px",
            alignSelf: "center",
            fontSize: "16px",
            lineHeight: "20px",
          }}
        >
          Войти по Практикум ID{" "}
        </Button>
      </Box>

      <img className="authPage__left-triangle" src={leftTriangle} />
      <img className="authPage__top-circle" src={topCircle} />
      <img className="authPage__bottom-rectangle" src={bottomRectangle} />
    </>
  );
}

export default AuthPage;
