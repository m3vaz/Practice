import {Component, Input, OnInit} from 'angular2/core';
import {imgState, imgStateService} from './imgState';

@Component({
    selector: 'imgpreview',
    template: '<img [src]="imgData" [style.transform]="transformString" [style.opacity]="_state.opacity"/>'
})

export class imgPreviewComponent implements OnInit {
	
	constructor(private _imgStateService: imgStateService) { }
	
	@Input() imgData;
	_state:imgState;
	
	// Handle transformation string construction in this class
	// Actual accounting to determine current state is in the history panel
	transformString:string = "";
	
	// Rotation, translation, scaling, opacity should be
	// linear operations w.r.t. themselves, so don't need to keep track of order
	// Order of the transforms DOES matter
	// it doesn't make sense to have the translations altered by
	// the rotation or scale, so should be the LAST things applied
	
	
	updateTransform() {
		// order matters. Rightmost transform first
		var transformArr = [];
		
		transformArr.push('translate('+this._state.translateX+'px, '+this._state.translateY+'px)');
		transformArr.push('rotate('+this._state.rotate+'deg)');
		transformArr.push('scale('+this._state.scale+', '+this._state.scale+')');
		
		this.transformString = transformArr.join(' ');
	}
	
	ngOnInit() {
		
		this._imgStateService.state$
			.subscribe((data) => {
				this._state = data; 
				this.updateTransform();
			});
		this._state = this._imgStateService.getState();
	}
 }

