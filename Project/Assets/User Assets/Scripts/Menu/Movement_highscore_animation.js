#pragma strict
var pointK : Vector3;
var pointL : Vector3;
var pointM : Vector3;
var pointN : Vector3;
var pointO : Vector3;
var speed = 0.1;

function Start () {
    var pointE = transform.position;
    while (true){
    	yield MoveObject(transform, pointK, pointL, 3.0);
    	yield MoveObject(transform, pointL, pointM, 3.0);
    	yield MoveObject(transform, pointM, pointN, 3.0);
    	yield MoveObject(transform, pointN, pointO, 3.0);
    	yield MoveObject(transform, pointO, pointK, 3.0);
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
    