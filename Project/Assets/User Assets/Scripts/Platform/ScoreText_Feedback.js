    #pragma strict
     
var textColor : Color;

private var originalScale : Vector3;

function OnEnable(){
	Start();
} 

function Start(){

	GetComponent.<Renderer>().material.color = textColor;
	GetComponent.<Renderer>().material.color.a = 1.0;
}

function Update(){
	GetComponent.<Renderer>().material.color.a -= 0.1 * Time.deltaTime * 5; // Fade away text, last number dictates how fast to fade, higher = faster
	StartCoroutine(LerpScale(2.0f)); // Time to take to Lerp to new size in seconds
}

function LerpScale(time : float){
	var targetScale = originalScale + Vector3(0.5, 0.5, 0.5); // New size to expand text to
	var originalTime = time;
	while (time > 0.0f)
	{
		time -= Time.deltaTime;
		transform.localScale = Vector3.Lerp(targetScale, originalScale, time / originalTime);
		yield;
	}
}
