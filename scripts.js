
class user_data{

    constructor(name, date, amount){
        this.name = name
        this.date = date
        this.amount = amount
    }
}

let table_data = []

function addItem(){
    table_data.push(new user_data("Jack", "2/15/2020", "$0.54"))
}

function consoleLogTable() {
    console.log(`Printing Data = ${table_data.length}`)
    for(const i in table_data){
        console.log(table_data[i])
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').onclick = addItem
})