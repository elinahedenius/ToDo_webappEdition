
var fabToggled = false;

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

//Action button
//function toggleAddOptions(){
//  var addOptions = document.getElementById('addOptions');
//  if (addOptionsLoaded){
//    addOptions.style.display ='none';
//    document.getElementById('fab').style.transform = 'rotate(0deg)';
//    addOptionsLoaded = false;
//  }
//  else {
//    addOptions.style.display = 'flex';
//    document.getElementById('fab').style.transform = 'rotate(45deg)';
//    addOptionsLoaded = true;
//  }
//}
