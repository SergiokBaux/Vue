//Se instancia un objeto de tipo vue
const app = new Vue({
    //El contenido dentro de app en el HTML será gestionado con vue
    el: '#app',
    //Datos que vamos a utilizar
    data: {

        titulo: 'Hola mundo con vue',
        //Array de string
        //frutas: ['Lichie', 'Platano', 'Tuna']
        frutas: [
            {nombre:'Lichie', cantidad: 50},
            {nombre:'Platano', cantidad: 10},
            {nombre:'Tuna', cantidad: 0},
        ],
        nuevaFruta:'',
        Total:0,
    },
    methods:
    {
        agregaFruta()
        {
            this.frutas.push({nombre:this.nuevaFruta, cantidad:0});
            this.nuevaFruta='';
        }
    },
    //Computed a diferencia de los metodos, las propiedades computadas se almacenan en caché según sus dependencias.
    computed:
    {
        sumarFrutas()
        {
            this.Total = 0;
            for(fruta of this.frutas)
            {
                this.Total = this.Total + fruta.cantidad;
            }
            return this.Total;
        }
    }

})