document.addEventListener("DOMContentLoaded", function() {
    console.log('ready!');

    const focusPopup = document.getElementById('focus-popup');

    const showModal = function() {
        if (typeof bootstrap !== 'undefined') {
            let modal = bootstrap.Modal.getInstance(focusPopup);
            if (!modal) {
                modal = new bootstrap.Modal(focusPopup);
            }
            modal.show();
        } 
    };

    document.querySelectorAll('.image-thumbnail-link').forEach(function(link) {
        link.addEventListener('click', function() {
            document.getElementById("video-popup-container").style.display = 'none';
            const img_src = this.getAttribute('data-image-src');
            console.log(img_src);
            
            const figcaption = this.querySelector('figcaption');
            const caption = figcaption ? figcaption.textContent : '';
            console.log(caption);
            
            const popupImg = document.getElementById('photo-popup-img');
            popupImg.onload = function() {
                document.getElementById('photo-popup-caption').textContent = caption;
                document.getElementById('photo-popup-figure').style.display = 'block';
                showModal();
            };
            popupImg.setAttribute('src', img_src);
        });
    });

    document.querySelectorAll('.video-thumbnail-link').forEach(function(link) {
        link.addEventListener('click', function() {
            document.getElementById('photo-popup-figure').style.display = 'none';
            const video_src = this.getAttribute('data-video-src');
            console.log(video_src);
            
            const figcaption = this.querySelector('figcaption');
            const caption = figcaption ? figcaption.textContent : '';
            console.log(caption);

            document.getElementById("video-popup-container").style.display = 'block';
            document.getElementById("video").setAttribute('src', video_src + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"); 
            showModal();
        });
    });

    if (focusPopup) {
        focusPopup.addEventListener('hide.bs.modal', function (e) {
            // This will stop the video playing when modal is closed
            const video = document.getElementById("video");
            if (video) {
                video.setAttribute('src', ""); 
            }
        });
    }
});
