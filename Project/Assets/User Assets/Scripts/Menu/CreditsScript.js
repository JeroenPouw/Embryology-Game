#pragma strict

function Start () {

}

function Update () {
	if(Input.GetKey(KeyCode.Escape)){
		Application.LoadLevel(0);
	}
}

function ExitCredits(){
	Application.LoadLevel(0);
}