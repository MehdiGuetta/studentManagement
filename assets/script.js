const fisrtName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const age = document.getElementById('age');
const gender = document.getElementById('gender');
const date = document.getElementById('date');
const email = document.getElementById('email');
const address = document.getElementById('address');
const subBtn = document.getElementById('submit');
const table  = document.getElementById('table');
const deleteIcon = document.getElementById('delete-icon');
const editIcon = document.getElementById('edit-icon');

subBtn.addEventListener('click', function(event){
    event.preventDefault()
    let tr = document.createElement('tr');
    let arrayInfo = [fisrtName.value, lastName.value, age.value, gender.value, date.value, email.value, address.value]
    
    if(age.value >= 14 && age.value <= 24){
        arrayInfo.forEach((v=>{
            let td = document.createElement('td');
            td.innerText = v;

            tr.append(td);
        }))
        let actionTd = document.createElement('td');
        let editIcon = document.createElement('i');
            editIcon.classList.add('fa-solid', 'fa-pen-to-square');
            editIcon.addEventListener('click', function() {
                arrayInfo
            });
            actionTd.appendChild(editIcon);

        let deleteIcon = document.createElement('i');
            deleteIcon.classList.add('fa-solid', 'fa-trash');
            deleteIcon.addEventListener('click', function() {
                tr.remove();
            });
            actionTd.appendChild(deleteIcon);
            
            tr.appendChild(actionTd);
        alert('Student Added Successfully.')
    }
    else{
        alert('Your age must be between 14 and 24 years.')
    }
    table.append(tr);
})