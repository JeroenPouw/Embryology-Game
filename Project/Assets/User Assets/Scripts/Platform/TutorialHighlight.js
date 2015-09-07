#pragma strict
var timing :float;
function Start () {
 	timing = 0;
}

function Update () {
	HighLight();
}
function HighLight() {
	timing+=Time.deltaTime;
	if(timing > 0.5){
		GetComponent.<Renderer>().material.shader = Shader.Find("Self-Illumin/Outlined Diffuse");
		yield WaitForSeconds(0.5);
		timing = 0;
	}
	if(timing == 0){
		GetComponent.<Renderer>().material.shader = Shader.Find("Diffuse");
	}
}