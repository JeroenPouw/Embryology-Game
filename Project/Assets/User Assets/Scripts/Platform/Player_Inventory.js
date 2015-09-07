#pragma strict

//Items
static var itemID : String[] = ["Ventral&DorsalPancreas", "VitellineDuct", "RespiratoyBud", 
								"ThyroidGland", "Lever", "Coelom", "Heart", 
								"Veins", "Somites", "MesonephrosMesonphericDuctGonodalRidge", 
								"LensPlacodeOpticVesticle", "OticVesicle", 
								"RathesPouch", "Skin", "NeuralTubeNerves"];  // item id van elk object
static var itemPlayersAmount : int[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // aantal van elk object
static var itemTexture = new Texture[Player_Inventory.itemID.length];

function Start () {
var textures : Object[] = Resources.LoadAll("ObjectsIcons", Texture2D); // laad alle textures en stop ze in de var textures
	for (var i = 0; i < textures.length; i++)
	{
    	itemTexture[i] = textures[i];
	}
}
