private var screenPoint: Vector3;
private var offset: Vector3;
private var curScreenPoint : Vector3;
private var curPosition : Vector3;
private var startPosition : Vector3;

var spawnerScript : PuzzelItems;

var rotatePuzzel : RotateObject;
rotatePuzzel = FindObjectOfType(RotateObject);

var scoreScript : Score;
scoreScript = FindObjectOfType(Score);

var selectScript : SelectObjects;
selectScript = FindObjectOfType(SelectObjects);

var shakeScript : CameraShake;
shakeScript = FindObjectOfType(CameraShake);

var dragging : boolean = false;
var wrongPlace : boolean = false;
var falseAnswerSound : AudioClip;

var CorrectSizeWrongPlace : boolean = false;
var WrongSizeWrongPlace : boolean = false;
var WrongSizeCorrectPlace : boolean = false;
static var showInfoFind : boolean = false;
static var count : int = 5;
var correctParticle : GameObject;

function Start () {	
	spawnerScript = this.transform.parent.GetComponent(PuzzelItems);
	startPosition = transform.position;
}


function OnMouseDown () {
	if(Time.timeScale != 0){
	    screenPoint = Camera.main.WorldToScreenPoint(gameObject.transform.position);
	    offset = gameObject.transform.position - Camera.main.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z));
	    Cursor.visible = false;
	    rotatePuzzel.enabled = false;
	}
}
     
function OnMouseDrag() {
	if(Time.timeScale != 0){
		curScreenPoint = new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z);
		curPosition = Camera.main.ScreenToWorldPoint(curScreenPoint) + offset;
		transform.position = curPosition;
		dragging = true;
	}
}
     
