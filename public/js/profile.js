document.getElementById('savedLocations_goes_here').style.visibility = 'hidden';
// document.getElementById('plannedLocationsBtn').addEventListener('click', function() {
//     document.getElementById('plannedLocations_goes_here').style.visibility = 'visible';
//     document.getElementById('savedLocations_goes_here').style.visibility = 'hidden';
// });
document.getElementById('savedLocationsBtn').addEventListener('click', function() {
    // document.getElementById('plannedLocations_goes_here').style.visibility = 'hidden';
    if(document.getElementById('savedLocations_goes_here').style.visibility == 'visible'){
        document.getElementById('savedLocations_goes_here').style.visibility = 'hidden';
    } else {
        document.getElementById('savedLocations_goes_here').style.visibility = 'visible';
    }
});


icon = document.getElementById("dropdownIcon");

function toggleIcon(){
    icon.classList.toggle("fa-caret-up");
    icon.classList.toggle("fa-caret-down");
};

document.getElementById('chooseProfilepic').style.display = 'none';
function changeProfilePic() {
    if (document.getElementById('chooseProfilepic').style.display == 'grid')
        document.getElementById('chooseProfilepic').style.display = 'none';
    else{
        document.getElementById('chooseProfilepic').style.display = 'grid';
    }
}

function unsaveLocation(location) {
    window.location.href = '/unsaveLocation?location=' + location;
}