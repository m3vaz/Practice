System.register(['angular2/core', './imgPanel.component', './actionPanel.component', './imgState'], function(exports_1, context_1) {
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
    var core_1, imgPanel_component_1, actionPanel_component_1, imgState_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (imgPanel_component_1_1) {
                imgPanel_component_1 = imgPanel_component_1_1;
            },
            function (actionPanel_component_1_1) {
                actionPanel_component_1 = actionPanel_component_1_1;
            },
            function (imgState_1_1) {
                imgState_1 = imgState_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<h1>MonaSnip v2</h1><br /><div style="float:left;"> <imgpanel></imgpanel></div>  <div style="float:left;"> <actionpanel> </actionpanel></div>',
                        directives: [imgPanel_component_1.imgPanelComponent, actionPanel_component_1.actionPanelComponent],
                        providers: [imgState_1.imgStateService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
// If you move the image over the buttons, you will not be able to click the buttons (it's at the top of the DOM)
// Built for Node v5.7.1
// Built for Angular2 v2.0.0-beta.9
// Tested as working Firefox 43.0.1
// Tested as working Chrome 48.0.2564.116 m 
//# sourceMappingURL=app.component.js.map