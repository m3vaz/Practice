import {Component, Input} from 'angular2/core';
import {imgUploadComponent} from './imgUpload.component';
import {imgPreviewComponent} from './imgPrev.component';
import {imgState} from './imgState';

@Component({
    selector: 'imgpanel',
    template: '<imgpreview [imgData]="imgData">\ </imgpreview> \
	<br /> <imgupload (complete)="uploadPreview($event)"> </imgupload>',
	directives: [imgUploadComponent, imgPreviewComponent]
})

export class imgPanelComponent {

	imgData;
	
	uploadPreview(imgData){
		this.imgData = imgData; 
	}
	
 }

