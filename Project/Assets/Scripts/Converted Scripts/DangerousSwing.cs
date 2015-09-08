// Converted from UnityScript to C# at http://www.M2H.nl/files/js_to_c.php - by Mike Hergaarden
// Do test the code! You usually need to change a few small bits.

using UnityEngine;
using System.Collections;

public class DangerousSwing : MonoBehaviour {
	HealthStatusBarScript health;
	health = FindObjectOfType(typeof(HealthStatusBarScript));
	float yAs;
	float xAs;
	private float zAs;
	bool  playerImmortal = false;
	AudioClip deadlySwingSound;
	GameObject bloodParticle;
	GameObject waterSplashParticle;
	
	void  Update (){
		zAs = maxRotation * Mathf.Sin(Time.time * speed);
		transform.rotation = Quaternion.Euler(xAs, yAs , zAs);
		if(zAs >= -10 && zAs <= 10){
			GetComponent.<AudioSource>().PlayOneShot(deadlySwingSound);
		}
		if(zAs <= -59 && zAs >= -60 && yAs == 90){
			GameObject waterSplashPar = Instantiate(waterSplashParticle, this.gameObject.transform.position, Quaternion.Euler(0, 0, 0)); 
			waterSplashPar.gameObject.transform.position.y -= 5;
			waterSplashPar.gameObject.transform.position.z -= 4;
		}
		if(zAs >= 59 && zAs <= 60 && yAs == 90){
			GameObject waterSplashPar2 = Instantiate(waterSplashParticle, this.gameObject.transform.position, Quaternion.Euler(0, 0, 0)); 
			waterSplashPar2.gameObject.transform.position.y -= 5;
			waterSplashPar2.gameObject.transform.position.z -= -4;
		}
		if(zAs <= -59 && zAs >= -60 && yAs >= 200 && yAs <= 221){
			GameObject waterSplashPar3 = Instantiate(waterSplashParticle, this.gameObject.transform.position, Quaternion.Euler(0, 0, 0)); 
			waterSplashPar3.gameObject.transform.position.y -= 5;
			waterSplashPar3.gameObject.transform.position.z += 3.5f;
			waterSplashPar3.gameObject.transform.position.x -= 4;
			//waterSplashPar3.gameObject.transform.position.x += 4;
		}
		if(zAs >= 59 && zAs <= 60 && yAs >= 200 && yAs <= 221){
			GameObject waterSplashPar4 = Instantiate(waterSplashParticle, this.gameObject.transform.position, Quaternion.Euler(0, 0, 0)); 
			waterSplashPar4.gameObject.transform.position.y -= 5;
			waterSplashPar4.gameObject.transform.position.z -= 3.5f;
			waterSplashPar4.gameObject.transform.position.x += 4;
			//waterSplashPar4.gameObject.transform.position.x -= -4;
		}
		if(zAs <= -59 && zAs >= -60 && yAs == 0){
			GameObject waterSplashPar5 = Instantiate(waterSplashParticle, this.gameObject.transform.position, Quaternion.Euler(0, 0, 0)); 
			waterSplashPar5.gameObject.transform.position.y -= 5;
			waterSplashPar5.gameObject.transform.position.x += 4;
		}
		if(zAs >= 59 && zAs <= 60 && yAs == 0){
			GameObject waterSplashPar6 = Instantiate(waterSplashParticle, this.gameObject.transform.position, Quaternion.Euler(0, 0, 0)); 
			waterSplashPar6.gameObject.transform.position.y -= 5;
			waterSplashPar6.gameObject.transform.position.x -= 4;
		}
	}
	
	void  OnCollisionEnter ( Collision hit  ){
		if(hit.collider.tag == "Player" && health.healthWidth > 92 && playerImmortal == false){
			GameObject bloodPar = Instantiate(bloodParticle, hit.gameObject.transform.position, Quaternion.Euler(0, 0, 0)); 
			health.healthWidth = health.healthWidth - 100; 
			health.reduceHealth();	
			playerImmortal = true;
			yield return new WaitForSeconds(1);
			playerImmortal = false;
		}
		else if(hit.collider.tag == "Player" && health.healthWidth <= 91 && playerImmortal == false){
			Instantiate(bloodParticle, hit.gameObject.transform.position, Quaternion.Euler(0, 0, 0)); 
			health.healthWidth = -17; 
			health.reduceHealth();	
		}
	}
}