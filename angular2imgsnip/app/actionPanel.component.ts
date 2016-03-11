import {Component, Output, Pipe} from 'angular2/core';
import {imgState, imgStateService} from './imgState';

@Component({
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
})

export class actionPanelComponent {
	
	constructor(private _imgStateService: imgStateService) { }
	
	rotateVal:number = 0;
	transX:number = 0;
	transY:number = 0;
	scale:number = 1;
	opacity:number = 1;
	
	history:Array<imgState> = [];
	
	rotateClick(e) {
		if (this.rotateVal === 0 || isNaN(this.rotateVal))
			return; 
		var state = this._imgStateService.getBlankState();
		state.rotate = this.rotateVal;
		this.rotateVal = 0; //reset control
		this.history.push(state)
		this.updateState();
	}
	
	transXClick() {
		if (this.transX === 0 || isNaN(this.transX))
			return;
			
		var state = this._imgStateService.getBlankState();
		state.translateX = this.transX;
		this.transX = 0;
		this.history.push(state)
		this.updateState();
	}
	
	transYClick() {
		if (this.transY === 0 || isNaN(this.transY))
			return;
			
		var state = this._imgStateService.getBlankState();
		state.translateY = this.transY;
		this.transY = 0;
		this.history.push(state);
		this.updateState();
	}
	
	scaleClick() {
		if (this.scale === 1 || isNaN(this.scale))
			return;
			
		var state = this._imgStateService.getBlankState();
		state.scale = this.scale;
		this.scale = 1;
		this.history.push(state);
		this.updateState();
	}
	
	opaClick() {
		if (this.opacity === 1 || isNaN(this.opacity))
			return;
			
		var state = this._imgStateService.getBlankState();
		state.opacity = this.opacity;
		this.opacity = 1;
		this.history.push(state);
		this.updateState();
	}
	
	reset() {
		this.history.length = 0; //clear the array
		this.updateState();
	}
	
	removeHistory(i:number) {
		this.history.splice(i, 1);
		this.updateState();
	}
	
	updateState() {
		var f = (prev, curr) => {
			prev.rotate += curr.rotate;
			prev.translateX += curr.translateX;
			prev.translateY += curr.translateY;
			prev.scale *= curr.scale;
			prev.opacity *= curr.opacity;
			return prev
		}
		var state = this.history.reduce(f, this._imgStateService.getBlankState());
		this._imgStateService.setState(state);
	}
	
 }

