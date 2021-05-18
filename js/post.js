$(function() {

	// 스크롤 감지
    var didScroll = false;
		
    $(window).on('scroll', function() { didScroll = true; });
    
    setInterval(function() {
        var bottomHeight = $(window).scrollTop() + $(window).height() + 600;
        var docHeight = $(document).height();

        if (didScroll) {
            didScroll = false;
            if (bottomHeight > docHeight) infiniteScrollContent();
        }
    }, 250);
    
    function infiniteScrollContent() {
      
        var scrollcon = '';
        for (var k = 0; k < 4; k++) {
            scrollcon += '<div class="product-item"><strong>상품이름</strong></div>';
        }			
        $("#productScroll").append(scrollcon);
    }
});


$(function () {
   $('.panel-google-plus > .panel-footer > .input-placeholder, .panel-google-plus > .panel-google-plus-comment > .panel-google-plus-textarea > button[type="reset"]').on('click', function(event) {
        var $panel = $(this).closest('.panel-google-plus');
            $comment = $panel.find('.panel-google-plus-comment');
            
        $comment.find('.btn:first-child').addClass('disabled');
        $comment.find('textarea').val('');
        
        $panel.toggleClass('panel-google-plus-show-comment');
        
        if ($panel.hasClass('panel-google-plus-show-comment')) {
            $comment.find('textarea').focus();
        }
   });
   $('.panel-google-plus-comment > .panel-google-plus-textarea > textarea').on('keyup', function(event) {
        var $comment = $(this).closest('.panel-google-plus-comment');
        
        $comment.find('button[type="submit"]').addClass('disabled');
        if ($(this).val().length >= 1) {
            $comment.find('button[type="submit"]').removeClass('disabled');
        }
   });
});