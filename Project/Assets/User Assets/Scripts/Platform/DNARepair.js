#pragma strict
function Update(){
	transform.Rotate(0, Time.deltaTime *100, 0);
}

function OnCollisionEnter(hit: Collision){	
	if(hit.gameObject.tag == "Wall"){
		Destroy(this.gameObject);	
	}	
}	