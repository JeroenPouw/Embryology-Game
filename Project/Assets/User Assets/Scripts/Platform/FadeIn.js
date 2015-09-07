﻿public var fadeOutTexture : Texture2D;
public var fadeSpeed = 0.3; 
var drawDepth = -1000;
var boolfadeIn : boolean = false;
public var alpha = 1.0; 
private var fadeDir = -1;

function fadeIn(){
	fadeDir = -1;	
}
function fadeOut(){
	fadeDir = 1;
}

function OnGUI(){
	GUI.depth = 1;
	if(boolfadeIn == true){
		alpha += fadeDir * fadeSpeed * Time.deltaTime;	
		alpha = Mathf.Clamp01(alpha);	
		GUI.color.a = alpha;
		GUI.depth = drawDepth;
 		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), fadeOutTexture);
	}
}