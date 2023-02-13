
function Ticker(opt) {
    this._decay = opt.decay;
    this._growth = opt.growth;
    this._stocks = opt.stocks;
    this._state = null;
};