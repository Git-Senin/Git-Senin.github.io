
class user_data{

    constructor(name, date, amount){
        this.name = name;
        this.date = date;
        this.amount = amount;
    }
}

let table_data = []

function addItem(){
    const name = document.querySelector("#name").value;
    const date = document.querySelector("#date").value;
    const price = document.querySelector("#price").value;

    const data = new user_data(name, date, price);
    table_data.push(data);

    consoleLogTable();
}
function consoleLogTable() {
    console.log(`Printing Data = ${table_data.length}`);
    for(const i in table_data){
        console.log(table_data[i]);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').onclick = addItem;
})

