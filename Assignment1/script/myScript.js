var clientFirstName;
var clientFamilyName;
var clientCheckInDate;
var clientCheckOutDate;
var clientCooking;
var clientRecreationEquipment;

function bookingBookingDetails () {
    clientFirstName = document.getElementById("firstName").value;
    clientLastName = document.getElementById("lastName").value;
    clientCheckInDate = document.getElementById("checkInDate").value;
    clientCheckOutDate = document.getElementById("checkOutDate").value;
    clientCooking = document.getElementById("cooking").value;
    clientClientRecreationEquipment = document.getElementById("recreationEquipment").value;
    if (clientFirstName == "" || clientLastName == "" || clientCheckInDate == "" || clientCheckOutDate == "") {
        window.alert("Please fill in all fields.");
    }
}