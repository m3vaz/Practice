import {Injectable, EventEmitter} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

export interface imgState {
	rotate: number;
	translateX: number;
	translateY: number;
	scale: number;
	opacity: number;
}

@Injectable()
export class imgStateService{		
	
	state$:EventEmitter<imgState>;
	
	static instance = null;
	
	_state:imgState = {
		rotate		: 0,
		translateX 	: 0,
		translateY 	: 0,
		scale 		: 1,
		opacity		: 1,
		};
	
	getBlankState() {
		return {
			rotate		: 0,
			translateX 	: 0,
			translateY 	: 0,
			scale 		: 1,
			opacity		: 1
			};
	}
	
	getState() {
		return this._state;
	}
	
	setState(state) {
		this._state = state;
		this.state$.next(this._state);
	}
	
	// Angular is not making services singletons
	// Must be done manually (?)
	getInstance() {
		if (imgStateService.instance === null)
			imgStateService.instance = this;
		return imgStateService.instance;
	}
	
	constructor() {
		this.state$  = new EventEmitter();
	}
	
}