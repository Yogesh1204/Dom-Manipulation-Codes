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
  localStorage.setItem("User Details", JSON.stringify(user_details));
  // console.log(localStorage.getItem("user details"));
  let user_Detail_deserial = JSON.parse(localStorage.getItem("User Details"));
  console.log(localStorage);
}