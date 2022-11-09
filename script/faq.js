var acc = document.getElementsByName('accordion');
var i;
var len = acc.length;
for(i = 0; i < len; i++){
    acc[i].addEventListener('click', function(){
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxheight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })
}