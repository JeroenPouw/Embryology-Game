    #pragma strict
   
function Update () {  
    transform.position = Camera.main.transform.position + Vector3(0,0,0) + Camera.main.transform.forward * 1;
    transform.rotation = Camera.main.transform.rotation;
}