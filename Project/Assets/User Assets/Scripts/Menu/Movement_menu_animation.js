#pragma strict
var pointB : Vector3;
var pointC : Vector3;
var pointD : Vector3;
var speed = 0.1;

function Start () {
    var pointA = transform.position;
    while (true){
    	yield MoveObject(transform, pointA, pointB, 3.0);
    	yield MoveObject(transform, pointB, pointC, 3.0);
    	yield MoveObject(transform, pointC, pointD, 3.0);
    	yield MoveObject(transform, pointD, pointA, 3.0);
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
    