#pragma strict
var speed: float = 2.5;
var maxRotation: float = 60.0;
var health : HealthStatusBarScript;
health = FindObjectOfType(HealthStatusBarScript);
var yAs: float;
var xAs: float;
private var zAs: float;
var playerImmortal : boolean = false;
var deadlySwingSound : AudioClip;
var bloodParticle : GameObject;
var waterSplashParticle : GameObject;

function Update() {
	zAs = maxRotation * Mathf.Sin(Time.time * speed);
	transform.rotation = Quaternion.Euler(xAs, yAs , zAs);
	if(zAs >= -10 && zAs <= 10){
		audio.PlayOneShot(deadlySwingSound);
	}
	if(zAs <= -59 && zAs >= -60 && yAs == 90){
		var waterSplashPar : GameObject = Instantiate(waterSplashParticle, this.gameObject.transform.position, Quaternion.Euler(0, 0, 0)); 
		waterSplashPar.gameObject.transform.position.y -= 5;
		waterSplashPar.gameObject.transform.position.z -= 4;
	}
	if(zAs >= 59 && zAs <= 60 && yAs == 90){
		var waterSplashPar2 : GameObject = Instantiate(waterSplashParticle, this.gameObject.transform.position, Quaternion.Euler(0, 0, 0)); 
		waterSplashPar2.gameObject.transform.position.y -= 5;
		waterSplashPar2.gameObject.transform.position.z -= -4;
	}
	if(zAs <= -59 && zAs >= -60 && yAs >= 200 && yAs <= 221){
		var waterSplashPar3 : GameObject = Instantiate(waterSplashParticle, this.gameObject.transform.position, Quaternion.Euler(0, 0, 0)); 
		waterSplashPar3.gameObject.transform.position.y -= 5;
		waterSplashPar3.gameObject.transform.position.z += 3.5;
		waterSplashPar3.gameObject.transform.position.x -= 4;
		//waterSplashPar3.gameObject.transform.position.x += 4;
	}
	if(zAs >= 59 && zAs <= 60 && yAs >= 200 && yAs <= 221){
		var waterSplashPar4 : GameObject = Instantiate(waterSplashParticle, this.gameObject.transform.position, Quaternion.Euler(0, 0, 0)); 
		waterSplashPar4.gameObject.transform.position.y -= 5;
		waterSplashPar4.gameObject.transform.position.z -= 3.5;
		waterSplashPar4.gameObject.transform.position.x += 4;
		//waterSplashPar4.gameObject.transform.position.x -= -4;
	}
	if(zAs <= -59 && zAs >= -60 && yAs == 0){
		var waterSplashPar5 : GameObject = Instantiate(waterSplashParticle, this.gameObject.transform.position, Quaternion.Euler(0, 0, 0)); 
		waterSplashPar5.gameObject.transform.position.y -= 5;
		waterSplashPar5.gameObject.transform.position.x += 4;
	}
	if(zAs >= 59 && zAs <= 60 && yAs == 0){
		var waterSplashPar6 : GameObject = Instantiate(waterSplashParticle, this.gameObject.transform.position, Quaternion.Euler(0, 0, 0)); 
		waterSplashPar6.gameObject.transform.position.y -= 5;
		waterSplashPar6.gameObject.transform.position.x -= 4;
	}
}

function OnCollisionEnter(hit : Collision){
	if(hit.collider.tag == "Player" && health.healthWidth > 92 && playerImmortal == false){
		var bloodPar : GameObject = Instantiate(bloodParticle, hit.gameObject.transform.position, Quaternion.Euler(0, 0, 0)); 
       	health.healthWidth = health.healthWidth - 100; 
		health.reduceHealth();	
		playerImmortal = true;
		yield WaitForSeconds(1);
		playerImmortal = false;
	}
	else if(hit.collider.tag == "Player" && health.healthWidth <= 91 && playerImmortal == false){
		Instantiate(bloodParticle, hit.gameObject.transform.position, Quaternion.Euler(0, 0, 0)); 
       	health.healthWidth = -17; 
		health.reduceHealth();	
	}
}