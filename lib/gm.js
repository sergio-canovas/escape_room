//0-Candado
//1-Key
//2-Mapa
//3-Piano
//4-Máquina de escribir. 
//5-Coger nota3
//6-Leer nota3
//7-Final Librería.
//8-End Game
//9-Lista final
var quest = [false,false,false,false,false,false,false,false,false,false];
var closer;
var ultrav = false;
var valor_final = "";
//0-Nota1
//1-Nota2
//2-Nota3
var notas_leidas = [false,false,false];

//Check, nota final.

function check_notas_leidas()
{
    i=0;
    for(i;i<notas_leidas.length;i++)
        {
            if (!notas_leidas[i])
                {
                    console.log("Nota "+i+" no leída");
                    return false;
                }
        }
    setTimeout(function(){
        $("#partitura").css("display","none");
        $("#partitura2").css("display","none");
        $("#partitura3").css("display","none");
        $("#partitura_final").css("display","block");
       notificator("¡Genial!, ya tienes las tres notas");
        om_standard(d_final_list);
        quest[9] = true;
    },5000)
}

// Cuando cargue el documento....
$(function () {

//----------------------------Variables----------------------------

proyector = document.getElementById("game");
audio_gramofono = document.getElementById("a_gramofono");
audio_cello = document.getElementById("a_cello");
audio_bet = document.getElementById("a_be");
audio_clok = document.getElementById("a_clok");
    
//----------------------------Diálogos----------------------------    

    //----------Home----------
    $("#d_tohome").dialog({
            autoOpen: false,
            modal: true,
            width:"70%",
            position :{
           my: "center",
           at: "center",
            of: $(".big")},
            resizable: false,
            show: {
                effect: "fade",
                duration: 1000
            },
            hide: {
                effect: "fade",
                duration: 1000
            },
            buttons: {
        "Aceptar": function() {
         window.location.href = "/index.html";
        },
        Cancelar: function() {
          $( this ).dialog( "close" );
        }
      }
        });
    
    //----------Diálogo Misión----------    
    $("#d_mision").dialog({
        autoOpen: true,
        modal: true,
        resizable: false,
        width:"40%",
        position :{
           my: "center",
           at: "center",
            of: $(".big")},
        show: {
            effect: "fade",
            duration: 1000
        },
        hide: {
            effect: "fade",
            duration: 1000
        },
        buttons: [{
            text: "Continuar",
            click: function() 
            {
                if (quest[0] == false)
                    {
                        notificator("Mantén los ojos abiertos");
                    }
                $(this).dialog("close");
		    }
	     }]
    });
   
    //-------Quest: Candado Fase1-------
    $("#d_candado").dialog({
            autoOpen: false,
            modal: false,
            resizable: false,
            width:"40%",
        position :{
           my: "center",
           at: "center",
            of: $(".big")},
            show: {
                effect: "fade",
                duration: 1000
            },
            hide: {
                effect: "fade",
                duration: 1000
            },
            buttons: [{
                text: "Introducir",
                click: function() 
                {
                    var desafio = 0;
                    var solucion = 18;
                    var succes = "¡Es correcto! Podemos entrar";
                    var fail = "No hemos introducido la clave correcta";
                    var valor =  document.getElementById("p_candado");
                    var valor=  valor.value;
                    verificator(desafio,valor,solucion,succes,fail);
                    document.getElementById("p_candado").value = "";
                    $(this).dialog("close");
                }
             }]
        });
    //-------Quest: Piano-------
     $("#d_piano").dialog({
            autoOpen: false,
            modal: true,
            width:"auto",
            resizable: false,
         position :{
           my: "center",
           at: "center",
            of: $(".big")},
            show: {
                effect: "fade",
                duration: 1000
            },
            hide: {
                effect: "fade",
                duration: 1000
            },
            buttons: [{
                text: "Probar",
                click: function() 
                {
                    var desafio = 3;
                    var solucion = "DFG";
                    var succes = "¡Es correcto!";
                    var fail = "El valor no es correcto";
                    var valor = document.getElementById("p_piano");
                    var valor= valor.value;
                    var valor= valor.toUpperCase();
                    console.log(valor);
                    verificator(desafio,valor,solucion,succes,fail);
                    document.getElementById("p_piano").value = "";
                    color = $("#partitura").css("display");
                    if (quest[3] && color=="none" && !quest[9])
                        {
                            get_partitura();
                            
                            check_notas_leidas;
                        }
                    $(this).dialog("close");
                    
                }
             }]
        });
    //-------Audio: Gramola-------
     $("#d_gramola").dialog({
            autoOpen: false,
            modal: true,
            width:"auto",
            resizable: false,
         position :{
           my: "center",
           at: "center",
            of: $(".big")},
            show: {
                effect: "fade",
                duration: 1000
            },
            hide: {
                effect: "fade",
                duration: 1000
            },
            buttons: [{
                text: "Atrás",
                click: function() 
                {
                    $(this).dialog("close");
                    audio_gramofono.currentTime = 0;
                    audio_gramofono.pause();
                }
             }]
        });
    
    //-------Quest: Máquina de escribir-------
     $("#d_tpmachine").dialog({
            autoOpen: false,
            modal: true,
            width:"70%",
            resizable: false,
         position :{
           my: "center",
           at: "center",
            of: $(".big")},
            show: {
                effect: "fade",
                duration: 1000
            },
            hide: {
                effect: "fade",
                duration: 1000
            },
            buttons: [{
                text: "Probar",
                click: function() 
                {
                    var desafio = 4;
                    var solucion = "BONN";
                    var succes = "¡Es correcto!";
                    var fail = "No es correcto";
                    var valor = document.getElementById("p_tpmachine");
                    var valor= valor.value;
                    var valor= valor.toUpperCase();
                    console.log(valor);
                    verificator(desafio,valor,solucion,succes,fail);
                    document.getElementById("p_tpmachine").value = "";
                    color = $("#partitura2").css("display");
                    if (quest[4] && color=="none" && !quest[9])
                        {
                            get_partitura2();
                        }
                    $(this).dialog("close");
                    
                }
             }]
        });
    
     //-------Video: Concierto-------
     $("#d_cuadro").dialog({
            autoOpen: false,
            modal: true,
            width:"auto",
            resizable: false,
         position :{
           my: "center",
           at: "center",
            of: $(".big")},
            show: {
                effect: "fade",
                duration: 1000
            },
            hide: {
                effect: "fade",
                duration: 1000
            },
            buttons: [{
                text: "Atrás",
                click: function() 
                {
                    video1.pause();
                    video1.currentTime = 0;
                    $(this).dialog("close");
                }
             }]
        });
    
    //-------Quest: Librería final-------
     $("#d_libreria").dialog({
            autoOpen: false,
            modal: true,
            width:"auto",
            resizable: false,
         position :{
           my: "center",
           at: "center",
            of: $(".big")},
            show: {
                effect: "fade",
                duration: 1000
            },
            hide: {
                effect: "fade",
                duration: 1000
            },
            buttons: [{
                text: "Probar",
                click: function() 
                {
                    var desafio = 7;
                    var solucion = "123";
                    var succes = "¡Lo has acertado!";
                    var fail = "No parece que ocurra nada";
                    valor_final;
                   console.log (valor_final); verificator(desafio,valor_final,solucion,succes,fail);
                  console.log(quest[7]);
                     if (quest[7] && !quest[8])
                       {
                           om_endgame();
                           console.log("End game");
                       }
                    valor_final="";
                    $(this).dialog("close");
                }
             }]
        });
    
     //-------End Game-------
     $("#d_end_game").dialog({
            autoOpen: false,
            modal: true,
            width:"auto",
            resizable: false,
         position :{
           my: "center",
           at: "center",
            of: $(".big")},
            show: {
                effect: "fade",
                duration: 1000
            },
            hide: {
                effect: "fade",
                duration: 1000
            },
            buttons: [{
                text: "Atrás",
                click: function() 
                {
                    $(this).dialog("close");
                    audio_bet.pause();
                    audio_bet.currentTime = 0;
                }
             }]
        });
});


