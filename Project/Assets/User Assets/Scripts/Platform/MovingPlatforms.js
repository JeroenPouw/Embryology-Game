var amplitude: float = 5; // platform excursion (+/- 5 units, in this case)
var speed: float = 0.2; // movements per second
var direction: Vector3 = Vector3.forward; // direction relative to the platform
private var p0: Vector3;
var waterLeftParticle : GameObject;
private var currentPos: Vector3;
     
function Start(){
	currentPos = transform.position;
    p0 = transform.position;
    var waterLeftPar:GameObject = Instantiate(waterLeftParticle, this.transform.position, Quaternion.Euler(0, 0, 0)); 
    while (true){
	    // convert direction to local space
	    var dir = transform.TransformDirection(direction);
	    // set platform position:
	    transform.position = p0+amplitude*dir*Mathf.Sin(6.28*speed*Time.time);
	    waterLeftPar.gameObject.transform.LookAt(transform.position);
	    yield; // let Unity free till the next frame
    }
}
