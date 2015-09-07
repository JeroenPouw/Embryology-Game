#pragma strict
var SpawnPoint: Transform;
var player : GameObject;
var gameOverTexture : Texture2D;
var playerDead: boolean;
var pauseDelay: float = 3;
var firstPauseDelay: float = 1;

var backgroundTexture : Texture;
var foregroundTexture : Texture;
var frameTexture : Texture;
 
var healthWidth: int = 242;
var healthHeight: int = 67;
 
var healthMarginLeft: int = 17;
var healthMarginTop: int = 14;
 
var frameWidth : int = 266;
var frameHeight: int = 65;
 
var frameMarginLeft : int = 10;
var frameMarginTop: int = 10;


var shieldforegroundTexture : Texture;
var shieldframeTexture : Texture;
 
var shieldWidth: int = -16;
var shieldHeight: int = 67;
 
var shieldMarginLeft: int = 17;
var shieldMarginTop: int = 83;
 
var shieldframeWidth : int = 266;
var shieldframeHeight: int = 65;
 
var shieldframeMarginLeft : int = 10;
var shieldframeMarginTop: int = 55;

var script : PickUp;
script = GetComponent("PickUp");
 
var spawn : Enemy_Spawner_level1;
spawn = FindObjectOfType(Enemy_Spawner_level1);

var scriptScore : Score;
scriptScore = GetComponent("Score");
var statColor:Color = Color.magenta;

var lostLifeSound : AudioClip;
var gameOverSound : AudioClip;
var nerveHitSound : AudioClip;
var enemyhitParticle : GameObject;
function OnGUI () {
GUI.depth = 1;
	if(playerDead == true){
		GUI.color = statColor;
		GUI.Window (0, new Rect (Screen.width / 2 -200, Screen.height / 4, 400, 150), GameOverWindow, "Game over");
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), gameOverTexture);
	}
	if(playerDead == false){
		GUI.DrawTexture( Rect(frameMarginLeft,frameMarginTop, frameMarginLeft + frameWidth, frameMarginTop + frameHeight), backgroundTexture, ScaleMode.ScaleToFit, true, 0 );

		GUI.DrawTexture( Rect(healthMarginLeft,healthMarginTop,healthWidth + healthMarginLeft, healthHeight), foregroundTexture,ScaleMode.ScaleAndCrop ,true, 10.0f );

		GUI.DrawTexture( Rect(frameMarginLeft,frameMarginTop, frameMarginLeft + frameWidth,frameMarginTop + frameHeight), frameTexture, ScaleMode.ScaleToFit, true, 0 );

		GUI.DrawTexture( Rect(shieldMarginLeft,shieldMarginTop,shieldWidth + shieldMarginLeft, shieldHeight), shieldforegroundTexture,ScaleMode.ScaleAndCrop ,true, 10.0f );

		GUI.DrawTexture( Rect(shieldframeMarginLeft,shieldframeMarginTop, shieldframeMarginLeft + shieldframeWidth,shieldframeMarginTop + shieldframeHeight), shieldframeTexture, ScaleMode.ScaleToFit, true, 0 );
	}
}
function OnCollisionEnter(hit: Collision){
	if(hit.gameObject.tag == "Enemy" && shieldWidth <= -16){
		var enemyHit:GameObject = Instantiate(enemyhitParticle, hit.gameObject.transform.position, Quaternion.Euler(0, 0, 0));
		reduceHealth();
		Destroy(hit.gameObject);
		spawn.enemySpawned -= 1;		
	}
	else if(hit.gameObject.tag == "Enemy" && shieldWidth >= -15){
		var enemyHit2:GameObject = Instantiate(enemyhitParticle, hit.gameObject.transform.position, Quaternion.Euler(0, 0, 0));
		audio.PlayOneShot(lostLifeSound);
		script.Ammo -= 1;
		shieldWidth -= 43;
		Destroy(hit.gameObject);
		spawn.enemySpawned -= 1;
	}
}
function reduceHealth() {
   if(healthWidth >= -8) {
   		audio.PlayOneShot(lostLifeSound);
       healthWidth = healthWidth - 25;
   }  
   if(healthWidth <= -17){
   		audio.PlayOneShot(gameOverSound);
   		playerDead = true;
   		scriptScore.Score = 0;
   		Time.timeScale = 0;
    } 
}
function reduceHealthElectro() {
   if(healthWidth >= -8) {
   		audio.PlayOneShot(nerveHitSound);
       healthWidth = healthWidth - 25;
   }  
   if(healthWidth <= -17){
   		audio.PlayOneShot(gameOverSound);
   		playerDead = true;
   		scriptScore.Score = 0;
   		Time.timeScale = 0;
    } 
}
function GameOverWindow() {
	var labelStyle=GUI.skin.label;
	GUI.skin.label.fontSize = 14;
	GUI.color = statColor;
	GUI.Label (new Rect (10, 20, 390, 60), "You can try again by pressing restart or you can go back to the main menu.");
	if(GUI.Button (new Rect(75, 75, 110, 50), "Restart")){
		Time.timeScale = 1.0;
		playerDead = false;
   		player.transform.position = SpawnPoint.position;
   		healthWidth = 242;
	}
	if(GUI.Button (new Rect(200, 75, 110, 50), "Back to menu")){
		Application.LoadLevel(0);
		Time.timeScale = 1.0;
		playerDead = false;
	}
}