//----------------------------Apertura de modales----------------------------
   
    //Modal toHome

function om_tohome()
{
    $("#d_tohome").dialog("open");
}
    //Modal misión

function om_mision()
{
    $("#d_mision").dialog("open");
}
    //Modal candado fase1

function om_candado()
{
    $("#d_candado").dialog("open");
}

    //Modal piano

function om_piano()
{
    $("#d_piano").dialog("open");
}
    //Modal gramola
function om_gramola()
{
    $("#d_gramola").dialog("open");
    audio_gramofono.play();
}

    //Modal cuadro
function om_cuadro()
{
    $("#d_cuadro").dialog("open");
    video1.play();
}
    //Modal máquina de escribir
function om_tpmachine()
{
    $("#d_tpmachine").dialog("open");
}
    //Modal Nota3
function om_d_partitura3()
{
  if (quest[6])
      {
                    om_standard(d_partitura31);
      }
    else
    {
        if (ultrav){
           if (!quest[6])
                {
                    notificator("Has descubierto un mensaje secreto en la nota.");
                    quest[6]=true;
                    notas_leidas[2]=true;
                    check_notas_leidas();
                }
                    om_standard(d_partitura31);
        }
        else{
            om_standard(d_partitura3);
        }
    }
}
    //Modal libreria
