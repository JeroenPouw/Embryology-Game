var TheInventory : Inventory_GUI;
var TheTextures : Player_Inventory;
var ArrayGrid = 0;
static var InventoryNewItemAdded = -1;
var BlankIcon : Texture; 
var TheNewItem : Texture;
var loadingScript : Loading_Screen;
loadingScript = FindObjectOfType(Loading_Screen);
function Update(){
 	if(Application.loadedLevel == 1 && ArrayGrid == 4){ 
 		Loading_Screen.LoadingScreenOn = true;
		loadingScript.ChooseImg();
		WaitTimeLevel2();  
    }            
	if(Application.loadedLevel == 2 && ArrayGrid == 9){     
		Loading_Screen.LoadingScreenOn = true;
		loadingScript.ChooseImg();
		WaitTimeLevel3();  
	}  
	if(Application.loadedLevel == 3 && ArrayGrid == 14){  
		Loading_Screen.LoadingScreenOn = true;
		loadingScript.ChooseImg();
		WaitTimeLevel4();  
	}     
}
function Start () 
{
    TheInventory = GetComponent(Inventory_GUI); 
    TheTextures = GetComponent(Player_Inventory);  
    for(var i = 0; i <Player_Inventory.itemPlayersAmount.length; i++) // for loop die checkt hoeveel items er in playersAmount zit. 
    {
    	if (Player_Inventory.itemPlayersAmount[i] > 0) // kijken of een item uberhaupt een aantal heeft
    		{ 
    		 	TheInventory.Grids[i].image = TheTextures.itemTexture[i];  // zorgt ervoor dat de juiste image bij de correcte ID komt.
    		}
    		
    }
}
function newItem () 
{
    if (Inventory_Add_Item.InventoryNewItemAdded > -1) // zodra je iets opraakt wordt deze waarde in collection.js hoger als -1 gezet.
    {
        TheNewItem = TheTextures.itemTexture[Inventory_Add_Item.InventoryNewItemAdded]; // haalt de juiste afbeelding uit de itemTexture array uit de player_inventory script.
        if (ArrayGrid < TheInventory.Grids.length) 
        {	 
            if (TheInventory.Grids[ArrayGrid].image == BlankIcon) // als grid gelijk is aan blankicon, dan het item toevoegen
            {
                TheInventory.Grids[ArrayGrid].image = TheNewItem;
                ArrayGrid = 0;
                Inventory_Add_Item.InventoryNewItemAdded = -1;
            }
            else if (TheInventory.Grids[ArrayGrid].image != BlankIcon) // als grid al vol is met een item icon dan arraygrid +1 om verder te zoeken naar een grid die leeg is.
            {
                ArrayGrid += 1;  
            }
        }

    }
}

function WaitTimeLevel2(){
	yield WaitForSeconds(3);
	Application.LoadLevel(2);
}

function WaitTimeLevel3(){
	yield WaitForSeconds(3);
	Application.LoadLevel(3);
}

function WaitTimeLevel4(){
	yield WaitForSeconds(3);
	Application.LoadLevel(4);
}



