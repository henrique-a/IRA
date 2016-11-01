var btncalcula = document.createElement("BUTTON");
var t = document.createTextNode("Calcular IRA");
btncalcula.setAttribute("id", "btncalcula");

$("document").ready(function (){
     	
    $("#butnotas").mouseover(function (){
		$(this).attr("class", "btnon");
	});

    $("#butnotas").mouseout(function (){
		$(this).attr("class", "btnoff");
	});

	$("#butnotas").click(function quest(){
        
		if($("#i").val().length != 0 && $("#T").val().length != 0 && $("#C").val().length != 0){
			$("<p>*Notas de 0 a 10, digite numeros quebrados da forma 9.9</p>").appendTo("#aviso");
			$("<p>*Nas disciplinas anuais, serão considerado o semestre de início delas.</p>").appendTo("#aviso");

			for (var i = 1; i <= $("#i").val() ; i++) {
				$("<p>Nota final da disciplina "+ i +": <input type='text' id='nota"+i+"'><br>").appendTo("#notas");
				$("<p>Carga horária da disciplina "+ i +": <input type='text' id='carga"+i+"'><br>").appendTo("#notas");
				$("<p>Período em que a disciplina "+ i +" foi cursada: <input type='text' id='periodo"+i+"'><br><br>").appendTo("#notas");
			}

	        $(this).attr("class", "btnoff");
	        $(this).css("cursor", "default");
			btncalcula.appendChild(t);
			document.getElementById('calcula').appendChild(btncalcula);
	        $(this).prop("disabled",true);
		}	

	});

	
	var options =  {onKeyPress: function(){

	 	var masks = ['00000-000', '0-00-00-00'];
	 	mask = (cep.length>7) ? masks[1] : masks[0];
	 	$('nota1').mask(mask, options);
	 	
	}};

	$('nota1').mask('00000-000', options);

	btncalcula.onmouseover = function (){
		this.setAttribute("class", "btnon");
	}

	btncalcula.onmouseout = function (){
		this.setAttribute("class", "btnoff");
	}

	btncalcula.onclick = function (){

		var T = $("#T").val();
		var C = $("#C").val();
		var ira = 1000*(1 - 0.5*T/C);
		var s1 = 0;
		var s2 = 0;

		for(var i = 1; i<= $("#i").val(); i++){

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
		$("#calcula").append("<span>O seu IRA individual Ã© "+ira+"</span>");
		$("#btncalcula").prop("disabled",true);

	}
	
	

});
			