function om_libreria()
{
    $("#d_libreria").dialog("open");
}

//Modal end game
function om_endgame()
{
    $("#d_end_game").dialog("open");
    audio_bet.play();
}


//----------------------------Subrutinas----------------------------

    //Notificador 2000

function notificator(sms)
{
    clearTimeout(closer);
    var area = document.getElementById("a_notification");
    $("#a_notification").css("display","inline");
    area.innerHTML = "<div class='slide-top2'><span id='notification'>" + sms + "</div>";
    closer = setTimeout(function () {
        area.innerHTML = "";
        $("#a_notification").css("display","none");
        },
       9000);
}

    //Verificador 2000

function verificator(desafio,valor,solucion,succes,fail)
{
    if (quest[desafio] == false)
        {
        if (valor == solucion)
            {
                quest[desafio]=true;
                notificator(succes);
            }
        else
            {
                notificator(fail);
            }
        }
    else
        {
            notificator("Ya has solucionado este desafío");
        }
}

    //Standard Dialog 2000
function om_standard(p_item)
{
    $(p_item).dialog({
            autoOpen: true,
            modal: true,
            width:"auto",
            resizable: false,
        position :{
           my: "center",
           at: "center",
            of: $(".big")},
            show: {
                effect: "fade",
                duration: 1000
            },
            hide: {
                effect: "fade",
                duration: 1000
            },
            buttons: [{
                text: "Cerrar",
                click: function() 
                {
                    $(this).dialog("close");
                }
             }]
        });
}

//----------------------------Fases----------------------------
//--------Fase1
function arrow0()
{
    if (quest[0] == true)
        {
            fase2();
        }
    else
        {
            notificator("La puerta está cerrada");
        }
}
//--------Fase2: Entrada
function fase2()
{
    proyector.innerHTML="<img src='images/bkg/3.png'><div style='bottom:150px;right:5px;'class='slide-top clickable' onclick='arrow2()'><i class='fas fa-chevron-up fa-1x'></i></div>";
}
function arrow2()
{
    notificator("Has entrado en la casa")
    fase3();
}

//--------Fase3: Hall primera planta

function fase3()
{
    proyector.innerHTML="<img src='images/bkg/4.png'><div style='bottom:200px;right:-35px;'class='slide-top clickable ' onclick='arrow3_1()'><i class='fas fa-chevron-up fa-1x'></i></div><div style='bottom:190px;right:250px;'class='slide-left clickable' onclick='arrow3_4()'><i class='fas fa-chevron-left fa-1x'></i></div><div style='bottom:160px;right:-50px;'class='slide-right clickable' onclick='arrow3_2()'><i class='fas fa-chevron-right fa-1x'></i></div><div style='bottom:180px;right:-280px;'class='slide-right clickable' onclick='arrow3_3()'><i class='fas fa-chevron-right fa-1x'></i></div>";
}
function arrow3_1()
{
    fase4();
}
function arrow3_2()
{
    fase7();
}
function arrow3_3()
{
    fase5()
}
function arrow3_4()
{
    if (quest[1] == true)
        {
            var open = $("#key_a").css("display");
            if (open != "none")
                {
                    notificator("Has utilizado la llave para abrir la puerta");
                    $("#key_a").css("display","none");
                }
            
            fase6();
        }
    else
        {
            notificator("La puerta está cerrada con llave");
        }
}

//--------Fase4: Habitación: 1_1. La cocina.

