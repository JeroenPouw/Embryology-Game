
@script ExecuteInEditMode()

function OnGUI()
{
	// Make a background box
	//GUI.Box(Rect (10,10,400,110), "select a rifleman, then click \"Move\", and click anywhere on the ground\nWASD or cursor keys to move the camera, mouse wheel to zoom\nhold the middle mouse button and drag to rotate the camera");

	GUI.Label(Rect(10,10,200,50), "WASD to move the camera\nmouse wheel to zoom\ncursor keys to move the box");
	GUI.Label(Rect(10,90,200,250), "Note: My game is a turn-based strategy game so it needs to reset the fog all in one go (at the end of every turn). This would be different from an RTS game where the fog in recently visited places would reset one after the other.");
}
