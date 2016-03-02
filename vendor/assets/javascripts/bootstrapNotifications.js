(function($){

    var initialized = false,
        init = function() {
            if ($('#bootstrap-notification-bin').length == 0) {
                $('head').append(
                    '<style>' +
                    '#bootstrap-notification-bin {' +
                    '    width: 20%;' +
                    '    position: fixed;' +
                    '    color: #666;' +
                    '    right: 40%;' +
                    '    bottom: 10%;' +
                    '    text-align:center;'+
                    '}' +
                    '#bootstrap-notification-bin > .note {' +
                    '   position: relative;' +
                    '   margin-top: 10px;' +
                    '   z-index: 1000;' +
                    '}' +
                    '</style>' 
                );
                $('body').prepend('<div id="bootstrap-notification-bin"></div>');
            }
            initialized = true;
        },
        makeToken = function(n){
            if(!n){
                n = 10;
            }
            var text = '',
                possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for(var i=0; i < n; i++){
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        };

    /*
     * success - green
     * info - blue
     * warning - yellow
     * danger - red
     * */
    $.notify = function(text, status, dismissTime){
        if(!initialized){
            init();
        }
        if(!text){
            text = 'Boop.';
        }
        if(!status){
            status = 'success';
        }
        if(!dismissTime){
            dismissTime = 5000;
        }
        var token = makeToken();
        $('#bootstrap-notification-bin').append(
            '<div class="row note alert alert-' + status + ' alert-dismissible" id="' + token + '">' +
            '<div>' +
            text +
            '</div>' +
            '</div>'
        );
        setTimeout(function(){
            $('#' + token).animate({'opacity': '0.01'}).slideUp(500, function(){ $(this).remove() });
        }, dismissTime);
        return this;
    };

})(jQuery);