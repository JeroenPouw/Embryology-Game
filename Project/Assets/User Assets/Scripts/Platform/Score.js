#pragma strict
static var Score : int = 0;
var myStyle:GUIStyle;

function OnGUI(){
	GUI.Label(Rect(Screen.width - 110, Screen.height - Screen.height + 250, 50, 25), "Score: "+Score, myStyle);
} 