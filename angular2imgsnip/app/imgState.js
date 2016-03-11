System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var imgStateService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            imgStateService = (function () {
                function imgStateService() {
                    this._state = {
                        rotate: 0,
                        translateX: 0,
                        translateY: 0,
                        scale: 1,
                        opacity: 1,
                    };
                    this.state$ = new core_1.EventEmitter();
                }
                imgStateService.prototype.getBlankState = function () {
                    return {
                        rotate: 0,
                        translateX: 0,
                        translateY: 0,
                        scale: 1,
                        opacity: 1
                    };
                };
                imgStateService.prototype.getState = function () {
                    return this._state;
                };
                imgStateService.prototype.setState = function (state) {
                    this._state = state;
                    this.state$.next(this._state);
                };
                // Angular is not making services singletons
                // Must be done manually (?)
                imgStateService.prototype.getInstance = function () {
                    if (imgStateService.instance === null)
                        imgStateService.instance = this;
                    return imgStateService.instance;
                };
                imgStateService.instance = null;
                imgStateService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], imgStateService);
                return imgStateService;
            }());
            exports_1("imgStateService", imgStateService);
        }
    }
});
//# sourceMappingURL=imgState.js.map