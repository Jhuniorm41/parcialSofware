import React from "react";
import app from "../base";
import { Link, Route } from "react-router-dom";

const SignupActions = () => (
  <div>
    <span>Ya tengo cuenta</span>
    <Link to="/login"> Iniciar sesion</Link>
  </div>
);

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("login", JSON.stringify(user));
      app.database().ref(user.user.uid+'/userinfo').set({
        email: email.value
      })
      this.props.history.push("/profile");
    } catch (error) {
      alert(error);
    }
  };
  render() {
    return (
      <div className="top-content">
        <div className="inner-bg">
          <div className="container">
            <div className="row card justify-content-center align-items-center ">
              <div className="col-sm-6 col-sm-offset-3 form-box">
                <div className="col-sm-12 d-flex justify-content-center">
                  <h1>
                    <strong>Registrarse</strong>
                  </h1>
                </div>
                <div className="form-bottom">
                  <form className="login-form " onSubmit={this.handleSignUp}>
                    <div className="form-group">
                      <label className="sr-only">Usuario</label>
                      <input
                        name="email"
                        type="email"
                        placeholder="Correo electronico"
                        className="form-username form-control"
                        id="form-username"
                      />
                    </div>
                    <div className="form-group">
                      <label className="sr-only">Contraseña</label>
                      <input
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        className="form-password form-control"
                        id="form-password"
                      />
                    </div>
                    <button type="submit" className="btn">
                      Registrarme
                    </button>
                  </form>
                  <div style={{ marginTop: "8px" }}>
                    <Route
                      path="/signup"
                      exact
                      render={() => <SignupActions />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
