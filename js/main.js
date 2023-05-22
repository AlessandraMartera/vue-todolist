// Rifare l’esercizio della to do list.
// Questa volta però ogni elemento della todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del task
// - done, un booleano (true/false) che indica se il task è stato fatto oppure no




const { createApp } = Vue

createApp({
  data() {
    return {
        newTask: {
            text: "",
            done: false
            
        },
        tasks : [
                {
                    done: false,
                    text:"fare l'esercitazione"
                },
                {
                    done: false,
                    text: "fare la spesa"
                },
                {
                    done: false,
                    text: "Preparare la cena"
                }
        ]
    }
  },
  methods: {
    addNewTask(){
        console.log(this.newTask.text);
        this.tasks.push(this.newTask.text);
    }
  }
}).mount('#app')

// createapp({
//     data(){
//         return {
//         tasks : [
//            {
//             done: false,
//             text:''
//            },
//            {
//             done: false,
//             text: ''
//            },
//            {
//             done: false,
//             text: ''
//            }
//         ]
            
//         }
//     }
// }).mount('#app')

// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni task.
// Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il task viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo task, che quindi viene aggiunto alla lista dei task esistenti.