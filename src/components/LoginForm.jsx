import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [userlogin, setUserlogin] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem("userlogin", JSON.stringify(userlogin));
    navigate("/home");
    setUserlogin("");
  };

  console.log("userlogin :>> ", userlogin);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Kullanıcı İsim Gir</h1>

        <input
          onChange={(e) => setUserlogin(e.target.value)}
          value={userlogin}
          type="text"
          name=""
          id=""
          placeholder="Username giriniz"
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
