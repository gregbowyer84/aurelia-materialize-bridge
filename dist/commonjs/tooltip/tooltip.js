"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var MdTooltip = /** @class */ (function () {
    function MdTooltip(element) {
        this.element = element;
        this.position = "bottom";
        this.delay = 50;
        this.text = "";
    }
    MdTooltip.prototype.textChanged = function () {
        this.initTooltip();
    };
    MdTooltip.prototype.attached = function () {
        this.initTooltip();
    };
    MdTooltip.prototype.detached = function () {
        if (this.instance) {
            this.instance.destroy();
        }
    };
    MdTooltip.prototype.initTooltip = function () {
        if (this.text) {
            this.instance = new M.Tooltip(this.element, { exitDelay: this.delay, html: this.text, position: this.position });
        }
        else if (this.instance) {
            this.instance.destroy();
        }
    };
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdTooltip.prototype, "position", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", Number)
    ], MdTooltip.prototype, "delay", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdTooltip.prototype, "text", void 0);
    MdTooltip = tslib_1.__decorate([
        au.customAttribute("md-tooltip"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdTooltip);
    return MdTooltip;
}());
exports.MdTooltip = MdTooltip;
//# sourceMappingURL=tooltip.js.map