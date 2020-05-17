function chatEvents(state, setState22) {

    window.socket.on("previousMessage", (message) => {
        console.log("previous: ", message);
    });
    
    window.socket.on("receivedMessage", (message) => {
        console.log("recebi: ", message);
        state.msgHistory.push(message);
        setState22(state.msgHistory);
        console.log("historico: ", state.msgHistory);
    });

}


export { chatEvents };