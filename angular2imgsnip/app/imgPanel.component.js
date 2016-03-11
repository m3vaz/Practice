System.register(['angular2/core', './imgUpload.component', './imgPrev.component'], function(exports_1, context_1) {
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
    var core_1, imgUpload_component_1, imgPrev_component_1;
    var imgPanelComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (imgUpload_component_1_1) {
                imgUpload_component_1 = imgUpload_component_1_1;
            },
            function (imgPrev_component_1_1) {
                imgPrev_component_1 = imgPrev_component_1_1;
            }],
        execute: function() {
            imgPanelComponent = (function () {
                function imgPanelComponent() {
                }
                imgPanelComponent.prototype.uploadPreview = function (imgData) {
                    this.imgData = imgData;
                };
                imgPanelComponent = __decorate([
                    core_1.Component({
                        selector: 'imgpanel',
                        template: '<imgpreview [imgData]="imgData">\ </imgpreview> \
	<br /> <imgupload (complete)="uploadPreview($event)"> </imgupload>',
                        directives: [imgUpload_component_1.imgUploadComponent, imgPrev_component_1.imgPreviewComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], imgPanelComponent);
                return imgPanelComponent;
            }());
            exports_1("imgPanelComponent", imgPanelComponent);
        }
    }
});
//# sourceMappingURL=imgPanel.component.js.map