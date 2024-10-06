$(document).ready(function() {
    $('#contactButton').on('click', function() {
        $('#contactModal').modal('show');
    });

    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        let formData = {
            email: $('#email').val(),
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            termsCheck: $('#termsCheck').is(':checked')
        };

        $.ajax({
            type: 'POST',
            url: 'https://app.getform.io/forms/azylwylb',
            data: formData,
            success: function(response) {
                alert('Form submitted successfully!');
                $('#contactModal').modal('hide');
                $('#contactForm')[0].reset();
            },
            error: function(error) {
                alert('There was an error submitting the form.');
            }
        });
    });

    $('#projectList a').on('click', function(e) {
        e.preventDefault();
        let imageSrc = $(this).data('image');
        $('#projectImage').attr('src', imageSrc);
    });

    $('.card-img-top').hover(function() {
        const originalSrc = $(this).attr('src');
        const hoverSrc = $(this).data('hover');
        $(this).attr('src', hoverSrc);
        $(this).data('hover', originalSrc);
    }, function() {
        const hoverSrc = $(this).attr('src');
        const originalSrc = $(this).data('hover');
        $(this).attr('src', originalSrc);
        $(this).data('hover', hoverSrc);
    });
});

function changeImage(imageSrc) {
    document.getElementById('mainImage').src = imageSrc;
}
