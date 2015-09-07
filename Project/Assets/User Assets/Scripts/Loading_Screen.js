#pragma strict

static var inputTextActive = false;
private var TimerMax = 300;
var Timer = TimerMax;

static var LoadingScreenOn = true;
var showLoad : boolean = false;
var loadScreenEnabled: boolean = false;
var WaitTimeRunning : boolean = false;
//Texture
var Loading_Screen1 : Texture2D;
var Loading_Screen2 : Texture2D;
var Loading_Screen3 : Texture2D;
var Loading_Screen4 : Texture2D;
var Loading_Screen5 : Texture2D;
var Loading_Screen6 : Texture2D;
var showCount : int;

static var count : int = 0;

function Start() 
{	
   if(Loading_Screen.LoadingScreenOn == true)
    {	
   		Loading_Screen.LoadingScreenOn = false;
    	showLoad = false;
    }
}

function Update () 
{
    if (Loading_Screen.LoadingScreenOn == true)
    {
       showLoad = true;
    }
}

function OnGUI () {
	GUI.depth = 0;
	if(showCount == 0 && showLoad == true){
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), Loading_Screen1);
	}
	if(showCount == 1 && showLoad == true){
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), Loading_Screen2);
	}
	if(showCount == 2 && showLoad == true){
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), Loading_Screen3);
	}
	if(showCount == 3 && showLoad == true){
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), Loading_Screen4);
	}
	if(showCount == 4 && showLoad == true){
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), Loading_Screen5);
	}
	if(showCount == 5 && showLoad == true){
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), Loading_Screen6);
	}
}
function ChooseImg(){
	var randPic = Random.Range(0, 6);
    var chosenPicture = randPic;
    switch (chosenPicture)
    {
        case 0:
        	showCount = 0;
        break;
        case 1:
            showCount = 1;
        break;
        case 2:
           showCount = 2;
        break;
        case 3:
        	showCount = 3;
        break;
         case 4:
         	showCount = 4;
        break;
         case 5:
         	showCount = 5;
        break;
    }
}