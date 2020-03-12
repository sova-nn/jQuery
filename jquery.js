(function($, color){
    jQuery.fn.myHover = function(options){
        options = $.extend({
            hoverColor:"red" //цвет элемента на который наведен курсор
        }, options);

        let change = function(){
            let nativeColor = $(this).data('color');
            $(this)
                .mouseenter( function(){
                    $(this).css("background-color", options.hoverColor);
                })
                .mouseleave( function(){
                    $(this).css("background-color",nativeColor);
                });
        };
        return this.each(change);
    };

    jQuery.fn.fadeLoad = function (elem, time) {
        const modifyEl = (this);
        const myLinear = async function(){
            const res = document.getElementById(elem.split('#')[1]);
            console.log(res);
            res.style.transition = 'opacity 5s ease-in-out 0s';
            res.classList.add('white');
            return res;
        };

        const elemToDelete = function () {
            setTimeout(() => modifyEl.remove(), 5000);
        };

        modifyEl
            .load(elem, function () {
                setTimeout(()=> myLinear().then(() => elemToDelete()), time);
            });
    }
})(jQuery);


