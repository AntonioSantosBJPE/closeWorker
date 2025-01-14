import { StyledLogin } from "./style";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import fullLogo from "../../assets/light-full-logo.svg";
import workersImg from "../../assets/workers-img.svg";
import { LinkNavigation } from "../../components/LinkNavigation";
import { ILoginFormData } from "./types";
import { loginSchema } from "./loginSchema";
import { Input } from "../../components/Input";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Title } from "../../components/Title";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { FramerMotionLoginRegister } from "../../components/FramerMotion";

export const Login = () => {
  const { loadingButton, onSubmitLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <StyledLogin>
      <FramerMotionLoginRegister>
        <Title colorTitle="blue-2" type="Heading1">
          Login
        </Title>
        <div>
          <Link to="/home">Retornar para Home</Link>
        </div>
        <form action="submit" onSubmit={handleSubmit(onSubmitLogin)} noValidate>
          <Input
            id="input-email"
            labelName="Email"
            type="text"
            linkForm={register("email")}
            placeholder="Digite seu email"
            error={errors.email?.message}
          />
          <Input
            id="input-password"
            labelName="Senha"
            type="password"
            linkForm={register("password")}
            placeholder="Digite sua senha"
            error={errors.password?.message}
          />
          <Button type="submit" style="blueDark" disabled={loadingButton}>
            {loadingButton ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="30"
                visible={true}
              />
            ) : (
              "Login"
            )}
          </Button>
        </form>
        <div>
          <p>Ainda não tem conta? Realize seu cadastro agora!</p>
          <LinkNavigation
            style="blueLight"
            name="Cadastrar"
            linkTo="/register"
          ></LinkNavigation>
        </div>
      </FramerMotionLoginRegister>
      <FramerMotionLoginRegister className="img-section-login">
        <img src={fullLogo} className="logo-login" alt="Logo Close Worker" />
        <img
          src={workersImg}
          className="workers-img-login"
          alt="imagem de profissões"
        />
      </FramerMotionLoginRegister>
    </StyledLogin>
  );
};

/* A senha do usercoments@gmail.com é 123456 */
