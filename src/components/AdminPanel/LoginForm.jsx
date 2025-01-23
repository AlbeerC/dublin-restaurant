import { useState } from "react";
import { auth } from "../../firebase/config";
import "./AdminPanel.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import Panel from "./Panel";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Success");
      setIsLogged(true)
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      {!isLogged ? (
        <section className="login-form container">
          <h2>Inicia sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit">Ingresar</button>

            {error && <p className="error">{error}</p>}
          </form>
        </section>
      ) : (
        <Panel setIsLogged={setIsLogged} />
      )}
    </>
  );
}

export default LoginForm;
