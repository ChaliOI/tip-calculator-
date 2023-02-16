
function Ticker(opt) {
    this._decay = opt.decay;
    this._growth = opt.growth;
    this._stocks = opt.stocks;
    this._state = null;
};
Ticker.prototype.execute = function () {
    var self = this;
    this._stocks.forEach(function (p, i) {
        p.price -= p.price / self._decay;
    });
    process.send({ stocks: this._stocks });