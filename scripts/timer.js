window.onload = function(){

  var chairTimer = byId('chairTimer');
  var faveTimer = byId('favoriteTimer')
  var chairDay = new Date("10/08/2019 17:15")
  var favoriteDay = new Date("11/18/2019 17:00")
  if(faveTimer != null)
    tick(favoriteDay, faveTimer, 0);
  if(chairTimer != null)
    tick(chairDay, chairTimer, 0);

  function tick(date, timer, time) {
    setTimeout(function() {
      var diff = dateDiff(new Date(), date);
      timer.innerHTML = "Days: "+ diff.d +' | Hrs: '+  diff.h +' | Min: '+  diff.m + ' | Sec: '+ (diff.s < 10? "0"+diff.s:diff.s)   
      tick(date, timer, 1000);
    },time)
  };



  function dateDiff( d1, d2 ) {
    var diff = d2 - d1; 
    return isNaN( diff ) ? NaN : {
        diff : diff,
        ms : Math.floor( diff            % 1000 ),
        s  : Math.floor( diff /     1000 %   60 ),
        m  : Math.floor( diff /    60000 %   60 ),
        h  : Math.floor( diff /  3600000 %   24 ),
        d  : Math.floor( diff / 86400000        )
    };
  }
  

  function byId(a) {
    return document.getElementById(a);
  };
};