function fase4()
{
    proyector.innerHTML="<img src='images/bkg/8.png'><div style='bottom:40px;right:-5px;'class='slide-top clickable ' onclick='fase3()'><i class='fas fa-chevron-down fa-1x'></i></div>";
    if (!quest[1])
        {
    $('#game').append("<div id='key1' onclick='get_llave1()' style='bottom:120px;right:290px'><img src='images/items/key_a.png' width='36px' height='64'></div>");
        }
}
function get_llave1() {
    console.log("Llave vuela");
    $("#key1").css( "display", "none" );
    $("#key_a").css("display","block");
    quest[1]=true;
    notificator("Has obtenido una llave!");
};

//--------Fase5: Habitación: 1_2. Sala del plano.

function fase5()
{
    proyector.innerHTML="<img src='images/bkg/5.png'><div style='bottom:40px;right:-5px;'class='slide-top clickable ' onclick='fase3()'><i class='fas fa-chevron-down fa-1x'></i></div>";
    
    if (!quest[2]){
    $('#game').append("<div id='map1' onclick='get_map1()' style= bottom:180px;right:-150px;'><img src='images/items/map_small.png' width='45px' height='30px'></div>");
    }
}
function get_map1() {
    $("#map1").css( "display", "none" );
    $("#map_a").css("display","block");
    quest[2]=true;
    notificator("Has obtenido un mapa! Deberías ojearlo");
    om_standard(d_mapa);
};


//--------Fase6: Habitación: .Sala del piano y la gramola.

function fase6()
{
    proyector.innerHTML="<img src='images/bkg/9.png'><div style='bottom:40px;right:-5px;'class='slide-top clickable ' onclick='fase3()'><i class='fas fa-chevron-down fa-1x'></i></div>";
    
    $('#game').append("<div id='piano1' onclick='om_piano()' style=' bottom:260px;right:-300px;width:130px; height:60px; background-color:none; cursor: pointer'></div>");
    
    $('#game').append("<div id='gramola1' onclick='om_gramola()' style=' bottom:340px;right:-30px;width:130px; height:160px; background-color:none; cursor: pointer'></div>");
    
    $('#game').append("<div id='retrato1' onclick='om_standard(d_retrato1)' style=' bottom:580px;right:-450px;width:30px; height:50px; background-color:none; cursor: pointer'></div>");
    
    $('#game').append("<div id='retrato2' onclick='om_standard(d_retrato2)' style=' bottom:630px;right:-400px;width:30px; height:50px; background-color:none; cursor: pointer'></div>");
}
function get_partitura()
{
    $("#partitura").css("display","block");
    notificator("Se abre una ranura y aparece un trozo de una nota");
    notas_leidas[0]=true;
    check_notas_leidas();
    om_standard(d_partitura);
}

//--------Fase7: Hall planta mediana

function fase7()
{
    proyector.innerHTML="<img src='images/bkg/10.png'><div style='bottom:40px;right:-5px;'class='slide-top clickable ' onclick='fase3()'><i class='fas fa-chevron-down fa-1x'></i></div><div style='bottom:170px;right:175px;'class='slide-top clickable ' onclick='arrow7_1()'><i class='fas fa-chevron-up fa-1x'></i></div><div style='bottom:170px;right:-150px;'class='slide-top clickable ' onclick='arrow7_2()'><i class='fas fa-chevron-up fa-1x'></i></div>";
    
    $('#game').append("<div id='cuadro1' onclick='om_cuadro()' style=' bottom:500px;right:-280px;width:210px; height:210px; background-color:none; cursor: pointer'></div>");
    
}
function arrow7_1()
{
    fase8();
}
function arrow7_2()
{
    fase12();
}
//--------Fase8: Escaleras a planta superior

function fase8()
{
    proyector.innerHTML="<img src='images/bkg/11.png'><div style='bottom:40px;right:-5px;'class='slide-top clickable ' onclick='fase7()'><i class='fas fa-chevron-down fa-1x'></i></div><div style='bottom:320px;right:80px;'class='slide-top clickable ' onclick='arrow8_1()'><i class='fas fa-chevron-up fa-1x'></i></div>";
    
    $('#game').append("<div id='cuadro1' onclick='cello()' style=' bottom:260px;right:-400px;width:80px; height:150px; background-color:none; cursor: pointer'> </div>");
    
    
}
function arrow8_1()
{
    fase9();
}

