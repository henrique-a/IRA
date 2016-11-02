var btncalcula = document.createElement("BUTTON");
var t = document.createTextNode("Calcular IRA");
btncalcula.setAttribute("id", "btncalcula");

$("document").ready(function (){
    
    $("#btnnotas").mouseover(function (){
		$(this).attr("class", "btnon");
	});

    $("#btnnotas").mouseout(function (){
		$(this).attr("class", "btnoff");
	});

	$("#btnnotas").click(function quest(){
        
		if ($("#i").val().length != 0 && $("#T").val().length != 0) {
			$("<p>*Nas disciplinas anuais, será considerado o semestre de início delas.</p>").appendTo("#aviso");

			for (var i = 1; i <= $("#i").val() ; i++) {
				$("<p>Nota final da disciplina "+ i +": <input type='text' id='nota"+i+"' class='notas' min='0' max='10'><br>").appendTo("#notas");
				$("<p>Carga horária da disciplina "+ i +": <input type='text' id='carga"+i+"'><br>").appendTo("#notas");
				$("<p>Período em que a disciplina "+ i +" foi cursada: <input type='text' id='periodo"+i+"'><br><br>").appendTo("#notas");
			}

			var notas = document.getElementsByClassName("notas");
			[].forEach.call(notas, function (nota) {
    			nota.addEventListener("input", onNotaInput);
 		 	});
 		 	

	        $(this).attr("class", "btnoff");
	        $(this).css("cursor", "default");
			btncalcula.appendChild(t);
			document.getElementById('calcula').appendChild(btncalcula);
	        $(this).prop("disabled",true);
		}	

	});

	btncalcula.onmouseover = function (){
		this.setAttribute("class", "btnon");
	}

	btncalcula.onmouseout = function (){
		this.setAttribute("class", "btnoff");
	}

	btncalcula.onclick = function (){

		var T = $("#T").val();
		var C = 0;
		for (var i = 1; i <= $("#i").val(); i++) {
			C = C + document.getElementById("carga"+i).value;
		}
		var ira = 1000*(1 - 0.5*T/C);
		var s1 = 0;
		var s2 = 0;

		for(var i = 1; i <= $("#i").val(); i++){

			var nota = document.getElementById("nota"+i).value;
			var carga = document.getElementById("carga"+i).value;
			var periodo = document.getElementById("periodo"+i).value;

			if(periodo > 6) periodo = 6;

			s1 = s1 + nota*carga*periodo;
			s2 = s2 + carga*periodo;
		}

		ira = ira*s1/s2;
		this.setAttribute("class", "btnoff");
		$("#btncalcula").css("cursor", "default");
		$("#calcula").append("<span>O seu IRA individual é "+ira+"</span>");
		$("#btncalcula").prop("disabled",true);

	}	

});
			
