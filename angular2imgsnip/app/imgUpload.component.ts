import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'imgupload',
    template: '<input type="file" accept="image/*" (change)="fileChangeEvent($event)" placeholder="Upload file..." />'
})

export class imgUploadComponent {

	@Output() complete = new EventEmitter();
	
	fileChangeEvent(changeEvent: any){
		var self = this; // get the component into the callback so can fire event
		var file: File = changeEvent.target.files[0]; // file blob
		var reader = new FileReader();
		reader.onloadend = function(e) {
			self.complete.emit(e.target.result);
		}
		
		reader.readAsDataURL(file);
		
	}
	
 }

