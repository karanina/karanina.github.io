var clientFirstName;
var clientFamilyName;
var clientCheckInDate;
var clientCheckOutDate;
var clientCooking;
var clientRecreationEquipment;
var clientSwimmingExperience;
var clientSurfingExperience;
var clientSurfingLessons;
var clientBushExperience;
var clientTrackInformationPack;
var bookingNumberAdults;
var bookingNumberChildren;
var bookingNumberLodges;
var bookingColourWelcomePack;
var clientEmail;
var clientConservationAgreement;

function bookingBookingDetails () {
    clientFirstName = document.getElementById("firstName").value;
    clientLastName = document.getElementById("lastName").value;
    clientCheckInDate = document.getElementById("checkInDate").value;
    clientCheckOutDate = document.getElementById("checkOutDate").value;
    clientCooking = document.getElementById("cooking").value;
    clientClientRecreationEquipment = document.getElementById("recreationEquipment").value;
    if (clientFirstName == "" || clientLastName == "" || clientCheckInDate == "" || clientCheckOutDate == "") {
        alert("Please fill in all fields.");
    }
function bookingActivityExperience () {
    clientSwimmingExperience = document.getElementById("swimmingExperience").value;
    clientSurfingExperience = document.getElementById("surfingExperience").value;
    clientSurfingLessons = document.getElementById("surfingLessons").value;
    clientBushExperience = document.getElementById("bushExperience").value;
    clientTrackInformationPack;
}
}