#pragma strict
public var searchTag : String;
private var closetMissle : GameObject;
private var target : Transform;
public var missileExpObject : GameObject;
var scorePlus: Questions;
scorePlus = FindObjectOfType(Questions);
var score : Score;
score = FindObjectOfType(Score);
var enemyHurt : AudioClip;
var spawn : Enemy_Spawner_level1;
spawn = FindObjectOfType(Enemy_Spawner_level1);
var hitParticle : GameObject;
function Start () {
	closetMissle = FindClosestEnemy();	
	if(closetMissle)
	{
		target = closetMissle.transform;
	}
}

function Update () {
	transform.LookAt(target);
	transform.Translate(Vector3.forward * 20.0f * Time.deltaTime);
	if(target == null)
	{
		closetMissle = FindClosestEnemy();
		
		if(closetMissle)
		{
			target = closetMissle.transform;
		}
	}
}
function FindClosestEnemy()
{
	var gos : GameObject[];
	gos = GameObject.FindGameObjectsWithTag(searchTag);
	var closest : GameObject = null;
	var distance : float = Mathf.Infinity;
	var position : Vector3 = transform.position;
	
	for(var go : GameObject in gos)
	{
		var diff : Vector3 = go.transform.position - position;
		var curDistance : float = diff.sqrMagnitude;
		
		if(curDistance < distance)
		{
			closest = go;
			distance = curDistance;
		}
	}		
	return closest;
}

function OnCollisionEnter(hit: Collision){
	if(hit.gameObject.tag == "Level1_wall" || hit.gameObject.name == "level2_new" || hit.gameObject.name == "level2_new_minimap" || hit.gameObject.tag == "Level3_wall" || hit.gameObject.name == "level3" || hit.gameObject.name == "level3_minimap"){
		Instantiate(hitParticle, this.gameObject.transform.position, Quaternion.Euler(0, 0, 0));
		Destroy(this.gameObject);
	}
	if(hit.gameObject.tag == "Enemy" && this.gameObject.GetComponent(Missle).enabled == true){
		var ourRenderer = gameObject.GetComponentsInChildren(Renderer);
		for(var renderer : Renderer in ourRenderer)
		{
			renderer.enabled = false;
		}
		Instantiate(hitParticle, hit.gameObject.transform.position, Quaternion.Euler(0, 0, 0));
		score.Score += 1;
		scorePlus.eenScore = true;
		this.gameObject.collider.enabled = false;
		gameObject.collider.enabled = false;
		this.gameObject.renderer.enabled = false;
		audio.PlayOneShot(enemyHurt);
		Destroy(hit.gameObject, enemyHurt.length);
		Destroy(this.gameObject, enemyHurt.length);
		spawn.enemySpawned -= 1;
	}
}

