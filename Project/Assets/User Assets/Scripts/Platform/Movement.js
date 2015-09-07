#pragma strict
 
var speed = 16.0;
var particleCollider : boolean = false;
var wind : Wind;
wind = FindObjectOfType(Wind);
var inCameraZone: boolean = false;
var singlePress : boolean = false;
var levelinfoScript : LevelInfo;
levelinfoScript = FindObjectOfType(LevelInfo);

function IsMoving()
{
	return transform.Translate;
}
function Update () {
	if(singlePress == false){
		speed = 12;
	}
	if(singlePress == true){
		speed = 16;
	}
	if(Input.GetKey("left")||Input.GetKey(KeyCode.A))
	{
		singlePress = true;
		levelinfoScript.infoClicked = false;
		this.transform.rotation = Quaternion.Euler(0, 0, 0);
		transform.Translate(Vector3.forward * speed * Time.deltaTime);
	}
	if(Input.GetKey("right")||Input.GetKey(KeyCode.D))
	{	
		singlePress = true;
		levelinfoScript.infoClicked = false;
		this.transform.rotation = Quaternion.Euler(0, 180, 0);
		transform.Translate(Vector3.forward * speed * Time.deltaTime);
	}
	if(Input.GetKey("up")||Input.GetKey(KeyCode.W))
	{
		singlePress = true;
		levelinfoScript.infoClicked = false;
		this.transform.rotation = Quaternion.Euler(0, 90, 0);
		transform.Translate(Vector3.forward * speed * Time.deltaTime);
	}
	if(Input.GetKey("down")||Input.GetKey(KeyCode.S))
	{
		singlePress = true;
		levelinfoScript.infoClicked = false;
		this.transform.rotation = Quaternion.Euler(0, 270, 0);
		transform.Translate(Vector3.forward * speed * Time.deltaTime);
	}
	
 	if(Input.GetKey("left") && Input.GetKey("up") || Input.GetKey(KeyCode.A) && Input.GetKey(KeyCode.W)){
		singlePress = false;
		levelinfoScript.infoClicked = false;
		this.transform.rotation = Quaternion.Euler(0, 45, 0);
	}
	if(Input.GetKey("left") && Input.GetKey("down") || Input.GetKey(KeyCode.A) && Input.GetKey(KeyCode.S)){
		singlePress = false;
		levelinfoScript.infoClicked = false;
		this.transform.rotation = Quaternion.Euler(0, 315, 0);
	}
 	if(Input.GetKey("right") && Input.GetKey("down") || Input.GetKey(KeyCode.D) && Input.GetKey(KeyCode.S)){
		singlePress = false;
		levelinfoScript.infoClicked = false;
		this.transform.rotation = Quaternion.Euler(0, 225, 0);
	}
	if(Input.GetKey("right") && Input.GetKey("up") || Input.GetKey(KeyCode.D) && Input.GetKey(KeyCode.W)){
		singlePress = false;
		levelinfoScript.infoClicked = false;
		this.transform.rotation = Quaternion.Euler(0, 135, 0);
	}
}
function OnTriggerEnter(hit: Collider){
	if(hit.gameObject.name == "HallwayCollide"){
		inCameraZone = true;
	}
	
}
function OnTriggerExit(hit: Collider){
	if(hit.gameObject.name == "HallwayCollide"){
		inCameraZone = false;
	}
	
}
