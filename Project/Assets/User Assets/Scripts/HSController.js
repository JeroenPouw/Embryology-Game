private var secretKey="mySecretKey"; // Edit this value and make sure it's the same as the one stored on the server
var addScoreUrl="http://embryogame.hfrc.nl/dbgame/addscore.php?"; //be sure to add a ? to your url
var highscoreUrl="http://embryogame.hfrc.nl/dbgame/display.php";    
var userName : String = "";
var scoreScript : Score;
scoreScript = FindObjectOfType(Score); 
private var scores : String[] = new String[10];
private var names : String[] = new String[10];

var showScore : boolean = false;
var statColor:Color = Color.magenta;
var formText = "";

var name1 : String;
var name2 : String;
var name3 : String;
var name4 : String;
var name5 : String;
var name6 : String;
var name7 : String;
var name8 : String;
var name9 : String;
var name10 : String;

var score1 : String;
var score2 : String;
var score3 : String;
var score4 : String;
var score5 : String;
var score6 : String;
var score7 : String;
var score8 : String;
var score9 : String;
var score10 : String;

var loadedSucces : boolean = false;

function Start() {

}
 
function postScore(name, score) {
    //This connects to a server side php script that will add the name and score to a MySQL DB.
    //Supply it with a string representing the players name and the players score.
   	var hash= md5functions.Md5Sum(name + score + secretKey);  
    var highscore_url = addScoreUrl + "name=" + WWW.EscapeURL(name) + "&score=" + score + "&hash=" + hash;
 
    // Post the URL to the site and create a download object to get the result.
    hs_post = WWW(highscore_url);
    yield hs_post; // Wait until the download is done
    if(hs_post.error) {
        print("There was an error posting the high score: " + hs_post.error);
    }
    getScores();
}
 
// Get the scores from the MySQL DB to display in a GUIText.
function getScores() {
    gameObject.guiText.text = "Loading Scores";
    hs_get = WWW(highscoreUrl);
    yield hs_get;
    if(hs_get.error) {
    	print("There was an error getting the high score: " + hs_get.error);
    	loadedSucces = false;
    } else {
       	formText = hs_get.text;
		var split : String[] = formText.Split("\n"[0]);
		for(i=0; i < split.Length -1; i++){
			var separate : String[] = split[i].Split(","[0]);
			names[i] = separate[0];
			scores[i] = separate[1];
		}
		for (i = 0; i < names.length; i++){
				Debug.Log(names[i]);
			 	name1 = names[0];
			 	name2 = names[1];
			 	name3 = names[2];
				name4 = names[3];
				name5 = names[4];
			 	name6 = names[5];
				name7 = names[6];
				name8 = names[7];
			 	name9 = names[8];
				name10 = names[9];
		}
		for (i = 0; i < scores.length; i++){
				score1 = scores[0];
			 	score2 = scores[1];
			 	score3 = scores[2];
				score4 = scores[3];
				score5 = scores[4];
			 	score6 = scores[5];
				score7 = scores[6];
				score8 = scores[7];
			 	score9 = scores[8];
				score10 = scores[9];
		}
		loadedSucces = true;
    }
    showScore = true;
}

function OnGUI(){
	GUI.color = statColor;
	if(showScore == false){
		GUI.Window (0, new Rect (Screen.width / 2 -200, Screen.height / 4, 410, 250), NameWindow, "Fill in your name");
	}
	if(showScore == true && loadedSucces == true){
		GUI.Window (0, new Rect (Screen.width / 2 -200, Screen.height / 4, 400, 370), ScoreWindow, "High scores:");
	}
}

function NameWindow() {
	var labelStyle=GUI.skin.label;
	GUI.skin.label.fontSize = 14;
	GUI.color = statColor;
	GUI.Label (new Rect (10, 20, 400, 60), "You score is: " + scoreScript.Score + " fill in your name to enter the high score table.");
	GUI.Label (new Rect (10, 60, 130, 100), "Username:");
	userName = GUI.TextField(new Rect(10, 80, 390, 30), userName);
	if(GUI.Button (new Rect(110, 160, 180, 50), "Confirm")){
		postScore(userName, scoreScript.Score);
	}
}

function ScoreWindow() {
	GUI.color = statColor;
	GUI.Label (new Rect (10, 20, 130, 30), "Place");
	GUI.Label (new Rect (130, 20, 130, 30), "Name");
	GUI.Label (new Rect (260, 20, 130, 30), "Score");
	GUI.Label (new Rect (10, 45, 130, 30), "1");
	GUI.Label (new Rect (10, 70, 130, 30), "2");
	GUI.Label (new Rect (10, 95, 130, 30), "3");
	GUI.Label (new Rect (10, 120, 130, 30), "4");
	GUI.Label (new Rect (10, 145, 130, 30), "5");
	GUI.Label (new Rect (10, 170, 130, 30), "6");
	GUI.Label (new Rect (10, 195, 130, 30), "7");
	GUI.Label (new Rect (10, 220, 130, 30), "8");
	GUI.Label (new Rect (10, 245, 130, 30), "9");
	GUI.Label (new Rect (10, 270, 130, 30), "10");
	GUI.Label(new Rect(130,45,130,30),name1);
	GUI.Label(new Rect(130,70,130,30),name2);
	GUI.Label(new Rect(130,95,130,30),name3);
	GUI.Label(new Rect(130,120,130,30),name4);
	GUI.Label(new Rect(130,145,130,30),name5);
	GUI.Label(new Rect(130,170,130,30),name6);
	GUI.Label(new Rect(130,195,130,30),name7);
	GUI.Label(new Rect(130,220,130,30),name8);
	GUI.Label(new Rect(130,245,130,30),name9);
	GUI.Label(new Rect(130,270,130,30),name10);
	GUI.Label(new Rect(260,45,130,30),score1);
	GUI.Label(new Rect(260,70,130,30),score2);
	GUI.Label(new Rect(260,95,130,30),score3);
	GUI.Label(new Rect(260,120,130,30),score4);
	GUI.Label(new Rect(260,145,130,30),score5);
	GUI.Label(new Rect(260,170,130,30),score6);
	GUI.Label(new Rect(260,195,130,30),score7);
	GUI.Label(new Rect(260,220,130,30),score8);
	GUI.Label(new Rect(260,245,130,30),score9);
	GUI.Label(new Rect(260,270,130,30),score10);
	if(GUI.Button (new Rect(110, 310, 180, 50), "Main Menu")){
		Application.LoadLevel(0);
		loadedSucces = false;
	}
}