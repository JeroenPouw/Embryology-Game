#pragma strict
var wind : ParticleSystem;
var windSecond : ParticleSystem;
var timer :float = 0;
var timerWindStart:float = 3;
var timerReset: float = 8;
var forcePower : float = 10;
var WindOn:boolean = false;
var player:GameObject;

var playerSafe:boolean = false;

function Update () {
	if(WindOn == true){
		Wind();
	}	
}
function Wind() {
	timer += Time.deltaTime;
	
	if (!playerSafe && timer >= timerWindStart && timer < timerReset){
		WindOnPlayer();
		wind.enableEmission = true;
		if(windSecond != null){
			windSecond.enableEmission = true;
		}
	}
	
	if (timer >= timerReset){
		timer -= timerReset;
	}
	if(timer < timerWindStart){
	wind.enableEmission = false;
		if(windSecond != null){
			windSecond.enableEmission = false;
		}
	}
}

function OnTriggerEnter(hit: Collider){
	if(hit.gameObject.tag == "Player"){
		player.rigidbody.drag = 0.1;
		WindOn = true;
		timer = 0;	
	}
}

function OnTriggerExit(hit: Collider){
	if(hit.gameObject.tag == "Player"){
		player.rigidbody.drag = 100;
		WindOn = false;	
	}
}

function WindOnPlayer(){
	player.rigidbody.AddForce(transform.forward * forcePower);
}