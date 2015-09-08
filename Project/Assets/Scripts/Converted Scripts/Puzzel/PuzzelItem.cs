// Converted from UnityScript to C# at http://www.M2H.nl/files/js_to_c.php - by Mike Hergaarden
// Do test the code! You usually need to change a few small bits.

using UnityEngine;
using System.Collections;

public class PuzzelItem : MonoBehaviour {
	
	public int count = 0;
	public string[] sizeObjects ;
	Vector3 startPosition;
	public bool endGame = false;
	public RotateObjects rotatePuzzel;
	GameObject object1 = new GameObject();
	GameObject object2 = new GameObject();
	GameObject object3 = new GameObject();
	GameObject currentObject = new GameObject();

	void  Start (){
		rotatePuzzel = gameObject.GetComponent<RotateObjects>();
		startPosition = Camera.main.ScreenToWorldPoint(new Vector3(Screen.width / 4, Screen.height / 2, 50));
		SpawnObjects();
	}
	
	public void  SpawnObjects (){
		if(count <= 14){
			object1 = Instantiate(Resources.Load("PuzzelPrefabs/" + sizeObjects[count] + "_size1")) as GameObject;
			object1.transform.parent = this.transform;
			object1.transform.localPosition = startPosition + new Vector3(-40, 0, 0);
			
			object2 = Instantiate(Resources.Load("PuzzelPrefabs/" + sizeObjects[count] + "_size2")) as GameObject;
			object2.transform.parent = this.transform;
			object2.transform.localPosition = startPosition;
			
			object3 = Instantiate(Resources.Load("PuzzelPrefabs/" + sizeObjects[count] + "_size3")) as GameObject;
			object3.transform.parent = this.transform;
			object3.transform.localPosition = startPosition + new Vector3(50, 0, 0);
			
			currentObject = GameObject.Find(sizeObjects[count]);
			currentObject.layer = 17;
		}
		else{
			endGame = true;
		}
	}
	
}