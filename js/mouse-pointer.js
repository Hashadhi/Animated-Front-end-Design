var tmrId = null;

var elmCircle = document.createElement('div');

elmCircle.classList.add('pointer');
elmCircle.classList.add('hide');
document.body.append(elmCircle);

addEventListener('mousemove', function(e){

    if(tmrId){
        clearTimeout(tmrId);
        tmrId = null;
    }

    tmrId = this.setTimeout(function(){
        elmCircle.classList.add('hide');
    }, 2000);

    if(elmCircle.classList.contains('hide')){
        elmCircle.classList.remove('hide');
    }

    var xPosition = e.pageX;
    var yPosition = e.pageY;

    elmCircle.style.left = xPosition + 'px';
    elmCircle.style.top = yPosition + 'px';


});