function cello()
    {
        audio_cello.play();
        notificator('Está afinado');
    }

//--------Fase9: Hall planta superior

function fase9()
{
     proyector.innerHTML="<img src='images/bkg/12.png'><div style='bottom:240px;right:-5px;'class='slide-top clickable ' onclick='fase8()'><i class='fas fa-chevron-up fa-1x'></i></div><div style='bottom:220px;right:-180px;'class='slide-right clickable ' onclick='arrow9_1()'><i class='fas fa-chevron-right fa-1x'></i></div><div style='bottom:190px;right:220px;'class='slide-left clickable ' onclick='arrow9_2()'><i class='fas fa-chevron-left fa-1x'></i></div>";
}
function arrow9_1()
{
    fase10();
}
function arrow9_2()
{
    fase11();
}

//--------Fase10: Habitación 3_1

function fase10()
{
     proyector.innerHTML="<img src='images/bkg/14.png'><div style='bottom:40px;right:-5px;'class='slide-top clickable ' onclick='fase9()'><i class='fas fa-chevron-down fa-1x'></i>";
     
    $('#game').append("<div id='puerta1' onclick='puerta3_2()' style=' bottom:410px;right:-590px;width:120px; height:260px; background-color:none; cursor: pointer'> </div>");
    
    $('#game').append("<div id='puerta2' onclick='puerta3_2()' style=' bottom:670px;right:-50px;width:120px; height:240px; background-color:none; cursor: pointer'> </div>");
    
    if (!quest[5])
        {
    $('#game').append("<div id='nota3' onclick='get_partitura3()' style=' bottom:665px;right:-70px;width:60px; height:60px; background-color:none; cursor: pointer; transform: rotate(73deg);'><img src='/images/items/nota_mesa.png' width='46px' height='64'> </div>");
        }
}

function puerta3_2()
{
    notificator("Está cerrado");
}

function get_partitura3()
{
    quest[5]=true;
    $("#nota3").css("display","none");
    $("#partitura3").css("display","block");
    notificator("Has obtenido un trozo de una nota");
    check_notas_leidas();
    om_d_partitura3();
}

//--------Fase11: Habitación 3_2

function fase11()
{
     proyector.innerHTML="<img src='images/bkg/15.png'><div style='bottom:40px;right:-5px;'class='slide-top clickable ' onclick='fase9()'><i class='fas fa-chevron-down fa-1x'></i>";
    
    $('#game').append("<div id='tp_machine' onclick='om_tpmachine()' style=' bottom:220px;right:-370px;width:80px; height:80px; background-color:none; cursor: pointer'> </div>");
    
    $('#game').append("<div id='libreria' onclick='om_libreria()' style=' bottom:410px;right:-60px;width:130px; height:220px; background-color:none; cursor: pointer'> </div>");   
}
function final_function(libro)
{
    var libro;
    valor_final += libro;
    audio_clok.currentTime = 0;
    console.log(valor_final);
    audio_clok.play();
}

function get_partitura2()
{
    $("#partitura2").css("display","block");
    notificator("Se abre una ranura y aparece un trozo de una nota");
    om_standard(d_partitura2);
    notas_leidas[1]=true;
    check_notas_leidas();
}

//--------Fase12: WC

function fase12()
{
    ultrav = false;
    console.log(ultrav);
    proyector.innerHTML="<img src='images/bkg/6.png'><div style='bottom:40px;right:-5px;'class='slide-top clickable ' onclick='fase7()'><i class='fas fa-chevron-down fa-1x'></i></div>";
    
    $('#game').append("<div id='cuadro1' onclick='fase12_w()' style=' bottom:235px;right:0px;width:80px; height:70px; background-color:none; cursor: pointer'> </div>");
}
function fase12_w()
{
    ultrav = true;
    console.log(ultrav);
    notificator("Has encendido una luz ultravioleta");
    
    proyector.innerHTML="<img src='images/bkg/6_2.png'><div style='bottom:40px;right:-5px;'class='slide-top clickable ' onclick='exit12()'><i class='fas fa-chevron-down fa-1x'></i></div>";

    $('#game').append("<div id='cuadro1' onclick='fase12()' style=' bottom:235px;right:0px;width:80px; height:70px; background-color:none; cursor: pointer'> </div>");
}
function exit12(){
    ultrav = false;
    fase7();
}