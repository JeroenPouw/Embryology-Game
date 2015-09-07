#pragma strict
var pointF : Vector3;
var pointG: Vector3;
var pointH : Vector3;
var pointI : Vector3;
var pointJ : Vector3;
var speed = 0.1;

function Start () {
    var pointE = transform.position;
    while (true){
    	yield MoveObject(transform, pointE, pointF, 3.0);
    	yield MoveObject(transform, pointF, pointG, 3.0);
    	yield MoveObject(transform, pointG, pointH, 3.0);
    	yield MoveObject(transform, pointH, pointI, 3.0);
    	yield MoveObject(transform, pointI, pointJ, 3.0);
    	yield MoveObject(transform, pointJ, pointE, 3.0);
    }
}
     
function MoveObject (thisTransform : Transform, startPos : Vector3, endPos : Vector3, time : float) {
    var i = 0.0;
    var rate = 1.0/time;
    while (i < 1.0) {
    	i += Time.deltaTime * rate;
    	thisTransform.position = Vector3.Lerp(startPos, endPos, i);
   	    thisTransform.LookAt(endPos);
    	thisTransform.Rotate(0, 0, 0);
   	 	yield;
    }
}
    