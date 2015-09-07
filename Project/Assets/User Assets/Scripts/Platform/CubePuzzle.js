#pragma strict
var pushbutton : GameObject;
var puzzledoor : GameObject;
var dooropensound : AudioClip;
var doorclosedsound : AudioClip; 
var puzzle : PlatformPuzzles;
puzzle = FindObjectOfType(PlatformPuzzles);
function Start () {
	pushbutton = GameObject.FindGameObjectWithTag("PushButton");
	puzzledoor = GameObject.FindGameObjectWithTag("PuzzleDoor"); 
}

function OnTriggerStay(other: Collider){
	if(other.gameObject.tag == "PushCollider"){
		puzzle.buttonAnimation = true;
		puzzledoor.active = false;
		puzzle.playerExit = false;
		puzzle.Update();
	}
}

function OnTriggerEnter(other: Collider){
	if(other.gameObject.tag == "PushCollider"){
		audio.PlayOneShot(dooropensound);
	}
}

function OnTriggerExit(other: Collider){
	if(other.gameObject.tag == "PushCollider"){
		puzzle.playerExit = true;
		yield WaitForSeconds(1);
		puzzledoor.active = true;
		audio.PlayOneShot(doorclosedsound);
		puzzle.timer = 0;
		puzzle.Update();
	}
}