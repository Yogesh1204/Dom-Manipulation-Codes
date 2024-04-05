function handleFormSubmit(event) {
    event.preventDefault();
    var name = event.target.username.value;
    var email = event.target.email.value;
    var phonenumber = event.target.phone.value;
    let user_details = {
      username: name,
      email: email,
      phone: phonenumber
    }
    localStorage.setItem(email , JSON.stringify(user_details));
    // console.log(localStorage.getItem("email"));
    let user_Detail_deserial = JSON.parse(localStorage.getItem(email));
    console.log(localStorage);

    const li = document.createElement('li');
    const liText = document.createTextNode(name + " - "+ email + " - " + phonenumber);
    li.appendChild(liText);
    const ul = document.querySelector("ul");
    ul.appendChild(li);
    const btn = document.createElement('button');
    const btnText = document.createTextNode("Delete");
    btn.appendChild(btnText);
    li.appendChild(btn);
    btn.addEventListener('click', function(event){
        event.preventDefault();
        localStorage.removeItem(email);
        li.remove();
    })

    const EditBtn = document.createElement('button');
    const EditText = document.createTextNode("Edit");
    EditBtn.appendChild(EditText);
    li.appendChild(EditBtn);
    EditBtn.addEventListener('click', function(event){
        event.preventDefault();
        localStorage.removeItem(email);
        li.remove();
        document.getElementById("username").value = name;
        console.log(document.getElementById("username").value);
        document.getElementById("email").value = email;
        document.getElementById("phone").value = phonenumber;
    })

}
//   module.exports = handleFormSubmit;