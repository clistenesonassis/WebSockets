class Storage {
    constructor() {
        this._userName = localStorage.getItem("userName");
    }

    getName = () => {
        return this._userName;
    }

    setName = (name) => {
        this._userName = name;
        localStorage.setItem("userName", name);
    }
}

export default new Storage();