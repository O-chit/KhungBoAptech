import { useState } from "react";
import "./Register.css";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        if (username.trim() === "" || password.trim() === "") {
            alert("Username và Password không được để trống!");
            return;
        }

        const user = {
            username,
            password
        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("Đăng ký thành công!");

        setUsername("");
        setPassword("");
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleRegister}>
                <h2>Register</h2>

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
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;