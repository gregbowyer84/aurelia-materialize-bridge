import * as au from "../aurelia";
var MdToastService = /** @class */ (function () {
    function MdToastService() {
    }
    MdToastService.prototype.removeAll = function () {
        M.Toast.dismissAll();
    };
    MdToastService.prototype.show = function (message, displayLength, className, activationPercent, inDuration, outDuration) {
        var options = { html: message, displayLength: displayLength, classes: className, activationPercent: activationPercent, inDuration: inDuration, outDuration: outDuration };
        au.cleanOptions(options);
        return new Promise(function (resolve) {
            options.completeCallback = function () { return resolve(instance); };
            var instance = new M.Toast(options);
        });
    };
    return MdToastService;
}());
export { MdToastService };
//# sourceMappingURL=toastService.js.map