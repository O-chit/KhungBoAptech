import { useState } from "react";
import "./Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (username.trim() === "" || password.trim() === "") {
            alert("Username và Password không được để trống!");
            return;
        }

        const user = JSON.parse(localStorage.getItem("user"));

        if (
            user &&
            user.username === username &&
            user.password === password
        ) {
            alert("Đăng nhập thành công!");
        } else {
            alert("Sai tài khoản hoặc mật khẩu!");
        }
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleLogin}>
                <h2>Login</h2>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;