const expenseform = document.getElementById('expenseform')
const expenselist = document.getElementById('expenselist')

expenseform.addEventListener('submit',function(event){

    event.preventDefault();
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;

    if(document && category && !isNaN
    (amount)){
        const newRow = document.createElement('tr')

        newRow.innerHTML = `<td>${description}</td>
        <td>${category}</td>

        <td>${amount}</td>` ;
        expenselist.appendChild(newRow)   


    document.getElementById('description').value=''
    document.getElementById('category').value=''
    document.getElementById('amount').value=''
    
}
else{
    alert('Please fill out all fields with valid data')
}
    

})


