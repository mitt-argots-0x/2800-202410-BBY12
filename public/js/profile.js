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
document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = 'Light Mode';
        } else {
            darkModeToggle.textContent = 'Dark Mode';
        }
    });
});

function unsaveLocation(location) {
    window.location.href = '/unsaveLocation?location=' + location;
}