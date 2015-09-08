#pragma strict
var inNerveWall : boolean = false;
var InfoWallNerve: GameObject; 
var InfoWallNerve2: GameObject; 
var tutorialSkin : GUISkin;
var TextSize : Vector2 = new Vector2(430, 250);

function OnTriggerEnter(other: Collider){
	if(other.gameObject.name == "InfoWallNerve"){
		inNerveWall = true;
	}
	if(other.gameObject.name == "InfoWallNerve2"){
		inNerveWall = true;
	}
}

function OnTriggerExit(other: Collider){
	if(other.gameObject.name == "InfoWallNerve"){
		inNerveWall = false;
		InfoWallNerve.SetActive(false);
		InfoWallNerve2.SetActive(false);
	}
	if(other.gameObject.name == "InfoWallNerve2"){
		inNerveWall = false;
		InfoWallNerve.SetActive(false);
		InfoWallNerve2.SetActive(false);
	}
}
function OnGUI(){
	GUI.skin = tutorialSkin;
	if(inNerveWall == true){
		GUILayout.BeginArea (Rect (Screen.width * 0.4, Screen.height - Screen.height + 50, TextSize.x,TextSize.y));  
		var InfoWall9 = "Watch out for the electrical pulse of this nerve cell";
	    GUILayout.Label(InfoWall9); 
	    GUILayout.EndArea();
	}

}