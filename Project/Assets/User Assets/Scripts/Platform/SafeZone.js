#pragma strict

var wind : Wind;
wind = FindObjectOfType(Wind);

function OnTriggerEnter(hit: Collider){
	if(hit.gameObject.tag == "Player"){
		wind.playerSafe = true;
		wind.player.GetComponent.<Rigidbody>().drag = 100;
	}
}

function OnTriggerExit(hit: Collider){
	if(hit.gameObject.tag == "Player"){
		wind.playerSafe = false;
		wind.player.GetComponent.<Rigidbody>().drag = 0.1;
	}
}