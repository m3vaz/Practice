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
    var actionPanelComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (imgState_1_1) {
                imgState_1 = imgState_1_1;
            }],
        execute: function() {
            actionPanelComponent = (function () {
                function actionPanelComponent(_imgStateService) {
                    this._imgStateService = _imgStateService;
                    this.rotateVal = 0;
                    this.transX = 0;
                    this.transY = 0;
                    this.scale = 1;
                    this.opacity = 1;
                    this.history = [];
                }
                actionPanelComponent.prototype.rotateClick = function (e) {
                    if (this.rotateVal === 0 || isNaN(this.rotateVal))
                        return;
                    var state = this._imgStateService.getBlankState();
                    state.rotate = this.rotateVal;
                    this.rotateVal = 0; //reset control
                    this.history.push(state);
                    this.updateState();
                };
                actionPanelComponent.prototype.transXClick = function () {
                    if (this.transX === 0 || isNaN(this.transX))
                        return;
                    var state = this._imgStateService.getBlankState();
                    state.translateX = this.transX;
                    this.transX = 0;
                    this.history.push(state);
                    this.updateState();
                };
                actionPanelComponent.prototype.transYClick = function () {
                    if (this.transY === 0 || isNaN(this.transY))
                        return;
                    var state = this._imgStateService.getBlankState();
                    state.translateY = this.transY;
                    this.transY = 0;
                    this.history.push(state);
                    this.updateState();
                };
                actionPanelComponent.prototype.scaleClick = function () {
                    if (this.scale === 1 || isNaN(this.scale))
                        return;
                    var state = this._imgStateService.getBlankState();
                    state.scale = this.scale;
                    this.scale = 1;
                    this.history.push(state);
                    this.updateState();
                };
                actionPanelComponent.prototype.opaClick = function () {
                    if (this.opacity === 1 || isNaN(this.opacity))
                        return;
                    var state = this._imgStateService.getBlankState();
                    state.opacity = this.opacity;
                    this.opacity = 1;
                    this.history.push(state);
                    this.updateState();
                };
                actionPanelComponent.prototype.reset = function () {
                    this.history.length = 0; //clear the array
                    this.updateState();
                };
                actionPanelComponent.prototype.removeHistory = function (i) {
                    this.history.splice(i, 1);
                    this.updateState();
                };
                actionPanelComponent.prototype.updateState = function () {
                    var f = function (prev, curr) {
                        prev.rotate += curr.rotate;
                        prev.translateX += curr.translateX;
                        prev.translateY += curr.translateY;
                        prev.scale *= curr.scale;
                        prev.opacity *= curr.opacity;
                        return prev;
                    };
                    var state = this.history.reduce(f, this._imgStateService.getBlankState());
                    this._imgStateService.setState(state);
                };
                actionPanelComponent = __decorate([
                    core_1.Component({
                        selector: 'actionpanel',
                        // measurements are in degrees and pixels
                        // opacity only decreases (what does it mean to make an image more opaque?)
                        template: '<div style="float:left;"><ul style="list-style:none;">\
	<li><input type="number" [(ngModel)]="rotateVal" /><input type="button"  (click)=rotateClick($event) value="Rotate!"/></li>\
	<li><input type="number" [(ngModel)]="transX" /><input type="button" (click)=transXClick() value="Translate X!" /></li>\
	<li><input type="number" [(ngModel)]="transY" /><input type="button" (click)=transYClick() value="Translate Y!" /></li>\
	<li><input type="range" [(ngModel)]="scale" min="0.5" max="1.5" step="0.1"/><input type="button" (click)=scaleClick() value="Scale!" /></li>\
	<li><input type="range" [(ngModel)]="opacity" min="0" max="1" step="0.1"/><input type="button" (click)=opaClick() value="Opacitate(?)!" /></li>\
	</ul> \
	</div>	\
	<div style="float:left;"> <ul style="list-style:none;">\
		<li *ngFor="#item of history; #i = index">R:{{item.rotate}} X:{{item.translateX}} Y:{{item.translateY}} S:{{item.scale}} O:{{item.opacity}}  <input type="button" (click)=removeHistory(i) value="Remove" /></li>\
	</ul> \
	<input type="button" (click)=reset() value="Reset" /> </div>'
                    }), 
                    __metadata('design:paramtypes', [imgState_1.imgStateService])
                ], actionPanelComponent);
                return actionPanelComponent;
            }());
            exports_1("actionPanelComponent", actionPanelComponent);
        }
    }
});
//# sourceMappingURL=actionPanel.component.js.map