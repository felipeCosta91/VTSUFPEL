
      var coord="";
     var coord=[];
    var coordenadas;
  //dados do servidor mqtt
	var mqtt;
	var origem ="";
    var i=0;
		var reconnectTimeout = 2000;
		var host="broker.hivemq.com"; 
		var port=8000;
	//função para enviar mensagem de falha
		function onFailure(message) {
			setTimeout(MQTTconnect, reconnectTimeout);
        }
    //função captura as coordenadas
		function onMessageArrived(msg){
      coord=msg.payloadString;
			console.log(coord);
	coorde = coord.split('*');
	console.log(coorde[0]);
	origem = coorde[0]+","+coorde[1];
	velocidade = coorde[2];
	console.log(velocidade);
	mark.setPosition({lat:parseFloat(coorde[0]), lng:parseFloat(coorde[1]), alt:0});//seta posição do cursor
	prints();	
	// CalculaDistancia('-31.780528,-52.323864',origem);
       }
     //função com o tópico do ônibus
		function onConnect() {
		mqtt.subscribe("ufpel");//tópico
	

	  }
	  function MQTTconnect() {
		 
		mqtt = new Paho.MQTT.Client(host,port,"clientjs");
		var options = {
			timeout: 3,
			onSuccess: onConnect,
			onFailure: onFailure,
			 };
		mqtt.onMessageArrived = onMessageArrived
  
    mqtt.connect(options); //connect
    
		}
    //função responsável por obter e separar dados
function prints()
{
 coorde = coord.split('*');
 var lat = coorde[0];
 var long= coorde[1];
 
 
};
//função responsável por setar a posição do markador "onibus"
function red() {
  //recebe valores 
  lat =lat;
  lng = long;
  mark.setPosition({lat:parseFloat(lat), lng:parseFloat(lng), alt:0});//seta posição do cursor
  lineCoords.push(new google.maps.LatLng(lat, lng));
  
  };
  