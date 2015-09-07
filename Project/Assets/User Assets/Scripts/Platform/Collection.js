#pragma strict
var questionSkin : GUISkin;
var TextSize : Vector2 = new Vector2(500, 250);
var pickUpVitellineDuct: boolean = false;
var pickUpRespiratoyBud: boolean = false;
var pickUpThyroid: boolean = false;
var pickUpLever: boolean = false;
var pickUpCoelom: boolean = false;
var pickUpHeart: boolean = false;
var pickUpVeins: boolean = false;
var pickUpSomites: boolean = false;
var pickUpMesonephros: boolean = false;
var pickUpLens: boolean = false;
var pickUpOtic: boolean = false;
var pickUpRathesPouch: boolean = false;
var pickUpSkin: boolean = false;
var pickUpNeural: boolean = false;
var pickupObject : AudioClip;
var foundObjectParticle : GameObject;

function Update () {
	WaitTime();
}

function OnTriggerEnter (col : Collider)
{
    if (col.gameObject.name == "Ventral&DorsalPancreas")
    {
    	Instantiate(foundObjectParticle, this.gameObject.transform.position, Quaternion.Euler(270, 0, 0));
    	audio.PlayOneShot(pickupObject);
        Player_Inventory.itemPlayersAmount[0] += 1; 
        Inventory_Add_Item.InventoryNewItemAdded = 0;
        Destroy(col.gameObject);
        
    }
	if (col.gameObject.name == "VitellineDuct")
    {
    	Instantiate(foundObjectParticle, this.gameObject.transform.position, Quaternion.Euler(270, 0, 0));
    	audio.PlayOneShot(pickupObject);
        Player_Inventory.itemPlayersAmount[1] += 1;
        Inventory_Add_Item.InventoryNewItemAdded = 1;
        pickUpVitellineDuct = true;
        Destroy(col.gameObject);
    }
    if (col.gameObject.name == "RespiratoyBud")
    {
    	Instantiate(foundObjectParticle, this.gameObject.transform.position, Quaternion.Euler(270, 0, 0));
    	audio.PlayOneShot(pickupObject);
        Player_Inventory.itemPlayersAmount[2] += 1;
        Inventory_Add_Item.InventoryNewItemAdded = 2;
        pickUpRespiratoyBud = true;
        Destroy(col.gameObject);
    }
    if (col.gameObject.name == "ThyroidGland")
    {
    	Instantiate(foundObjectParticle, this.gameObject.transform.position, Quaternion.Euler(270, 0, 0));
    	audio.PlayOneShot(pickupObject);
        Player_Inventory.itemPlayersAmount[3] += 1;
        Inventory_Add_Item.InventoryNewItemAdded = 3;
        pickUpThyroid = true;
        Destroy(col.gameObject);
    }
    if (col.gameObject.name == "Lever")
    {
    	Instantiate(foundObjectParticle, this.gameObject.transform.position, Quaternion.Euler(270, 0, 0));
    	audio.PlayOneShot(pickupObject);
        Player_Inventory.itemPlayersAmount[4] += 1;
        Inventory_Add_Item.InventoryNewItemAdded = 4;
        pickUpLever = true;
        Destroy(col.gameObject);
    }
    if (col.gameObject.name == "Coelom")
    {
    	Instantiate(foundObjectParticle, this.gameObject.transform.position, Quaternion.Euler(270, 0, 0));
        Player_Inventory.itemPlayersAmount[5] += 1;
        Inventory_Add_Item.InventoryNewItemAdded = 5;
        pickUpCoelom = true;
        Destroy(col.gameObject);
    }
    if (col.gameObject.name == "Heart")
    {
    	Instantiate(foundObjectParticle, this.gameObject.transform.position, Quaternion.Euler(270, 0, 0));
    	audio.PlayOneShot(pickupObject);
        Player_Inventory.itemPlayersAmount[6] += 1;
        Inventory_Add_Item.InventoryNewItemAdded = 6;
        pickUpHeart = true;
        Destroy(col.gameObject);
    }
    if (col.gameObject.name == "Veins")
    {
    	Instantiate(foundObjectParticle, this.gameObject.transform.position, Quaternion.Euler(270, 0, 0));
    	audio.PlayOneShot(pickupObject);
        Player_Inventory.itemPlayersAmount[7] += 1;
        Inventory_Add_Item.InventoryNewItemAdded = 7;
        pickUpVeins = true;
        Destroy(col.gameObject);
    }
    if (col.gameObject.name == "Somites")
    {
    	Instantiate(foundObjectParticle, this.gameObject.transform.position, Quaternion.Euler(270, 0, 0));
    	audio.PlayOneShot(pickupObject);
        Player_Inventory.itemPlayersAmount[8] += 1;
        Inventory_Add_Item.InventoryNewItemAdded = 8;
        pickUpSomites = true;
        Destroy(col.gameObject);
    }
    if (col.gameObject.name == "MesonephrosMesonphericDuctGonodalRidge")
    {
    	Instantiate(foundObjectParticle, this.gameObject.transform.position, Quaternion.Euler(270, 0, 0));
    	audio.PlayOneShot(pickupObject);
        Player_Inventory.itemPlayersAmount[9] += 1;
        Inventory_Add_Item.InventoryNewItemAdded = 9;
        pickUpMesonephros = true;
        Destroy(col.gameObject);
    }
    if (col.gameObject.name == "LensPlacodeOpticVesticle")
    {
    	Instantiate(foundObjectParticle, this.gameObject.transform.position, Quaternion.Euler(270, 0, 0));
    	audio.PlayOneShot(pickupObject);
        Player_Inventory.itemPlayersAmount[10] += 1;
        Inventory_Add_Item.InventoryNewItemAdded = 10;
        pickUpLens = true;
        Destroy(col.gameObject);
    }
    if (col.gameObject.name == "OticVesicle")
    {
    	Instantiate(foundObjectParticle, this.gameObject.transform.position, Quaternion.Euler(270, 0, 0));
    	audio.PlayOneShot(pickupObject);
        Player_Inventory.itemPlayersAmount[11] += 1;
        Inventory_Add_Item.InventoryNewItemAdded = 11;
        pickUpOtic = true;
        Destroy(col.gameObject);
    }
    if (col.gameObject.name == "RathesPouch")
    {
    	Instantiate(foundObjectParticle, this.gameObject.transform.position, Quaternion.Euler(270, 0, 0));
    	audio.PlayOneShot(pickupObject);
        Player_Inventory.itemPlayersAmount[12] += 1;
        Inventory_Add_Item.InventoryNewItemAdded = 12;
        pickUpRathesPouch = true;
        Destroy(col.gameObject);
    }
    if (col.gameObject.name == "Skin")
    {
    	Instantiate(foundObjectParticle, this.gameObject.transform.position, Quaternion.Euler(270, 0, 0));
    	audio.PlayOneShot(pickupObject);
        Player_Inventory.itemPlayersAmount[13] += 1;
        Inventory_Add_Item.InventoryNewItemAdded = 13;
        pickUpSkin = true;
        Destroy(col.gameObject);
    }
    if (col.gameObject.name == "NeuralTubeNerves")
    {
    	Instantiate(foundObjectParticle, this.gameObject.transform.position, Quaternion.Euler(270, 0, 0));
    	audio.PlayOneShot(pickupObject);
        Player_Inventory.itemPlayersAmount[14] += 1;
        Inventory_Add_Item.InventoryNewItemAdded = 14;
        pickUpNeural = true;
        Destroy(col.gameObject);
    }
}
function OnGUI(){
	//GUI.skin = questionSkin;
	var labelStyle=GUI.skin.label;
	GUI.skin.label.fontSize = 20;
	if(pickUpVitellineDuct == true){
		GUILayout.BeginArea (Rect (Screen.width * 0.4, Screen.height - Screen.height + 50, TextSize.x,TextSize.y));  
		var VitellineDuctPickUp = "The Vitelinne Duct has been added to your inventory.";
	    GUILayout.Label(VitellineDuctPickUp); 
	    GUILayout.EndArea();
	}
	if(pickUpRespiratoyBud == true){
		GUILayout.BeginArea (Rect (Screen.width * 0.4, Screen.height - Screen.height + 50, TextSize.x,TextSize.y));  
		var RespiratoryPickUp = "The Respiratory Bud has been added to your inventory.";
	    GUILayout.Label(RespiratoryPickUp); 
	    GUILayout.EndArea();
	}
	if(pickUpThyroid == true){
		GUILayout.BeginArea (Rect (Screen.width * 0.4, Screen.height - Screen.height + 50, TextSize.x,TextSize.y));  
		var ThyroidPickUp = "The Thyroid Gland has been added to your inventory.";
	    GUILayout.Label(ThyroidPickUp); 
	    GUILayout.EndArea();
	} 
	if(pickUpLever == true){
		GUILayout.BeginArea (Rect (Screen.width * 0.4, Screen.height - Screen.height + 50, TextSize.x,TextSize.y));  
		var LeverPickUp = "The Liver has been added to your inventory.";
	    GUILayout.Label(LeverPickUp); 
	    GUILayout.EndArea();
	} 
	if(pickUpCoelom == true){
		GUILayout.BeginArea (Rect (Screen.width * 0.4, Screen.height - Screen.height + 50, TextSize.x,TextSize.y));  
		var CoelomPickUp = "The Coelom has been added to your inventory.";
	    GUILayout.Label(CoelomPickUp); 
	    GUILayout.EndArea();
	} 
	if(pickUpHeart == true){
		GUILayout.BeginArea (Rect (Screen.width * 0.4, Screen.height - Screen.height + 50, TextSize.x,TextSize.y));  
		var HeartPickUp = "The Heart has been added to your inventory.";
	    GUILayout.Label(HeartPickUp); 
	    GUILayout.EndArea();
	} 
	if(pickUpVeins == true){
		GUILayout.BeginArea (Rect (Screen.width * 0.4, Screen.height - Screen.height + 50, TextSize.x,TextSize.y));  
		var VeinsPickUp = "The Arteries and Veins have been added to your inventory.";
	    GUILayout.Label(VeinsPickUp); 
	    GUILayout.EndArea();
	} 
	if(pickUpSomites == true){
		GUILayout.BeginArea (Rect (Screen.width * 0.4, Screen.height - Screen.height + 50, TextSize.x,TextSize.y));  
		var SomitesPickUp = "The Somites has been added to your inventory.";
	    GUILayout.Label(SomitesPickUp); 
	    GUILayout.EndArea();
	} 
	if(pickUpMesonephros == true){
		GUILayout.BeginArea (Rect (Screen.width * 0.4, Screen.height - Screen.height + 50, TextSize.x,TextSize.y));  
		var MesonephrosPickUp = "The Urogenital ridge has been added to your inventory.";
	    GUILayout.Label(MesonephrosPickUp); 
	    GUILayout.EndArea();
	} 
	if(pickUpLens == true){
		GUILayout.BeginArea (Rect (Screen.width * 0.4, Screen.height - Screen.height + 50, TextSize.x,TextSize.y));  
		var LensPickUp = "The Eye has been added to your inventory.";
	    GUILayout.Label(LensPickUp); 
	    GUILayout.EndArea();
	} 
	if(pickUpOtic == true){
		GUILayout.BeginArea (Rect (Screen.width * 0.4, Screen.height - Screen.height + 50, TextSize.x,TextSize.y));  
		var OticPickUp = "The Otic Vesicle has been added to your inventory.";
	    GUILayout.Label(OticPickUp); 
	    GUILayout.EndArea();
	} 
	if(pickUpRathesPouch == true){
		GUILayout.BeginArea (Rect (Screen.width * 0.4, Screen.height - Screen.height + 50, TextSize.x,TextSize.y));  
		var RathesPickUp = "The Rathe's Pouch has been added to your inventory.";
	    GUILayout.Label(RathesPickUp); 
	    GUILayout.EndArea();
	} 
	if(pickUpSkin == true){
		GUILayout.BeginArea (Rect (Screen.width * 0.4, Screen.height - Screen.height + 50, TextSize.x,TextSize.y));  
		var SkinPickUp = "The Skin has been added to your inventory.";
	    GUILayout.Label(SkinPickUp); 
	    GUILayout.EndArea();
	} 
	if(pickUpNeural == true){
		GUILayout.BeginArea (Rect (Screen.width * 0.4, Screen.height - Screen.height + 50, TextSize.x,TextSize.y));  
		var NeuralPickUp = "The Nervous system has been added to your inventory.";
	    GUILayout.Label(NeuralPickUp); 
	    GUILayout.EndArea();
	}  
}  
 
