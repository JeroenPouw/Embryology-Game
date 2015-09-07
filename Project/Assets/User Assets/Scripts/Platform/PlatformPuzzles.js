#pragma strict
var pushbutton : GameObject;
var puzzleSkin : GUISkin;
var puzzleblockinfo : boolean = false;
var TextSize : Vector2 = new Vector2(430, 250);
var puzzledoor : GameObject;
var dooropensound : AudioClip;
var doorclosedsound : AudioClip; 
var speed: float = 0.1;

var buttonAnimation: boolean = false;
var playerExit: boolean = false;
var timer :float = 0;
var timerback :float = 0;
var pushColliderInfo : boolean = false;

function Start () {
	pushbutton = GameObject.FindGameObjectWithTag("PushButton");
	puzzledoor = GameObject.FindGameObjectWithTag("PuzzleDoor");  
}

function Update () {
	if(buttonAnimation == true && timer < 1){
		timer += Time.deltaTime;
		var move=Vector3(1, 0, 0);
		pushbutton.transform.Translate(move * speed * Time.deltaTime);
	}
	if(timer >= 1){
			move = Vector3(0,0,0);
			pushbutton.transform.Translate(0,0,0);
			buttonAnimation = false;
	}
	if(playerExit == true && buttonAnimation == false){
		timerback += Time.deltaTime;
		var moveback=Vector3(-1, 0, 0);
		pushbutton.transform.Translate(moveback * speed * Time.deltaTime);
	}
	if(timerback >= 1){
			moveback = Vector3(0,0,0);
			pushbutton.transform.Translate(0,0,0);
			playerExit = false;
			timerback = 0;
	}
}

function OnTriggerEnter(other: Collider){
	if(other.gameObject.tag == "PushCollider"){
		buttonAnimation = true;
		puzzledoor.active = false;
		audio.PlayOneShot(dooropensound);
		playerExit = false;
	}
	if(other.gameObject.name == "PuzzleBlockInfo"){
		puzzleblockinfo = true;
	}
	if(other.gameObject.name == "PushCollider"){
		pushColliderInfo = true;
	}
}

function OnTriggerExit(other: Collider){
	if(other.gameObject.tag == "PushCollider"){
		playerExit = true;
		yield WaitForSeconds(1);
		puzzledoor.active = true;
		audio.PlayOneShot(doorclosedsound);
		timer = 0;
	}
	if(other.gameObject.name == "PuzzleBlockInfo"){
		puzzleblockinfo = false;
	}
	if(other.gameObject.name == "PushCollider"){
		pushColliderInfo = false;
	}
}

function OnGUI(){
	GUI.skin = puzzleSkin;
	if(puzzleblockinfo == true){
		GUILayout.BeginArea (Rect (Screen.width * 0.4, Screen.height - Screen.height + 50, TextSize.x,TextSize.y));  
		var PuzzleInfo = "This door seems closed, maybe you can find a switch to open it";
	    GUILayout.Label(PuzzleInfo);
	    GUILayout.EndArea();
	}
	if(pushColliderInfo == true){
		GUILayout.BeginArea (Rect (Screen.width * 0.4, Screen.height - Screen.height + 50, TextSize.x,TextSize.y));  
		var pushColliderText = "There is a switch over here! Maybe you can find something to push against the switch.";
	    GUILayout.Label(pushColliderText);
	    GUILayout.EndArea();
	}
}
