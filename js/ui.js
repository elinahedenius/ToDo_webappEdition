
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

function changeView(e){
  var name = e.getAttribute('id');
  var toOpen = name + 'View';
  currentViewContainer.innerHTML = e.innerHTML;
  for (var i = 0; i < view.length; i++) {
    view[i].style.display = 'none';
  }
  document.getElementById(toOpen).style.display = 'grid';
}

function hello(){
  alert('hello');
}

document.addEventListener('click', function(evt){
  if (evt.target.className === 'btn-flat'){
    changeView(evt.target);
  }
}, false);
