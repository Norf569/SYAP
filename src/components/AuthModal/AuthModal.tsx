import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthModal.css";

const AuthModal = ({ close }: { close: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [remember, setRemember] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPass", pass);
    localStorage.setItem("userRemember", remember ? "1" : "0");

    close();
    navigate("/personal");
  };

  return (
    <div className="auth-overlay" onClick={close}>
      <div className="auth-window" onClick={(e) => e.stopPropagation()}>
        <h2 className="auth-title">Registration</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />

          <label className="auth-remember">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            Remember me
          </label>

          <button type="submit" className="auth-btn">
            Log in
          </button>
        </form>

        <button className="auth-close" onClick={close}>×</button>
      </div>
    </div>
  );
};

export default AuthModal;
