document.getElementById('savedLocations_goes_here').style.visibility = 'hidden';
document.getElementById('plannedLocationsBtn').addEventListener('click', function() {
    document.getElementById('plannedLocations_goes_here').style.visibility = 'visible';
    document.getElementById('savedLocations_goes_here').style.visibility = 'hidden';
});
document.getElementById('savedLocationsBtn').addEventListener('click', function() {
    document.getElementById('plannedLocations_goes_here').style.visibility = 'hidden';
    document.getElementById('savedLocations_goes_here').style.visibility = 'visible';
});