	  $(document).ready(function() {
 $(".imghide").hover(
                function() {
                            $(this).addClass('hiddenbox');
                        },
                        function() {
                            $(this).find('img').stop(true, true).fadeIn('fast');
                            $(this).find('.hiddenbox').stop(true, true).fadeOut('fast');
                        }
                );
}