<<<<<<< HEAD
//Abstracción de la lógica para registrar macotas
class Mascota {
    constructor(nombre, peso){
        if(new.target === Mascota) {
          throw new TypeError("No se puede instanciar la clase Mascota directamente",       
          );
        }
        this.nombre = nombre;
        this.peso = peso;  
    }
    //Contrato
    hacerSonido(){
        throw new Error(`${this.constructor.nombre} debe implementar el método hacer Sonido`);
    } 
}

// Sección para definir clases específicas de mascotas que heredan de  Mascota
=======
//Abstracción de la lógica para registrar mascotas
class Mascota {
  constructor(nombre, peso) {
    if (new.target === Mascota) {
      throw new TypeError(
        "No se puede instanciar la clase Mascota directamente",
      );
    }
    this.nombre = nombre;
    this.peso = peso;
  }
  //Contrato
  hacerSonido(){
    throw new Error(`${this.constructor.nombre} debe implementar el método de Hacer Sonido`);
  }
} 

//Sección para definir clases específicas de mascotas que heredan de Mascota
>>>>>>> 759e550c568f5324203b29f011bdf54223af07bd
class Perro extends Mascota{
    hacerSonido(){
        return "Guau Guau";
    }
}

class Gato extends Mascota{
    hacerSonido(){
        return "Miau Miau";
    }
}

<<<<<<< HEAD
//Conexión con la pagina Index.
=======
//Conexión con la página de Index.
>>>>>>> 759e550c568f5324203b29f011bdf54223af07bd
const pacientes = [];
const lista = document.getElementById("lista");
const mensaje = document.getElementById("mensaje");

function mostrar(tipo, texto){
    mensaje.className = tipo;
    mensaje.textContent = texto;
}

function dibujar(){
<<<<<<< HEAD
    lista.innerHTML = "";
    for(const m of pacientes){
        const li = document.createElement("li");
        li.className = "paciente";
        li.textContent = `${m.constructor.name}: ${m.nombre} - ${m.peso} kg -`;
        const detalle = document.createElement("small");
        detalle.textContent =  m.hacerSonido();
=======
    lista.innerHTML= "";
    for(const m of pacientes){
        const li = document.createElement("li");
        li.className = "Paciente";
        li.textContent = `${m.constructor.name}: ${m.nombre} - ${m.peso} Kg.`;
        const detalle = document.createElement("small");
        detalle.textContent = m.hacerSonido();
>>>>>>> 759e550c568f5324203b29f011bdf54223af07bd
        li.appendChild(detalle);
        lista.appendChild(li);
    }
}

//Aquí se consolida la lógica del ejercicio para registrar mascotas
<<<<<<< HEAD
document.getElementById("formulario").addEventListener("submit", (e)=>{
    e.preventDefault();//evita que la página se recargue al enviar el formulario
    document.getElementById("mensaje").textContent = "Mascota registrada correctamente";
    const tipo = document.getElementById("tipo").value;
    const nombre = document.getElementById("nombre").value;
    const peso = parseFloat(document.getElementById("peso").value);
    
    const mascota = tipo === "perro" ? new Perro(nombre, peso) : new Gato(nombre, peso);

    pacientes.push(mascota);

    dibujar();

    mostrar("ok", `Mascota ${nombre} registrada correctamente`);
=======
document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault(); //evita que la página se recargue al enviar el formulario
  const tipo = document.getElementById("tipo").value;
  const nombre = document.getElementById("nombre").value;
  const peso = Number(document.getElementById("peso").value);

  const mascota = tipo === "perro" ? new Perro(nombre, peso) : new Gato(nombre, peso);

  pacientes.push(mascota);

  dibujar();

  mostrar("ok", `Mascota ${nombre} registrada correctamente`);
>>>>>>> 759e550c568f5324203b29f011bdf54223af07bd
});
