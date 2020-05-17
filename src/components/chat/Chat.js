import React, { useState, useEffect } from "react";
import "./Chat.css"
import Storage from "../../utils/Storage";

export default function Chat() {
    const [msg, setMsg] = useState([]);
    const [msgHistory, setMsgHistory] = useState([]);

    useEffect(() => {
        window.socket.on("previousMessage", (message) => {
            setMsgHistory([...msgHistory, ...message]);
        });
        
        window.socket.on("receivedMessage", (message) => {
            console.log("recebi: ", message);
            setMsgHistory([...msgHistory, message]);
        });
    }, [msgHistory]);

    const handlerSubmit = (e) => {
        e.preventDefault();

        let msgObject = {
            author: Storage.getName(),
            msg: msg,
        }
        setMsgHistory([...msgHistory, msgObject]);
        window.socket.emit("sendMessage", msgObject);
    }

    return (
        <div className="chat">
            <div className="displayContainer">
                {
                    msgHistory.map( (value, index) => {
                        return (
                            <div key={index} className={`container ${value.author === Storage.getName() ? 'right' : 'dark'}`}>
                                <p>{value.msg}</p>
                                <span className={`time-${value.author === Storage.getName() ? "right" : "left"}`}>{`${value.author === Storage.getName() ? "me" : value.author}`}</span>
                            </div>
                        );
                    })
                }
            </div>

            <div className="chatControls">
                <form>
                    <input className="inputName" value={msg} onChange={(e) => setMsg(e.target.value)} />
                    <button className="btnSubmit" type="submit" onClick={handlerSubmit}>Send</button>
                </form>
            </div>
        </div>
    );
}