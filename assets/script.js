const firstName = document.getElementById('first-name');
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
const popup = document.getElementById('popup');
let row;



subBtn.addEventListener('click', function(event){
    event.preventDefault();
    let tr = document.createElement('tr');
    let arrayInfo = [firstName.value, lastName.value, age.value, gender.value, date.value, email.value, address.value]
    
    if(age.value >= 14 && age.value <= 24){
        let td = document.createElement('td');
        let editIcon = document.createElement('i');

        arrayInfo.forEach((v=>{
            let td = document.createElement('td');
            td.innerText = v;
            tr.append(td);
        }))

        editIcon.classList.add('fa-solid', 'fa-pen-to-square');
        editIcon.setAttribute('onclick', 'openEditModal(this)')
        editIcon.addEventListener('click', function(event){
            openEditModal(event.target);
        })
        
        let deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa-solid', 'fa-trash');

        deleteIcon.addEventListener('click', function() {
            tr.remove();
        });

        td.appendChild(editIcon);
        td.appendChild(deleteIcon);
        tr.appendChild(td);

        alert('Student Added Successfully.')
    }
    else{
        alert('Your age must between 14 and 24 years.')
    }
    table.append(tr);
})


function openPopup(){
    popup.classList.add('open-popup');
}

function closePopup(){
    popup.classList.remove('open-popup');
}

function openEditModal(icon) {
    row = icon.parentNode.parentNode;
    if (row) {
        let firstName1 = row.cells[0].innerText;
        let lastName1 = row.cells[1].innerText;
        let age1 = row.cells[2].innerText;
        let gender1 = row.cells[3].innerText;
        let date1 = row.cells[4].innerText;
        let email1 = row.cells[5].innerText;
        let address1 = row.cells[6].innerText;

        document.getElementById("edit-first-name").value = firstName1;
        document.getElementById("edit-last-name").value = lastName1;
        document.getElementById("edit-age").value = age1;
        document.getElementById("edit-gender").value = gender1;
        document.getElementById("edit-date").value = date1;
        document.getElementById("edit-email").value = email1;
        document.getElementById("edit-address").value = address1;

        openPopup();
    } else {
        console.error("Row does not exist");
}
}

function saveEdit() {
    if (row) {
        let firstName = document.getElementById("edit-first-name").value;
        let lastName = document.getElementById("edit-last-name").value;
        let age = document.getElementById("edit-age").value;
        let gender = document.getElementById("edit-gender").value;
        let date = document.getElementById("edit-date").value;
        let email = document.getElementById("edit-email").value;
        let address = document.getElementById("edit-address").value;

        row.cells[0].innerText = firstName;
        row.cells[1].innerText = lastName;
        row.cells[2].innerText = age;
        row.cells[3].innerText = gender;
        row.cells[4].innerText = date;
        row.cells[5].innerText = email;
        row.cells[6].innerText = address;

        closePopup();
    } else {
        console.error("Row is not defined");
    }
}
