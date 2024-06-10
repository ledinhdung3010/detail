//hover img-item
$('.small-image').hover(function() {
    var newSrc = $(this).attr('src');
    $('.img-product__big').attr('src', newSrc);
    $('.small-image').removeClass('selected-img');
    $(this).addClass('selected-img');
});
//click img-item
$('.small-image').click(function() {
    var newSrc = $(this).attr('src');
    $('.img-product__big').attr('src', newSrc);
    $('.small-image').removeClass('selected-img');
    $(this).addClass('selected-img');
});
// click prev next img
$(document).ready(function() {
    var thumbnails = $('#thumbnails');
    var prevBtn = $('.prev-img__product');
    var nextBtn = $('.next-img__product');
    var totalSlides = $('.thumbnail').length;
    var slideWidth = $('.thumbnail').outerWidth(true);
    var currentSlide = 0;
    var slidesVisible = 4; // Default number of slides visible

    // Function to update the number of visible slides based on screen size
    function updateSlidesVisible() {
        if ($(window).width() <= 480) { // Assuming Android screen size
            slidesVisible = 2;
        } else {
            slidesVisible = 4;
        }
    }

    // Initial call to set the correct number of visible slides
    updateSlidesVisible();
    
    // Update the number of visible slides on window resize
    $(window).resize(function() {
        updateSlidesVisible();
        showSlides();
    });

    // Function to show slides
    function showSlides() {
        thumbnails.children('.thumbnail').hide();
        thumbnails.children('.thumbnail').slice(currentSlide, currentSlide + slidesVisible).show();
    }

    // Initial display of slides
    showSlides();

    // Previous button click event
    prevBtn.click(function() {
        if (currentSlide > 0) {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlides();
        }
    });

    // Next button click event
    nextBtn.click(function() {
        if (currentSlide < totalSlides - slidesVisible) {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlides();
        }
    });
});

// selected color
$('.select-color').click(function(){
    if ($(this).hasClass('selected')) {
        // Nếu phần tử đã có lớp active, hãy xóa nó
        $(this).removeClass('selected');
    } else {
        // Nếu phần tử chưa có lớp active, hãy thêm nó và xóa lớp active từ tất cả các phần tử khác
        $('.select-color').removeClass('selected');
        $(this).addClass('selected');
    }
});
// select size
$('.select-size').click(function(){
    if ($(this).hasClass('selected')) {
        // Nếu phần tử đã có lớp active, hãy xóa nó
        $(this).removeClass('selected');
    } else {
        // Nếu phần tử chưa có lớp active, hãy thêm nó và xóa lớp active từ tất cả các phần tử khác
        $('.select-color').removeClass('selected');
        $(this).addClass('selected');
    }
});
//quantity product
$(".increase").click(function(){
    var value = parseInt($('.quantity-product__buy').val());
    $('.quantity-product__buy').val(value + 1);
});

$(".reduce").click(function(){
    var value = parseInt($('.quantity-product__buy').val());
    if(value > 1) {
        $('.quantity-product__buy').val(value - 1);
    }
});
// selected page
$('.page-item').on('click', function() {
    $('.page-item').removeClass('selected');
    $(this).addClass('selected');
});
$('.container-review__product .btn-prev').on('click', function() {
    var selectedBtn = $('.page-item.selected');
    var prevBtn = selectedBtn.prev('.page-item');
    if (prevBtn.length > 0) {
        selectedBtn.removeClass('selected');
        prevBtn.addClass('selected');
    }
});
//btn-next
$('.container-review__product .btn-next').on('click', function() {
    var selectedBtn = $('.page-item.selected');
    var nextBtn = selectedBtn.next('.page-item');
    if (nextBtn.length > 0) {
        selectedBtn.removeClass('selected');
        nextBtn.addClass('selected');
    }
});
// slider other product
$(document).ready(function() {
    var thumbnails = $('#products');
    var prevBtn = $('.prev-product');
    var nextBtn = $('.next-product');
    var totalSlides = $('.product-item .inf-product').length;
    var slideWidth = $('.product-item .inf-product').outerWidth(true);
    var currentSlide = 0;
    var slidesVisible = 4; // Default number of slides visible

    // Function to update the number of visible slides based on screen size
    function updateSlidesVisible() {
        if ($(window).width() <= 767) { // Assuming Android screen size
            slidesVisible = 2;
        } else {
            slidesVisible = 4;
        }
    }

    // Initial call to set the correct number of visible slides
    updateSlidesVisible();
    
    // Update the number of visible slides on window resize
    $(window).resize(function() {
        updateSlidesVisible();
        showSlides();
    });

    // Function to show slides
    function showSlides() {
        thumbnails.children('.product-item .inf-product').hide();
        thumbnails.children('.product-item .inf-product').slice(currentSlide, currentSlide + slidesVisible).show();
    }

    // Initial display of slides
    showSlides();

    // Previous button click event
    prevBtn.click(function() {
        if (currentSlide > 0) {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlides();
        }
    });

    // Next button click event
    nextBtn.click(function() {
        if (currentSlide < totalSlides - slidesVisible) {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlides();
        }
    });
});




