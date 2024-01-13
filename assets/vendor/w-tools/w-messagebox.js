
function buidWMessageBox(m, imeKlase)
{
	if (m==="")
		return;
	var d = document.createElement("div");
	d.classList.add(imeKlase);
	d.innerHTML = m;
	var WMessageContainerDiv = document.getElementById("WMessageContainerDiv");
	if (WMessageContainerDiv == null)
	{
		WMessageContainerDiv = document.createElement("div");
		WMessageContainerDiv.id = "WMessageContainerDiv";
		d.classList.add("WMessageContainerDiv");
		document.body.appendChild(WMessageContainerDiv);
	}
	WMessageContainerDiv.appendChild(d);
   
	setTimeout(function() {        
	  
		d.style.opacity = '0';
		setTimeout(function() {d.remove();}, 1000);
	}, 4000);
}

function WMessageSuccess(m)
{
	buidWMessageBox(m, "WMessageSuccess");
}

function WMessageWarning(m)
{
	buidWMessageBox(m, "WMessageWarning");
}
      
function WMessageError(m)
{
	buidWMessageBox(m, "WMessageError");
}

function WMessageInfo(m)
{
	buidWMessageBox(m, "WMessageInfo");
}
      
