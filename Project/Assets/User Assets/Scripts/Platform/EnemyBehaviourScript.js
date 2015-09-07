#pragma strict
var speed : float = 7.0;
var timing :float;
var pickup : PickUp;
pickup = FindObjectOfType(PickUp);
var interval : float = 0.2;
var nextTime : float = 0.2;
var isHit : boolean = false;
var score : Score;
score = FindObjectOfType(Score);
var spawn : Enemy_Spawner_level1;
spawn = FindObjectOfType(Enemy_Spawner_level1);
var scorePlus: Questions;
scorePlus = FindObjectOfType(Questions);
var model:Transform;
var enemyHurt : AudioClip;
var hitParticle : GameObject;

function Start()
{
    var randomDirection : Vector3 = new Vector3(Random.Range(0, 0),Random.Range(-359, 359),Random.Range(0, 0));
    transform.Rotate(randomDirection);
    timing = 0;
}
     
function Update()
{
	if(Time.timeScale != 0){
		model.Rotate(Vector3(0, 10, 0));
	}
}
function FixedUpdate() {
	timing+=Time.deltaTime;
	transform.position += transform.forward*speed*Time.deltaTime;
	if(timing > 3){
		ChangeDirection();
		timing = 0;
	}
}
	
function ChangeDirection(){
	var randomDirection : Vector3 = new Vector3(Random.Range(0, 0),Random.Range(-359, 359),Random.Range(0, 0));
    transform.Rotate(randomDirection);
}
	
function OnCollisionEnter(hit: Collision){
	if(hit.gameObject.tag == "DNArepair" && hit.gameObject.GetComponent(Missle).enabled == false){
		Instantiate(hitParticle, hit.gameObject.transform.position, Quaternion.Euler(0, 0, 0));
		Destroy(hit.gameObject);
		Destroy(this.gameObject);
		spawn.enemySpawned -= 1;
	}
	if(hit.gameObject.tag == "Level1_wall"){
		var randomDirection : Vector3 = new Vector3(Random.Range(0, 0),Random.Range(-180, -180),Random.Range(0, 0));
		transform.Rotate(randomDirection);	
	}
	if(hit.gameObject.name == "level2_new" || hit.gameObject.name == "level2_new_minimap" ){
		var randomDirectionlvl2 : Vector3 = new Vector3(Random.Range(0, 0),Random.Range(-180, -180),Random.Range(0, 0));
		transform.Rotate(randomDirectionlvl2);	
	}
	if(hit.gameObject.tag == "Level3_wall" || hit.gameObject.name == "level3" || hit.gameObject.name == "level3_minimap" ){
		var randomDirectionlvl3 : Vector3 = new Vector3(Random.Range(0, 0),Random.Range(-180, -180),Random.Range(0, 0));
		transform.Rotate(randomDirectionlvl3);	
	}
}	
function OnTriggerEnter(hit: Collider){
	if(hit.gameObject.name == "TutorialWalls"){
		var randomDirection1 : Vector3 = new Vector3(Random.Range(0, 0),Random.Range(-180, -180),Random.Range(0, 0));
		transform.Rotate(randomDirection1);
	}
	if(hit.gameObject.name == "QuestionRoomWall"){
		var randomDirection2 : Vector3 = new Vector3(Random.Range(0, 0),Random.Range(-180, -180),Random.Range(0, 0));
		transform.Rotate(randomDirection2);
	}
}


		

	
	