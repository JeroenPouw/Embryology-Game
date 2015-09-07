#pragma strict
var playerHealth : HealthStatusBarScript;
playerHealth = FindObjectOfType(HealthStatusBarScript);

function OnParticleCollision(other : GameObject){
	Debug.Log("raak");
	if(other.gameObject.tag == "Player"){
		Debug.Log("speler");
	 	playerHealth.reduceHealthElectro();
	}
}