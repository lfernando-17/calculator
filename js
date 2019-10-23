function put(x)
{
	document.getElementById("visor").value += x;
}

function clean()
{
	document.getElementById("visor").value = '';
}

function result()
{
	var resultado=0;
	resultado=document.getElementById('visor').value;
	document.getElementById("visor").value='';
	document.getElementById("visor").value=eval(resultado);
}
