import React from "react";
import Header from "../components/hero/Header";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginBtn, setLoginBtn] = React.useState(true);
  React.useEffect(() => {
    if (email.length > 8) {
      if (password.length > 8) {
        setLoginBtn(false);
      } else {
        setLoginBtn(true);
      }
    } else {
      setLoginBtn(true);
    }
  });
  
  const login = (e) => {
    e.preventDefault();
    fetch("/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.statusCode === 107) {
          setEmail("");
          setPassword("");
          localStorage.setItem("userId",response.body._id);
          localStorage.setItem("email",response.body.email);
          window.location.href="/";
        } else {
          alert(response.message);
        }
      });
  };
  return (
    <div>
      <Header />
      <div className="row border-top">
        <div className="col-5 px-4 py-2 border-end">
          <div className="display-6 px-2 pt-4 pb-2">
            Welcome to Regionalingo.
          </div>
          <div style={{ fontSize: 18 }}>
            <div className="px-2 py-2" style={{ fontSize: 15 }}>
              A secure login process is critical for protecting sensitive
              information and preventing unauthorized access. To ensure the
              security of your login, use strong and unique passwords.
            </div>
          </div>
          <div className="py-4">
            <form
              action=""
              onSubmit={(e) => {
                login(e);
              }}
            >
              <div className="py-2 px-2">
                <div style={{ fontSize: 14 }} className="text-bold">
                  Enter email:
                </div>
                <input
                  type="email"
                  placeholder="username@domain.com"
                  className="p-1 form-control"
                  style={{ width: "70%" }}
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="py-2 px-2">
                <div style={{ fontSize: 14 }} className="text-bold">
                  Enter password:
                </div>
                <input
                  type="password"
                  className="p-1 form-control"
                  style={{ width: "70%" }}
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div className="py-3 px-2">
                <button
                  type="submit"
                  disabled={loginBtn}
                  className="btn btn-outline-success"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="py-2 px-2">
              Don't have an account yet? <a href="">Create Account</a>
            </div>
          </div>
          <div className="py-3 px-2 text-center">
            <a href="">Privacy Policy</a> - <a href="">Terms and Conditions</a>
          </div>
        </div>

        <div className="col-7 p-5">
          <div className="row">
            <div className="col-8 display-6">
              Confused how to best use our products.
            </div>
          </div>
          <div className="">
            <div className="pt-5">Come to us with any query.</div>
            <div className="py-1 ">
              <button className="btn btn-outline-secondary">
                Reach us here{" "}
              </button>
            </div>
            <div className="pt-3">
              Check out the bundled service packages avaiable to you.
            </div>
            <div className="py-1 ">
              <button className="btn btn-outline-secondary">
                Check out Services{" "}
              </button>
            </div>
            <div className="pt-3">Check out the team behind.</div>
            <div className="py-1 ">
              <button className="btn btn-outline-secondary">Teams </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
