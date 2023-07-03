function calculo() {
  var nombre = document.getElementById("nom").value;
  var apellido = document.getElementById("ape").value;
  var cedula = document.getElementById("c_i").value;
  var presupuesto = document.getElementById("presu").value;
  const kia = 22.0;
  const chevrolet = 19.0;
  const resultado_cont = document.getElementById("resultado-v");
  
  if (presupuesto >= kia || presupuesto >= chevrolet) {
    var msg =
      "El Sr/a. " +
      nombre +" "+ apellido +
      " , con cedula " +
      cedula +
      " . Esta dentro del presupuesto";
      
  } else {
    var msg =
      "El Sr/a. " +
      nombre +" "
      apellido +
      " , con cedula " +
      cedula +
      " . No esta dentro del presupuesto";
  }
  resultado_cont.innerHTML = msg;
  openModal();
}
function cerrar (){
    closeModal();
    borrar_campos();
}
function borrar_campos(){
    document.getElementById("nom").value = "";
    document.getElementById("ape").value = "";
    document.getElementById("c_i").value = "";
    document.getElementById("presu").value = "";
}
const modal = document.getElementById("mainModal");
const openModal = () => {
  modal.showModal();
};
const closeModal = () => {
  modal.close();
};
