$(function() {
    console.log('ready!');
    $('.image-thumbnail-link').each(function() {
        $(this).on('click', function() {
            $("#video-popup-container").hide();
            img_src = $(this).data('image-src');
            console.log(img_src);
            caption = $(this).find('figcaption').first().text();
            console.log(caption);
            
            $('#photo-popup-img').on("load", function() {
                $('#photo-popup-caption').text(caption);
                $('#photo-popup-figure').show();
                $('#focus-popup').modal('show');
            }).attr('src', img_src);
            
        });
    });

    $('.video-thumbnail-link').each(function() {
        $(this).on('click', function() {
            $('#photo-popup-figure').hide();
            video_src = $(this).data('video-src');
            console.log(video_src);
            caption = $(this).find('figcaption').first().text();
            console.log(caption);

            $("#video-popup-container").show();
            $("#video").attr('src', video_src + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
            $('#focus-popup').modal('show');
        });
    });

    $('#focus-popup').on('hide.bs.modal', function (e) {
        // This will stop the video playing when modal is closed
        $("#video").attr('src', ""); 
    })         
});
