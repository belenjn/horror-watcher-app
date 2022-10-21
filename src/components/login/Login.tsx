import "./Login.css";

export const Login = () => {
  return (
    <div className="login__container">
      <div className="login__container--data">
        <div className="logo" />

        <input
          className="login__container--data--username"
          type="text"
          placeholder="Username"
        />
        <input
          className="login__container--data--password"
          type="password"
          placeholder="Password"
        />
        <div className="login__container--data--buttons">
            <button className="signIn__button">Sign in</button>
            <div className="google__button"/>
        </div>

        <span>It's my first time, I want to <a>sing up</a></span>
      </div>
    </div>
  );
};
