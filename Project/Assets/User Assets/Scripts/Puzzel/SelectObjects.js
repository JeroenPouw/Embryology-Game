#pragma strict
var dragObjectScript : DragObject;
static var mouseDownL : boolean = false;
static var mouseDownR : boolean = false;

var currentObject : GameObject;
var shaderCount : int = 0;

var layerObjects : GameObject[];
var layerRenderCount : int = 0;
var objectSelected : boolean = false;

var correctAnswerSound : AudioClip;
var playCorrectSound : boolean = false;

function Update () {
	MouseInput();
	if(playCorrectSound == true){
		audio.PlayOneShot(correctAnswerSound);
		playCorrectSound = false;
	}
}

function MouseInput(){
    if(Input.GetButtonDown("Fire1") && !mouseDownL && currentObject == null && Time.timeScale != 0){
    	mouseDownL = true;
		var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit : RaycastHit;
		var layerMask = 1 << 18;
		if(Physics.Raycast(ray, hit, 100, layerMask)){
			var rangeOfRenders = hit.transform.renderer.materials.Length;
			hit.transform.gameObject.layer = 19;
			for(var i = 0; i < rangeOfRenders; i++){
				shaderCount++;
				currentObject = hit.transform.gameObject;
				hit.transform.renderer.materials[i].shader = Shader.Find("Self-Illumin/Outlined Diffuse");
			}
			objectSelected = true;
			return hit;
		}
		
	}
	if(Input.GetButtonDown("Fire1") && !mouseDownL && currentObject != null && Time.timeScale != 0){
		for(var d = shaderCount; d > 0; d--){
				currentObject.transform.renderer.materials[d-1].shader = Shader.Find("Diffuse");
			}
		if(currentObject.layer == 19){
			currentObject.layer = 18;
			objectSelected = false;
		}
    	mouseDownL = true;
		var rayAgain : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hitAgain : RaycastHit;
		var layerMaskAgain = 1 << 18;
		if(Physics.Raycast(rayAgain, hitAgain, 100, layerMaskAgain)){
			var rangeOfRendersAgain = hitAgain.transform.renderer.materials.Length;
			hitAgain.transform.gameObject.layer = 19;
			shaderCount = 0;
			for(var r = 0; r < rangeOfRendersAgain; r++){ 
				shaderCount++;
				currentObject = hitAgain.transform.gameObject;
				hitAgain.transform.renderer.materials[r].shader = Shader.Find("Self-Illumin/Outlined Diffuse");
			}
			objectSelected = true;
			return hitAgain;
		}
		
	}
	if (Input.GetButtonUp("Fire1")){
		mouseDownL = false;
	}
	if (Input.GetButtonUp("Fire2")){
		mouseDownR = false;
	}
	
}

