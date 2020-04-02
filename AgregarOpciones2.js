  
  function ddlselect(){
    var d= document.querySelector("#selector");
    var mostrarTexto = d.options[d.selectedIndex].text;
    document.querySelector("#SoloLec").value = mostrarTexto;
  }
