import React, { useState } from "react";
import "./index.css"
import Storage from "../../utils/Storage";

export default function Login({ history }) {
    const [name, setName] = useState("");

    const handlerSubmit = (e) => {
        e.preventDefault();
        Storage.setName(name);
        history.push("/home");
    }

    return (
        <div className="loginContainer">
            <div className="formContainer">
                <form>
                    <input className="inputName" value={name} onChange={(e) => setName(e.target.value)} />
                    <button className="btnSubmit" type="submit" onClick={handlerSubmit}>Entrar</button>
                </form>
            </div>
        </div>
    );
}