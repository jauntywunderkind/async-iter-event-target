"use module"
import Pipe from "async-iter-pipe"
import EventTargetShim from "event-target-shim"

export function AsyncIterEventTarget( opts){
	EventTargetShim.call( this, opts)
	Pipe.call( this, opts)
}
export {
	AsyncIterEventTarget as default
}
// TODO: lol crap i want to mixin both Pipe and EventTargetShim
AsyncIterEventTarget.prototype= Object.create( Pipe.prototype)
AsyncIterEventTarget.prototype= Object.create( EventTargetShim.prototype)
AsyncIterEventTarget.prototype.constructor= AsyncIterEventTarget

const pipePush= Pipe.prototype.push
AsyncIterEventTarget.prototype.push= function( data){
	this.dispatchEvent( "data", data)
	return pipePush.call( this, data)
}
