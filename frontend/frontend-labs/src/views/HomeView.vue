<template>
  <div class="p-5">
    <h1 class="text-sky-100
    text-center
    text-4xl
    lg:text-7xl
    col-span-3">
        Prácticas
    </h1>
    <a href="http://www.google.com"
    id="google-button"
    class="flex
    justify-center
    grid
    grid-cols-2
    lg:row-start-4
    row-start-5
    max-h-10
    lg:col-start-2">
        <div class="col-span-2
        text-sky-100
        text-center
        text-xl
        border-2
        border-sky-100
        rounded-md 
        mx-20
        p-2
        grid
        grid-flow-col
        bg-red-600
        hover:bg-amber-400">
            <h1 class="border-r-2
            border-sky-100">
                <i class="fab
                fa-google"></i>
            </h1>
            <h1>
                Ingresa con Google
            </h1>        
        </div>
    </a>
  </div>
</template>

<script>
export default {
  data(){
  return {
    practicas: [
      {nombre: "Práctica 1 - Presión",
      submenus: ["Previo", "Desarrollo"],
      status: "En proceso",
      progreso: "50%",
      disponible: "True"},
      {nombre: "Práctica 2 - Temperatura",
      submenus: ["Previo", "Desarrollo"],
      status: "En proceso",
      progreso: "50%",
      disponible: "True"},
      {nombre: "Práctica 3 - Calor",
      submenus: ["Previo", "Desarrollo"],
      status: "No iniciado",
      progreso: "0%",
      disponible: "True"},
      {nombre: "Práctica 4 - Capacidad térmica específica de metales",
      submenus: ["Previo", "Desarrollo"],
      status: "No iniciado",
      progreso: "0%",
      disponible: "False"},
      {nombre: "Práctica 5 - Conversión de trabajo en calor",
      submenus: ["Previo", "Desarrollo"],
      status: "Finalizado",
      progreso: "100%",
      disponible: "True"}
      ]
    }
  },
  name: 'Predeterminada',
  components: { }
}
</script>


