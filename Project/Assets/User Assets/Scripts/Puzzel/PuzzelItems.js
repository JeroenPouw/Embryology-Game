#pragma strict

var sizeObjects:String[];
var count:int = 0;
var startPosition : Vector3;
var endGame : boolean = false;
var rotatePuzzel : RotateObject;
rotatePuzzel = FindObjectOfType(RotateObject);

function Start(){
	startPosition = Camera.main.ScreenToWorldPoint(Vector3(Screen.width / 4, Screen.height / 2, 50));
	SpawnObjects();
}

function SpawnObjects(){
		if(count <= 14){
			var object1 : GameObject = Instantiate(Resources.Load("PuzzelPrefabs/" + sizeObjects[count] + "_size1"));
			object1.transform.parent = this.transform;
			object1.transform.localPosition = startPosition + Vector3(-40, 0, 0);
			
			var object2 : GameObject = Instantiate(Resources.Load("PuzzelPrefabs/" + sizeObjects[count] + "_size2"));
			object2.transform.parent = this.transform;
			object2.transform.localPosition = startPosition;
			
			var object3 : GameObject = Instantiate(Resources.Load("PuzzelPrefabs/" + sizeObjects[count] + "_size3"));
			object3.transform.parent = this.transform;
			object3.transform.localPosition = startPosition + Vector3(50, 0, 0);
			
			var currentObject : GameObject = GameObject.Find(sizeObjects[count]);
			currentObject.layer = 17;
		}
		else{
			endGame = true;
		}
}