function WaitTime(){ 
	if(pickUpVitellineDuct == true){
		yield WaitForSeconds(2);
		pickUpVitellineDuct = false;
	}
	if(pickUpRespiratoyBud == true){
		yield WaitForSeconds(2);
		pickUpRespiratoyBud = false;
	}
	if(pickUpThyroid == true){
		yield WaitForSeconds(2);
		pickUpThyroid = false;
	}
	if(pickUpLever == true){
		yield WaitForSeconds(2);
		pickUpLever = false;
	}
	if(pickUpCoelom == true){
		yield WaitForSeconds(2);
		pickUpCoelom = false;
	}
	if(pickUpHeart == true){
		yield WaitForSeconds(2);
		pickUpHeart = false;
	}
	if(pickUpVeins == true){
		yield WaitForSeconds(2);
		pickUpVeins = false;
	}
	if(pickUpSomites == true){
		yield WaitForSeconds(2);
		pickUpSomites = false;
	}
	if(pickUpMesonephros == true){
		yield WaitForSeconds(2);
		pickUpMesonephros = false;
	}
	if(pickUpLens == true){
		yield WaitForSeconds(2);
		pickUpLens = false;
	}
	if(pickUpOtic == true){
		yield WaitForSeconds(2);
		pickUpOtic = false;
	}
	if(pickUpRathesPouch == true){
		yield WaitForSeconds(2);
		pickUpRathesPouch = false;
	}
	if(pickUpSkin == true){
		yield WaitForSeconds(2);
		pickUpSkin = false;
	}
	if(pickUpNeural == true){
		yield WaitForSeconds(2);
		pickUpNeural = false;
	}
}
