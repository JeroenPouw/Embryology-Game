#pragma strict
var inBlokInfo : boolean = false;
var questionSkin : GUISkin;
var TextSize : Vector2 = new Vector2(430, 250);
var blokkade : GameObject;
var blokkade1: GameObject;
var blokkade2: GameObject;
function Start () {
	blokkade = GameObject.FindGameObjectWithTag("Blokkade");
	blokkade1 = GameObject.FindGameObjectWithTag("Blokkade1");
	blokkade2 = GameObject.FindGameObjectWithTag("Blokkade2");
}

function OnTriggerEnter(other: Collider){
	if(other.gameObject.tag == "BlokInfo"){
		inBlokInfo = true;
	}
	if(other.gameObject.tag == "RemoveBlok"){
		blokkade.SetActive(false);
	}
	if(other.gameObject.tag == "RemoveBlok1"){
		blokkade1.SetActive(false);
	}
	if(other.gameObject.tag == "RemoveBlok2"){
		blokkade2.SetActive(false);
	}
}

function OnTriggerExit(other: Collider){
	if(other.gameObject.tag == "BlokInfo"){
		inBlokInfo = false;
	}
}

function OnGUI(){
	GUI.skin = questionSkin;
	if(inBlokInfo == true){
		GUILayout.BeginArea (Rect (Screen.width * 0.4, Screen.height - Screen.height + 50, TextSize.x,TextSize.y));  
		var BlokInfo = "You cannot enter this hallway from this side, find another way.";
	    GUILayout.Label(BlokInfo); 
	    GUILayout.EndArea();
	 
	}
}