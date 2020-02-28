
var fabToggled = false;
var popupShowing = false;

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

var currentViewContainer = document.getElementById('currentViewContainer');
var currentView = 'current view';

function reflectCurrentView(){
  currentViewContainer.innerHTML = currentView;
};

var view = document.getElementsByClassName('view');
var viewBtn = document.getElementsByClassName('viewBtn');

//Changes view to the one clicked in the navbar
function changeView(e){
  var name = e.getAttribute('id');
  var toOpen = name + 'View';
  currentViewContainer.innerHTML = e.innerHTML;
  for (var i = 0; i < view.length; i++) {
    view[i].style.display = 'none';
  }
  document.getElementById(toOpen).style.display = 'grid';
}

//litens for clicks on the navbar buttons
document.addEventListener('click', function(evt){
  if (evt.target.className === 'viewBtn'){
    changeView(evt.target);
  }
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'left',
    hoverEnabled: false
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.timepicker');
  var instances = M.Timepicker.init(elems);
});

function showPopup(e){
  document.getElementById(e.getAttribute('id') + 'Popup').style.display = 'flex';
  popupShowing = true;
  return;
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

function save(e){
  e.style.display = 'none';
}

function cancel(e){
  e.style.display = 'none';
}
