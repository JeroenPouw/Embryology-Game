var isQuitButton = false;
var isInfoButton = false;
var isBackButton = false;
var isPlayButton = false;
var isCreditsButton = false;
var Camera1 : Camera;
var Camera2 : Camera;
var infoClicked = false;
var score : Score;
score = FindObjectOfType(Score);
var loadingScript : Loading_Screen;
loadingScript = FindObjectOfType(Loading_Screen);

function Start(){
	Camera1.enabled = true;
	Camera2.enabled = false;
}
function OnMouseEnter()
{
	// change the color of the text
	GetComponent.<Renderer>().material.color = Color.black;
}
function OnMouseExit(){
	GetComponent.<Renderer>().material.color = Color.white;
}

function OnMouseUp(){
	// are we dealing with a Quit button?
	if(isQuitButton){
		// quit the game
		Application.Quit();
	}
	if(isCreditsButton){
		Application.LoadLevel(6);
	}
	if(isInfoButton){
		infoClicked = true;
		backClicked = false;
		Camera1.enabled = false;
		Camera2.enabled = true;
	}
	if(isBackButton){
		infoClicked = false;
		backClicked = true;
		Camera1.enabled = true;
		Camera2.enabled = false;
	}
	else if(isPlayButton){
		// load level
		Loading_Screen.LoadingScreenOn = true;
		loadingScript.ChooseImg();
		yield WaitForSeconds(3);
		Application.LoadLevel(1);
		score.Score = 0;
	}	
}
