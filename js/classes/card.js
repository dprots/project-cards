export default class Card {
    constructor(body, info) {
        this._body = body;
        this._info = info;
        this.elem = null;
    }


    render() {
        this._info = document.createElement('div');
        this._info.classList.add('card-info');
        this._body = document.createElement('div');
        this._body.classList.add('card-body');
        this.elem.append(this._body);
    }
}