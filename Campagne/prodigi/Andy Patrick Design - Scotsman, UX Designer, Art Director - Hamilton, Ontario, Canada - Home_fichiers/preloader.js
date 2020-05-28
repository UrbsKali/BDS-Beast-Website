$(window).load(function(){
            setTimeout(function(){
                $('#preloader').velocity({
                    opacity : 0.5,
                    translateY: "-80px"
                }, {
                    duration: 1,
                    complete: function(){
                    $('#hola').velocity({
                    translateY : "-100%"
                }, {
                    duration: 6700,
                    easing: [0.7,0,0.3,1],
                    complete: function(){
                        $('.home').addClass('animate-border divide');
                    }
                })  
                    }
                })
            },0.1)
        })