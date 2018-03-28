#pragma strict
var maxfalldistance=-10;
function Update () 
{
	if(transform.position.y <= maxfalldistance)
	{
	  Application.LoadLevel("Level01");
	}
}