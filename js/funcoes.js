//função responsável por obter e separar dados
function prints()
          {
           coorde = coord.split('*');
           var lat = coorde[0];
           long= coorde[1];
           
          };
          //função responsável por setar a posição do markador "onibus"
function red() {
            //recebe valores 
            lat =lat;
            lng = long;
            mark.setPosition({lat:parseFloat(lat), lng:parseFloat(lng), alt:0});//seta posição do cursor
            lineCoords.push(new google.maps.LatLng(lat, lng));
            };