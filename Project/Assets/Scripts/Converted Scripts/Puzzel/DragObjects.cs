﻿// Converted from UnityScript to C# at http://www.M2H.nl/files/js_to_c.php - by Mike Hergaarden
// Do test the code! You usually need to change a few small bits.

using UnityEngine;
using System.Collections;

public class DragObjects : MonoBehaviour {
	private Vector3 screenPoint;
	private Vector3 offset;
	private Vector3 curScreenPoint;
	private Vector3 curPosition;
	private Vector3 startPosition;
	
	public PuzzelItem spawnerScript;
	public RotateObjects rotatePuzzel;
	Scores scoreScript;
	public SelectObject selectScript;
	public CameraShaking shakeScript;

	
	bool  dragging = false;
	bool  wrongPlace = false;
	AudioClip falseAnswerSound;
	
	bool  CorrectSizeWrongPlace = false;
	bool  WrongSizeWrongPlace = false;
	bool  WrongSizeCorrectPlace = false;
	static bool  showInfoFind = false;
	public static int count = 5;
	GameObject correctParticle;
	
	void  Start (){	
		spawnerScript = this.gameObject.GetComponent<PuzzelItem>();
		rotatePuzzel = this.gameObject.GetComponent<RotateObjects>();
		selectScript = this.gameObject.GetComponent<SelectObject>();
		shakeScript = this.gameObject.GetComponent<CameraShaking>();
		scoreScript = this.gameObject.GetComponent<Scores> ();
		startPosition = transform.position;
	}
	
	
	void  OnMouseDown (){
		if(Time.timeScale != 0){
			screenPoint = Camera.main.WorldToScreenPoint(gameObject.transform.position);
			offset = gameObject.transform.position - Camera.main.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z));
			Cursor.visible = false;
			rotatePuzzel.enabled = false;
		}
	}
	
	void  OnMouseDrag (){
		if(Time.timeScale != 0){
			curScreenPoint = new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z);
			curPosition = Camera.main.ScreenToWorldPoint(curScreenPoint) + offset;
			transform.position = curPosition;
			dragging = true;
		}
	}
	
	void  OnMouseUp (){
		if(Time.timeScale != 0){
			Cursor.visible = true;
			rotatePuzzel.enabled = true;
			dragging = false;
			if (Input.GetMouseButtonUp(0)){
				Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
				RaycastHit hit;
				int layerMask= 1 << 17;
				int layerMaskWrong= 1 << 21;
				if (Physics.Raycast(ray, out hit, 200, layerMask) && this.transform.tag == "PuzzleObjectCorrect"){
					// Turn on renderer
					// Count up
					// Destroy these objects
					// Spawn new
					GameObject correctObjectPar = Instantiate(correctParticle, this.transform.position, Quaternion.Euler(0, 0, 0))as GameObject; 
					count = 5;
					rotatePuzzel.textFeedbackPlus();
					selectScript.playCorrectSound = true;
					GameObject currentObject = GameObject.Find(spawnerScript.sizeObjects[spawnerScript.count]);
					currentObject.GetComponent<Renderer>().enabled = true;
					currentObject.layer = 18;
					Destroy(GameObject.FindGameObjectWithTag("PuzzleObjectCorrect"));
					GameObject[] gos;
					gos = GameObject.FindGameObjectsWithTag("PuzzleObjectFalse");
					foreach(GameObject go in gos){
						Destroy(go);
					} 
					spawnerScript.count++;
					Scores.Score += 3;
					spawnerScript.SpawnObjects();
				}
				else if(Physics.Raycast(ray, out hit, 100, layerMaskWrong) && this.transform.tag == "PuzzleObjectCorrect"){
					shakeScript.Shake();
					count--;
					CorrectSizeWrongPlace = true;
					transform.position = startPosition;
					if(Scores.Score >= 1){
						Scores.Score -= 1;
						rotatePuzzel.textFeedbackMin();
						GetComponent<AudioSource>().PlayOneShot(falseAnswerSound);
					}
					else{
						Scores.Score = 0;
						rotatePuzzel.textFeedbackZero();
						GetComponent<AudioSource>().PlayOneShot(falseAnswerSound);
					}
				}
				else if(Physics.Raycast(ray, out hit, 100, layerMask) && this.transform.tag == "PuzzleObjectFalse"){
					shakeScript.Shake();
					count--;
					WrongSizeCorrectPlace = true;
					transform.position = startPosition;
					if(Scores.Score >= 1){
						Scores.Score -= 1;
						rotatePuzzel.textFeedbackMin();
						GetComponent<AudioSource>().PlayOneShot(falseAnswerSound);
					}
					else{
						Scores.Score = 0;
						rotatePuzzel.textFeedbackZero();
						GetComponent<AudioSource>().PlayOneShot(falseAnswerSound);
					}
				}
				else if(Physics.Raycast(ray, out hit, 100, layerMaskWrong) && this.transform.tag == "PuzzleObjectFalse"){
					shakeScript.Shake();
					count--;
					WrongSizeWrongPlace = true;
					transform.position = startPosition;
					if(Scores.Score >= 1){
						Scores.Score -= 1;
						rotatePuzzel.textFeedbackMin();
						GetComponent<AudioSource>().PlayOneShot(falseAnswerSound);
					}
					else{
						Scores.Score = 0;
						rotatePuzzel.textFeedbackZero();
						GetComponent<AudioSource>().PlayOneShot(falseAnswerSound);
					}
				}
				else{
					transform.position = startPosition;
				}
			}
			if(count <= 0){
				showInfoFind = true;
				GameObject cObject = GameObject.Find(spawnerScript.sizeObjects[spawnerScript.count]);
				cObject.GetComponent<Renderer>().enabled = true;
				cObject.layer = 18;
				Destroy(GameObject.FindGameObjectWithTag("PuzzleObjectCorrect"));
				GameObject[] falseObjects;
				falseObjects = GameObject.FindGameObjectsWithTag("PuzzleObjectFalse");
				foreach(GameObject go in falseObjects){
					Destroy(go);
				} 
				spawnerScript.count++;
				spawnerScript.SpawnObjects();
				count = 5;
			}
		}
	}
	void  OnGUI (){
		GUIStyle labelStyle=GUI.skin.label;
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
	
	public IEnumerator  WaitTime (){
		yield return new WaitForSeconds(2);
		CorrectSizeWrongPlace = false;
		WrongSizeCorrectPlace = false;
		WrongSizeWrongPlace = false;
	}
	public IEnumerator  WaitTimeLong (){
		yield return new WaitForSeconds (3.5f);
		showInfoFind = false;
	}
}