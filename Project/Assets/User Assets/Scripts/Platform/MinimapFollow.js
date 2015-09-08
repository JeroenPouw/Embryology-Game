#pragma strict
var playerMovement : Movement; 
playerMovement = FindObjectOfType(Movement);

function Update () {
	transform.rotation = Quaternion.Euler(90,90,0);
	if(playerMovement.inCameraZone == true){
		GetComponent.<Camera>().cullingMask = 1 | 1 << 9 | 1 << 8 | 1 << 7 | 1 << 6 | 1 << 5 | 1 << 4 | 1 << 3 | 1 << 2 | 1 << 10 | 1 << 11 | 1 << 12 | 1 << 15;
	}
	else if(playerMovement.inCameraZone == false){
		GetComponent.<Camera>().cullingMask =  2 | 1 << 9 | 1 << 8 | 1 << 7 | 1 << 6 | 1 << 5 | 1 << 4 | 1 << 3 | 1 << 2 | 1 << 10 | 1 << 11 | 1 << 12 | 1 << 15 | 1 << 14 | 1 << 13;
	}
}