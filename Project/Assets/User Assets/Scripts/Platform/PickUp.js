 #pragma strict 
var Ammo: int = 0;
var DNArepair :GameObject;
var spawnPoint : Transform;
var interval : float = 0.2;
var nextShot : float = 0.2;
var pickupDNARepairSound : AudioClip;
var shootDNARepairSound : AudioClip;
var healthscript : HealthStatusBarScript;
healthscript = GetComponent("HealthStatusBarScript");
var pickupParticle : GameObject;
var waterParticle : GameObject;
  
function Update () {
    if(Input.GetKey(KeyCode.Space) && Ammo > 0){
            Shoot();
    }
}

function OnCollisionEnter(hit: Collision){
    if(hit.gameObject.tag == "DNArepair" && Ammo <= 5){  
    	Instantiate(pickupParticle, hit.gameObject.transform.position, Quaternion.Euler(0, 0, 0)); 
    	GetComponent.<AudioSource>().PlayOneShot(pickupDNARepairSound);
 		healthscript.shieldWidth = healthscript.shieldWidth + 43;
        hit.gameObject.active = false;
        Ammo += 1; 
        if(hit.gameObject.active == false){
	         yield WaitForSeconds(5);
	         hit.gameObject.active = true;
	         hit.gameObject.GetComponent(Missle).enabled = false;
         }     
     } 
     if(hit.gameObject.name == "DNA_Repair(Clone)"){
     	Destroy(hit.gameObject);
     } 
     else if(hit.gameObject.tag == "DNArepair" && Ammo >= 6){ 
     	Instantiate(pickupParticle, hit.gameObject.transform.position, Quaternion.Euler(0, 0, 0)); 
      	Destroy(hit.gameObject);
      	GetComponent.<AudioSource>().PlayOneShot(pickupDNARepairSound);
    }         
}

function Shoot(){
	if (Time.time >= nextShot && Time.timeScale != 0){ // only shoot after interval
		nextShot = Time.time + interval; // update nextShot
    	var shot:GameObject = Instantiate(DNArepair, spawnPoint.transform.position, Quaternion.identity);
    	var waterSplash:GameObject = Instantiate(waterParticle, shot.transform.position, Quaternion.Euler(0, 0, 0)); 
    	waterSplash.gameObject.transform.parent = shot.gameObject.transform;
    	shot.GetComponent(Missle).enabled = true;
    	GetComponent.<AudioSource>().PlayOneShot(shootDNARepairSound);
    	Ammo -= 1; 
		healthscript.shieldWidth = healthscript.shieldWidth - 43;
 	}         
}


   