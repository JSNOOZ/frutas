const app1 = {
    data(){
        return {
            frutas: [
                { nombre: 'Manzana', cantidad: 15, precioU: 5, total: 0 },
                { nombre: 'Plátano', cantidad: 10, precioU: 3, total: 0 },
                { nombre: 'Uva', cantidad: 20, precioU: 6, total: 0 }
            ],
            nuevaF: '',
            nuevaC: 0,
            nuevoP: 0.0
        }
    },
    methods: {
        montoF(i) {
            this.frutas[i].total = this.frutas[i].cantidad * this.frutas[i].precioU;
            return this.frutas[i].total;
        },
        calcularSubtotal() {
            return this.frutas.reduce((total, fruta) => total + fruta.total, 0);
        },
        calcularIva() {
            return this.calcularSubtotal() * 0.21;
        },
        calcularTotal() {
            return this.calcularSubtotal() + this.calcularIva();
        },
        agregar() {
            if (this.nuevaF && this.nuevaC > 0 && this.nuevoP > 0) {
                this.frutas.push({ nombre: this.nuevaF, cantidad: this.nuevaC, precioU: this.nuevoP, total: this.nuevaC * this.nuevoP });
                this.nuevaF = '';
                this.nuevaC = 0;
                this.nuevoP = 0;
            } else {
                alert('Por favor, ingresa un nombre, cantidad y precio válidos.');
            }
        },
        removeFrutas(index) {
            this.frutas.splice(index, 1);
          },
    }
};

Vue.createApp(app1).mount('#seccion');