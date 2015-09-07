var skin:GUISkin;
 
private var gldepth = -0.5;
private var startTime = 0.1;
 
private var tris = 0;
private var verts = 0;
private var savedTimeScale:float;
private var pauseFilter;
var TheTextures : Player_Inventory;
var start:GameObject;
 
 
var statColor:Color = Color.yellow;

enum Page {
	None,Main,Options,Menu
}
 
private var currentPage:Page;
private var fpsarray:int[];
private var fps:float;
 
function Start() {
	fpsarray = new int[Screen.width];
	TheTextures = GetComponent(Player_Inventory);
}

static function IsDashboard() {
	return Application.platform == RuntimePlatform.OSXDashboardPlayer;
}
 
static function IsBrowser() {
	return (Application.platform == RuntimePlatform.WindowsWebPlayer ||
		Application.platform == RuntimePlatform.OSXWebPlayer);
}
 
function LateUpdate () {
	if (Input.GetKeyDown("escape")) {
		switch (currentPage) {
			case Page.None: PauseGame(); break;
			case Page.Main: if (!IsBeginning()) UnPauseGame(); break;
			default: currentPage = Page.Main;
		}
	}
}
 
function OnGUI () {
	var labelStyle=GUI.skin.label;
	GUI.skin.label.fontSize = 14;
	if (skin != null) {
		GUI.skin = skin;
	}
	if (IsGamePaused()) {
		GUI.color = statColor;
		switch (currentPage) {
			case Page.Main: PauseMenu(); break;
			case Page.Options: ShowToolbar(); break;
			case Page.Menu: ShowMenu(); break;
		}
	}	
}

private var toolbarInt:int=0;
private var toolbarStrings: String[]= ["Audio","Graphics","System"];
 
function ShowToolbar() {
	BeginPage(300,300);
	toolbarInt = GUILayout.Toolbar (toolbarInt, toolbarStrings);
	switch (toolbarInt) {
		case 0: VolumeControl(); break;
		case 2: ShowDevice(); break;
		case 1: Qualities(); QualityControl(); break;
	}
	EndPage();
}
 
function ShowMenu() {
	UnPauseGame();
	Player_Inventory.itemPlayersAmount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	Application.LoadLevel(0);
}
 
function ShowBackButton() {
	if (GUI.Button(Rect(20,Screen.height-50,50,20),"Back")) {
		currentPage = Page.Main;
	}
}
 
 
function ShowDevice() {
	GUILayout.Label ("Unity player version "+Application.unityVersion);
	GUILayout.Label("Graphics: "+SystemInfo.graphicsDeviceName+" "+
	SystemInfo.graphicsMemorySize+"MB\n"+
	SystemInfo.graphicsDeviceVersion+"\n"+
	SystemInfo.graphicsDeviceVendor);
	GUILayout.Label("Shadows: "+SystemInfo.supportsShadows);
	GUILayout.Label("Image Effects: "+SystemInfo.supportsImageEffects);
	GUILayout.Label("Render Textures: "+SystemInfo.supportsRenderTextures);
}
 
function Qualities() {
        GUILayout.Label(QualitySettings.names[QualitySettings.GetQualityLevel()]);
}
 
function QualityControl() {
	GUILayout.BeginHorizontal();
	if (GUILayout.Button("Decrease")) {
		QualitySettings.DecreaseLevel();
	}
	if (GUILayout.Button("Increase")) {
		QualitySettings.IncreaseLevel();
	}
	GUILayout.EndHorizontal();
}
 
function VolumeControl() {
	GUILayout.Label("Volume");
	AudioListener.volume = GUILayout.HorizontalSlider(AudioListener.volume,0.0,1.0);
}
 
function BeginPage(width,height) {
	GUILayout.BeginArea(Rect((Screen.width-width)/2,(Screen.height-height)/2,width,height));
}
 
function EndPage() {
	GUILayout.EndArea();
	if (currentPage != Page.Main) {
		ShowBackButton();
	}
}
 
function IsBeginning() {
	return Time.time < startTime;
}
 
 
function PauseMenu() {
	BeginPage(200,200);
	if (GUILayout.Button (IsBeginning() ? "Play" : "Continue")) {
		UnPauseGame();
 
	}
	if (GUILayout.Button ("Options")) {
		currentPage = Page.Options;
	}
	if (GUILayout.Button ("Back to menu")) {
		currentPage = Page.Menu;
	}

	EndPage();
}
 
function GetObjectStats() {
	verts = 0;
	tris = 0;
	var ob = FindObjectsOfType(GameObject);
	for (var obj in ob) {
		GetObjectStats(obj);
	}
}
 
function GetObjectStats(object) {
	var filters : Component[];
	filters = object.GetComponentsInChildren(MeshFilter);
	for( var f : MeshFilter in filters )
	{
    	tris += f.sharedMesh.triangles.Length/3;
  		verts += f.sharedMesh.vertexCount;
	}
}
 
function PauseGame() {
	savedTimeScale = Time.timeScale;
	Time.timeScale = 0;
	AudioListener.pause = true;
	if (pauseFilter) pauseFilter.enabled = true;
	currentPage = Page.Main;
}
 
function UnPauseGame() {
	Time.timeScale = savedTimeScale;
	AudioListener.pause = false;
	if (pauseFilter) pauseFilter.enabled = false;
	currentPage = Page.None;
	if (IsBeginning() && start != null) {
		start.active = true;
	}
}
 
function IsGamePaused() {
	return Time.timeScale==0;
}
 
function OnApplicationPause(pause:boolean) {
	if (IsGamePaused()) {
		AudioListener.pause = true;
	}
}