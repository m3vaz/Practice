System.register(['angular2/core', './imgState'], function(exports_1, context_1) {
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
    var core_1, imgState_1;
    var imgPreviewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (imgState_1_1) {
                imgState_1 = imgState_1_1;
            }],
        execute: function() {
            imgPreviewComponent = (function () {
                function imgPreviewComponent(_imgStateService) {
                    this._imgStateService = _imgStateService;
                    // Handle transformation string construction in this class
                    // Actual accounting to determine current state is in the history panel
                    this.transformString = "";
                }
                // Rotation, translation, scaling, opacity should be
                // linear operations w.r.t. themselves, so don't need to keep track of order
                // Order of the transforms DOES matter
                // it doesn't make sense to have the translations altered by
                // the rotation or scale, so should be the LAST things applied
                imgPreviewComponent.prototype.updateTransform = function () {
                    // order matters. Rightmost transform first
                    var transformArr = [];
                    transformArr.push('translate(' + this._state.translateX + 'px, ' + this._state.translateY + 'px)');
                    transformArr.push('rotate(' + this._state.rotate + 'deg)');
                    transformArr.push('scale(' + this._state.scale + ', ' + this._state.scale + ')');
                    this.transformString = transformArr.join(' ');
                };
                imgPreviewComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._imgStateService.state$
                        .subscribe(function (data) {
                        _this._state = data;
                        _this.updateTransform();
                    });
                    this._state = this._imgStateService.getState();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], imgPreviewComponent.prototype, "imgData", void 0);
                imgPreviewComponent = __decorate([
                    core_1.Component({
                        selector: 'imgpreview',
                        template: '<img [src]="imgData" [style.transform]="transformString" [style.opacity]="_state.opacity"/>'
                    }), 
                    __metadata('design:paramtypes', [imgState_1.imgStateService])
                ], imgPreviewComponent);
                return imgPreviewComponent;
            }());
            exports_1("imgPreviewComponent", imgPreviewComponent);
        }
    }
});
//# sourceMappingURL=imgPrev.component.js.map