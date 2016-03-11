import {Component} from 'angular2/core';
import {imgPanelComponent} from './imgPanel.component';
import {actionPanelComponent} from './actionPanel.component';
import {imgStateService} from './imgState';

@Component({
    selector: 'my-app',
    template: '<h1>MonaSnip v2</h1><br /><div style="float:left;"> <imgpanel></imgpanel></div>  <div style="float:left;"> <actionpanel> </actionpanel></div>',
	directives: [imgPanelComponent, actionPanelComponent],
	providers: [imgStateService]
})

export class AppComponent { }

// If you move the image over the buttons, you will not be able to click the buttons (it's at the top of the DOM)
// Built for Node v5.7.1
// Built for Angular2 v2.0.0-beta.9
// Tested as working Firefox 43.0.1
// Tested as working Chrome 48.0.2564.116 m