function OnMouseUp(){
	if(Time.timeScale != 0){
	    Cursor.visible = true;
	    rotatePuzzel.enabled = true;
		dragging = false;
	    if (Input.GetMouseButtonUp(0)){
			var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			var hit : RaycastHit;
			var layerMask = 1 << 17;
			var layerMaskWrong = 1 << 21;
			if (Physics.Raycast(ray, hit, 200, layerMask) && this.transform.tag == "PuzzleObjectCorrect"){
				// Turn on renderer
				// Count up
				// Destroy these objects
				// Spawn new
				var correctObjectPar:GameObject = Instantiate(correctParticle, this.transform.position, Quaternion.Euler(0, 0, 0)); 
				count = 5;
				rotatePuzzel.textFeedbackPlus();
				selectScript.playCorrectSound = true;
				var currentObject : GameObject = GameObject.Find(spawnerScript.sizeObjects[spawnerScript.count]);
				currentObject.GetComponent.<Renderer>().enabled = true;
				currentObject.layer = 18;
				Destroy(GameObject.FindGameObjectWithTag("PuzzleObjectCorrect"));
				var gos: GameObject[];
				gos = GameObject.FindGameObjectsWithTag("PuzzleObjectFalse");
				for (var go : GameObject in gos){
					Destroy(go);
				} 
				spawnerScript.count++;
				scoreScript.Score += 3;
				spawnerScript.SpawnObjects();
			}
		 	else if(Physics.Raycast(ray, hit, 100, layerMaskWrong) && this.transform.tag == "PuzzleObjectCorrect"){
		 		shakeScript.Shake();
		 		count--;
		 		CorrectSizeWrongPlace = true;
		 		transform.position = startPosition;
		 		if(scoreScript.Score >= 1){
		 			scoreScript.Score -= 1;
		 			rotatePuzzel.textFeedbackMin();
		 			GetComponent.<AudioSource>().PlayOneShot(falseAnswerSound);
		 		}
		 		else{
		 			scoreScript.Score = 0;
		 			rotatePuzzel.textFeedbackZero();
		 			GetComponent.<AudioSource>().PlayOneShot(falseAnswerSound);
		 		}
		 	}
	 	 	 else if(Physics.Raycast(ray, hit, 100, layerMask) && this.transform.tag == "PuzzleObjectFalse"){
		 		shakeScript.Shake();
		 		count--;
		 		WrongSizeCorrectPlace = true;
		 		transform.position = startPosition;
		 		if(scoreScript.Score >= 1){
		 			scoreScript.Score -= 1;
		 			rotatePuzzel.textFeedbackMin();
		 			GetComponent.<AudioSource>().PlayOneShot(falseAnswerSound);
		 		}
		 		else{
		 			scoreScript.Score = 0;
		 			rotatePuzzel.textFeedbackZero();
		 			GetComponent.<AudioSource>().PlayOneShot(falseAnswerSound);
		 		}
		 	}
		 	else if(Physics.Raycast(ray, hit, 100, layerMaskWrong) && this.transform.tag == "PuzzleObjectFalse"){
		 		shakeScript.Shake();
		 		count--;
		 		WrongSizeWrongPlace = true;
		 		transform.position = startPosition;
		 		if(scoreScript.Score >= 1){
		 			scoreScript.Score -= 1;
		 			rotatePuzzel.textFeedbackMin();
		 			GetComponent.<AudioSource>().PlayOneShot(falseAnswerSound);
		 		}
		 		else{
		 			scoreScript.Score = 0;
		 			rotatePuzzel.textFeedbackZero();
		 			GetComponent.<AudioSource>().PlayOneShot(falseAnswerSound);
		 		}
		 	}
		 	else{
		 	transform.position = startPosition;
		 	}
		}
		if(count <= 0){
			showInfoFind = true;
			var cObject : GameObject = GameObject.Find(spawnerScript.sizeObjects[spawnerScript.count]);
			cObject.GetComponent.<Renderer>().enabled = true;
			cObject.layer = 18;
			Destroy(GameObject.FindGameObjectWithTag("PuzzleObjectCorrect"));
			var falseObjects: GameObject[];
			falseObjects = GameObject.FindGameObjectsWithTag("PuzzleObjectFalse");
			for (var go : GameObject in falseObjects){
				Destroy(go);
			} 
			spawnerScript.count++;
			spawnerScript.SpawnObjects();
			count = 5;
		}
	}
}
function OnGUI(){
var labelStyle=GUI.skin.label;
	if(CorrectSizeWrongPlace == true && count <= 4){
		GUI.skin.label.fontSize = 20;
		GUI.Label (new Rect (Screen.width / 2 - 200, 20, 500, 70), "You got the <color=#40FF00><b>correct size</b></color> but at the <color=#FF0000><b>wrong place</b></color>");
		WaitTime();
	}
	if(WrongSizeCorrectPlace == true && count <= 4){
		GUI.skin.label.fontSize = 20;
		GUI.Label (new Rect (Screen.width / 2 - 200, 20, 500, 70), "You got the <color=#FF0000><b>wrong size</b></color> but at the <color=#40FF00><b>correct place</b></color>");
		WaitTime();
	}
	if(WrongSizeWrongPlace == true && count <= 4 ){
		GUI.skin.label.fontSize = 20;
		GUI.Label (new Rect (Screen.width / 2 - 200, 20, 500, 70), "You got the <color=#FF0000><b>wrong size</b></color> and the <color=#FF0000><b>wrong place</b></color>");
		WaitTime();
	}
	if(showInfoFind == true){
		GUI.skin.label.fontSize = 20;
		GUI.Label (new Rect (Screen.width / 2 - 200, 20, 500, 90), "To bad. You couldn't find the correct location of the organ. It has been added to the puzzle, try again with the next organ.");
		WaitTimeLong();
	}
}

function WaitTime(){
	yield WaitForSeconds (2);
	CorrectSizeWrongPlace = false;
	WrongSizeCorrectPlace = false;
	WrongSizeWrongPlace = false;
}
function WaitTimeLong(){
	yield WaitForSeconds (3.5);
	showInfoFind = false;
}