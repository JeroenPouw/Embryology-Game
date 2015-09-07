//How quickly to rotate the object.
var sensitivityX:float = 15;
var sensitivityY:float = 15;
var mousePressed : boolean = false;
//Camera that acts as a point of view to rotate the object relative to.
var referenceCamera:Transform;

var textContainerPlus : GameObject;
var textContainerMin : GameObject;
var textContainerZero : GameObject;

//The script in Start() is executed before Update(), so we can use it to
//doublecheck our variables have valid values before we try to run the script in Update().
function Start() {
//Ensure the referenceCamera variable has a valid value before letting this script run.
//If the user didn't set a camera manually, try to automatically assign the scene's Main Camera.
	if (!referenceCamera) {
		if (!Camera.main) {
			Debug.LogError("No Camera with 'Main Camera' as its tag was found. Please either assign a Camera to this script, or change a Camera's tag to 'Main Camera'.");
	      	Destroy(this);
	     	return;
	   	}
	    referenceCamera = Camera.main.transform;
	}
}
     
//Update() is called once every frame, and should be used to run script that
//should be doing something constantly. In this case, we potentially want to
//rotate the object constantly if the user is always moving the mouse.
function Update () {
	if(Time.timeScale != 0){
		var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit : RaycastHit;
			if(Physics.Raycast(ray,hit)){
				if(hit.collider.tag == "RotatePuzzel" && Input.GetMouseButton(0)){
				mousePressed = true;
				}
			}
			if(mousePressed == true){
	   			//Get how far the mouse has moved by using the Input.GetAxis().
	            var rotationX:float = Input.GetAxis("Mouse X") * sensitivityX;
	            var rotationY:float = Input.GetAxis("Mouse Y") * sensitivityY;
	     
	            //Rotate the object around the camera's "up" axis, and the camera's "right" axis.
	            transform.RotateAroundLocal( referenceCamera.up         , -Mathf.Deg2Rad * rotationX );
	            transform.RotateAroundLocal( referenceCamera.right      ,  Mathf.Deg2Rad * rotationY );
	            	
			}
			if(Input.GetMouseButtonUp(0)){
				mousePressed = false;
			}
	}
} 		
function textFeedbackPlus(){
    textContainerPlus.gameObject.SetActive(true);
    WaitTime();
}
function textFeedbackMin(){
    textContainerMin.gameObject.SetActive(true);
    yield WaitForSeconds(3.0); // Wait for 3 seconds then destroy the gameObject and its children
    textContainerMin.gameObject.SetActive(false);
}
function textFeedbackZero(){
    textContainerZero.gameObject.SetActive(true);
    yield WaitForSeconds(3.0); // Wait for 3 seconds then destroy the gameObject and its children
    textContainerZero.gameObject.SetActive(false);
}

function WaitTime(){
	yield WaitForSeconds(3.0); // Wait for 3 seconds then destroy the gameObject and its children
	textContainerPlus.gameObject.SetActive(false);
}