#pragma strict
var enemyPrefab : GameObject; // prefab to spawn
var enemySpawned : int; // enemy spawned
var spawn : boolean; 
var minWait : int;
var maxWait : int;
var waitTime : int;

function Start () {
	minWait = 1;
	maxWait = 10;
	waitTime = Random.Range(minWait, maxWait);
	spawn = true;
}

function Update () {
	if(spawn && enemySpawned <= 2){
		Spawn();
	}
}

function Spawn(){
	Instantiate(enemyPrefab, transform.position, transform.rotation); // spawn at spawner loaction
	enemySpawned += 1;
	NewWaitTime();
	spawn = false;
	SetSpawn();	
} 

function SetSpawn(){
	yield WaitForSeconds(waitTime);
	spawn = true;
}

function NewWaitTime(){
	waitTime = Random.Range(minWait, maxWait);
}