function OnGUI(){
	if(currentObject != null && currentObject.name == "Alimentary_canal" && objectSelected == true){
		GUI.Label (new Rect (Screen.width - 300, 80, 250, 70), "The alimentary canal is currently selected");
	}
	if(currentObject != null && currentObject.name == "Notochord" && objectSelected == true){
		GUI.Label (new Rect (Screen.width - 300, 80, 250, 70), "The notochord is currently selected");
	}
	if(currentObject != null && currentObject.name == "Coelom" && objectSelected == true){
		GUI.Label (new Rect (Screen.width - 300, 80, 250, 70), "The coelom is currently selected");
	}
	if(currentObject != null && currentObject.name == "Heart" && objectSelected == true){
		GUI.Label (new Rect (Screen.width - 300, 80, 250, 70), "The heart is currently selected");
	}
	if(currentObject != null && currentObject.name == "LensPlacodeOpticVesicle" && objectSelected == true){
		GUI.Label (new Rect (Screen.width - 300, 80, 250, 70), "The lens placode and optic vesicle are currently selected");
	}
	if(currentObject != null && currentObject.name == "Liver" && objectSelected == true){
		GUI.Label (new Rect (Screen.width - 300, 80, 250, 70), "The liver is currently selected");
	}
	if(currentObject != null && currentObject.name == "NeuralTube" && objectSelected == true){
		GUI.Label (new Rect (Screen.width - 300, 80, 250, 70), "The neuraltube is currently selected");
	}
	if(currentObject != null && currentObject.name == "OticVesicle" && objectSelected == true){
		GUI.Label (new Rect (Screen.width - 300, 80, 250, 70), "The otic vesicle is currently selected");
	}
	if(currentObject != null && currentObject.name == "RathkesPouch" && objectSelected == true){
		GUI.Label (new Rect (Screen.width - 300, 80, 250, 70), "The rathkes pouch is currently selected");
	}
	if(currentObject != null && currentObject.name == "RespiratoryBud" && objectSelected == true){
		GUI.Label (new Rect (Screen.width - 300, 80, 250, 70), "The respiratory bud is currently selected");
	}
	if(currentObject != null && currentObject.name == "Skin" && objectSelected == true){
		GUI.Label (new Rect (Screen.width - 300, 80, 250, 70), "The skin is currently selected");
	}
	if(currentObject != null && currentObject.name == "Somites" && objectSelected == true){
		GUI.Label (new Rect (Screen.width - 300, 80, 250, 70), "The somites is currently selected");
	}
	if(currentObject != null && currentObject.name == "ThyroidGland" && objectSelected == true){
		GUI.Label (new Rect (Screen.width - 300, 80, 250, 70), "The thyroid gland is currently selected");
	}
	if(currentObject != null && currentObject.name == "UrogenitalRidge" && objectSelected == true){
		GUI.Label (new Rect (Screen.width - 300, 80, 250, 70), "The urogenital ridge is currently selected");
	}
	if(currentObject != null && currentObject.name == "Veins" && objectSelected == true){
		GUI.Label (new Rect (Screen.width - 300, 80, 250, 70), "The veins are currently selected");
	}
	if(currentObject != null && currentObject.name == "VentralDorsalPancreas" && objectSelected == true){
		GUI.Label (new Rect (Screen.width - 300, 80, 250, 70), "The ventral and dorsal pancreas are currently selected");
	}
	if(currentObject != null && currentObject.name == "VitellineDuct" && objectSelected == true){
		GUI.Label (new Rect (Screen.width - 300, 80, 250, 70), "The vitelline duct is currently selected");
	}
	if(GUI.Button (new Rect(Screen.width - 400, 20, 180, 50), "Transparent") && currentObject != null){
		for(var e = shaderCount; e > 0; e--){
				currentObject.transform.renderer.materials[e-1].shader = Shader.Find("Transparent/Diffuse");
				currentObject.transform.renderer.materials[e-1].color.a = 0.5;
			}
		currentObject.layer = 20;
		shaderCount = 0;
	}
	if(GUI.Button (new Rect(Screen.width - 200, 20, 180, 50), "Show All")){
		layerObjects = FindGameObjectsWithLayer(20);
		if(layerObjects != null){
			for(var l = 0; l < layerObjects.length; l++){
				var mats = layerObjects[l].transform.renderer.materials.Length;
				var arrayObjects = layerObjects[l];
				arrayObjects.layer = 18;
					while(layerRenderCount < mats){
					 	arrayObjects.transform.renderer.materials[layerRenderCount].shader = Shader.Find("Diffuse");
					 	layerRenderCount++;
					}
					if(layerRenderCount == mats){
						layerRenderCount = 0;
					}
				}
			}
	}
}
function FindGameObjectsWithLayer(layer : int) : GameObject[] {
    var goArray = FindObjectsOfType(GameObject);
    var goList = new System.Collections.Generic.List.<GameObject>();
    for (var i = 0; i < goArray.Length; i++) {
    	if (goArray[i].layer == layer) {
  		  goList.Add(goArray[i]);
    	}
    }
    if(goList.Count == 0) {
    	return null;
    }
    return goList.ToArray();
}