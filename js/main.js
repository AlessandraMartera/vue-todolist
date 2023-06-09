// Rifare l’esercizio della to do list.
// Questa volta però ogni elemento della todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del task
// - done, un booleano (true/false) che indica se il task è stato fatto oppure no




const { createApp } = Vue

createApp({
  data() {
    return {
        doneClass : "done",
        newTask: "",
        tasks : [
                {
                    done: true,
                    text:"colazione"
                },
                {
                    done: false,
                    text: "fare la spesa"
                },  
                {
                    done: true,
                    text:"finire l'esercitazione"
                },
                {
                    done: false,
                    text:"palestra"
                },
                {
                    done: false,
                    text: "Preparare la cena"
                }
        ]
    }
  },
    // MILESTONE 1
    // Stampare all’interno di una lista HTML un item per ogni task.
    // Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.

  methods: {
    addNewTask() {
        // MILESTONE 3
        // Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo task, che quindi viene aggiunto alla lista dei task esistenti.
        this.tasks.push({
            done: false,
            text: this.newTask
        });
        this.newTask = "";
    },
    // MILESTONE 2
    // Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il task viene rimosso dalla lista.
    delateTask (i){
        this.tasks.splice(i,1);
    },
    checkedTask(iCheked){
        if(!this.tasks[iCheked].done) {
            this.tasks[iCheked].done = true;
        } else {
            this.tasks[iCheked].done = false;
        }
    }
  }
}).mount('#app')




