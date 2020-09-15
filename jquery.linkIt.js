/*
* Name: LinkIt
* Author: Shankaragouda G
* version: 0.1.0
* liensce: MIT
*/

(function($){
    $.fn.linkIt = function(options) {
        // alert(this.html());
        //Deafult settings
        var settings = $.extend({
            href: null,
            text: null,
            target: '_self'
        }, options);

        // alert(settings.whatever)

        //Validation
        if(settings.href === null) {
            console.log('You need an href options for LinkIt to work');
            return this;
        }

        return this.each(function() {
            var object = $(this);

            if(settings.text === null) {
                settings.text = object.text();
            }
            object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
        })

    }
}(jQuery));