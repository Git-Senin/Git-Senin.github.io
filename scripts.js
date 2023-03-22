
class user_data
{    
    constructor(name, date, price){
        this.name = name;
        this.date = date;
        this.price = price > 0 ? price : 0.00;
    }
}

let table_data = []
let table_sorting = {
    name: false,
    date: false,
    price: false
}

function addItem(){
    const name = document.querySelector("#name").value;
    const date = document.querySelector("#date").value;
    const price = document.querySelector("#price").value;

    const data = new user_data(name, date, price);
    table_data.push(data);
    
    AddTableRow(data);
}
function AddTableRow(data){
    // Get Table
    const table_body = document.querySelector(".expense_table tbody");

    // Create Data cells
    let name = document.createElement("td");
    let date = document.createElement("td");
    let price = document.createElement("td");
    name.innerHTML = data.name == '' ? "N/A" : data.name;
    date.innerHTML = data.date == '' ? "N/A" : data.date;
    price.innerHTML = data.price == '' ? "0" : `$${data.price}`;

    // Append Data Cells
    const tr = document.createElement("tr");
    tr.appendChild(name);
    tr.appendChild(date);
    tr.appendChild(price);

    // Append
    table_body.appendChild(tr);
}
function ClearTableRows(){
    const table_body = document.querySelector(".expense_table tbody");
    table_body.innerHTML = "";
}
function GetTableRows(){
    for(const i in table_data){
        AddTableRow(table_data[i]);
    }
}
function SortNamesAscend(){
    if(table_data.length < 2) 
    return;

    let i, j, min;
    for(i = 0; i < table_data.length - 1; i++)
    {
        min = i;
        for(j = i+1; j < table_data.length; j++)
        {   
            if(table_data[j].name.localeCompare(table_data[min].name) < 0)
                min = j;
        }
        if (min != i)
            Swap(min, i);
    }
}
function SortNamesDescend(){
    if(table_data.length < 2) 
        return;

    let i, j, min;
    for(i = 0; i < table_data.length - 1; i++)
    {
        min = i;
        for(j = i+1; j < table_data.length; j++)
        {   
            if(table_data[j].name.localeCompare(table_data[min].name) > 0)
                min = j;
        }
        if (min != i)
            Swap(min, i);
    }
}
function SortDatesAscend(){
    if(table_data.length < 2) 
    return;

    let i, j, min;
    for(i = 0; i < table_data.length - 1; i++)
    {
        min = i;
        for(j = i+1; j < table_data.length; j++)
        {   
            if(table_data[j].date.localeCompare(table_data[min].date) < 0)
                min = j;
        }
        if (min != i)
            Swap(min, i);
    }
}
function SortDatesDescend(){
    if(table_data.length < 2) 
    return;

    let i, j, min;
    for(i = 0; i < table_data.length - 1; i++)
    {
        min = i;
        for(j = i+1; j < table_data.length; j++)
        {   
            if(table_data[j].date.localeCompare(table_data[min].date) > 0)
                min = j;
        }
        if (min != i)
            Swap(min, i);
    }
}
function SortPriceAscend(){
    if(table_data.length < 2) 
    return;

    let i, j, min;
    for(i = 0; i < table_data.length - 1; i++)
    {
        min = i;
        for(j = i+1; j < table_data.length; j++)
        {   
            if(table_data[j].price > table_data[min].price)
                min = j;
        }
        if (min != i)
            Swap(min, i);
    }
}
function SortPriceDescend(){
    if(table_data.length < 2) 
    return;

    let i, j, min;
    for(i = 0; i < table_data.length - 1; i++)
    {
        min = i;
        for(j = i+1; j < table_data.length; j++)
        {   
            if(table_data[j].price < table_data[min].price)
                min = j;
        }
        if (min != i)
            Swap(min, i);
    }
}
function Swap(a, b){
    var temp = table_data[b];
    table_data[b] = table_data[a];
    table_data[a] = temp;
}

function ClearSortToggles(){
    for (const sort in table_sorting){
        table_sorting[sort] = false;
    }
}

function SortNameButton() {
    if(!table_sorting.name) {
        ClearSortToggles();
        SortNamesAscend(); 
        table_sorting.name = true;
    }
    else {
        ClearSortToggles();
        SortNamesDescend();
        table_sorting.name = false;
    }
    
    ClearTableRows();
    GetTableRows();
}
function SortDateButton(){
    if(!table_sorting.date) {
        ClearSortToggles();
        SortDatesAscend();
        table_sorting.date = true;
    }
    else {
        ClearSortToggles();
        SortDatesDescend();
        table_sorting.date = false;
    }
    ClearTableRows();
    GetTableRows();
}
function SortPriceButton(){
    if(!table_sorting.price) {
        ClearSortToggles();
        SortPriceAscend();
        table_sorting.price = true;
    }
    else {
        ClearSortToggles();
        SortPriceDescend();
        table_sorting.price = false;
    }
    ClearTableRows();
    GetTableRows();
}

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector("#add_btn button").onclick = addItem;

    document.querySelector("#name_btn").onclick = SortNameButton;
    document.querySelector("#date_btn").onclick = SortDateButton;
    document.querySelector("#price_btn").onclick = SortPriceButton;
    
})
 
function consoleLogTable() {
    console.log(`Printing Data = ${table_data.length}`);
    for(const i in table_data){
        console.log(table_data[i]);
    }
}


var debugN = 1;
function DebugButton() {
    for(let i = debugN; i < debugN + 6; i++){
        table_data.push({name:String.fromCharCode('a'.charCodeAt(0)+i),date:`${2003-i}`,price:1+i});
        AddTableRow({name:String.fromCharCode('a'.charCodeAt(0)+i),date:`${2003-i}`,price:1+i});
    }
    debugN += 6;
}