$('.goods__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});


$('.bouquet__form').on('click', '.btn__hidden_1', function(e){
    e.preventDefault();
    let newAttr = $('.bouquet__form_name').attr('type') == 'password' ? 'text' : 'password';
    let newImage = newAttr == "password" ? "img/eye-02.svg" : "img/eye-01.svg";
    $('.bouquet__form_name').attr('type', newAttr);
    $('.btn__hidden_1').css('background-image', `url(${newImage})`);
});

$('.bouquet__form').on('click', '.btn__hidden_2', function(e){
    e.preventDefault();
    let newAttr = $('.bouquet__form_phone').attr('type') == 'password' ? 'text' : 'password';
    let newImage = newAttr == "password" ? "img/eye-02.svg" : "img/eye-01.svg";
    $('.bouquet__form_phone').attr('type', newAttr);
    $('.btn__hidden_2').css('background-image', `url(${newImage})`);
});

$('.basket__counter .counter__change').on('click', function () {
    let input = $(this).closest('.basket__counter').find('input');
    let value = parseInt(input.val()) || 0;
    if ($(this).hasClass('counter__decrement')) {
        if (value - 1 > 0)
            value = value - 1;
    }
    if ($(this).hasClass('counter__increment')) {
        value = value + 1;
    }
    input.val(value); 
});

$('.cart-description__counter .counter__change').on('click', function () {
    let input = $(this).closest('.cart-description__counter').find('input');
    let value = parseInt(input.val()) || 0;
    if ($(this).hasClass('counter__decrement')) {
        if (value - 1 > 0)
            value = value - 1;
    }
    if ($(this).hasClass('counter__increment')) {
        value = value + 1;
    }
    input.val(value); 
});
let menu = document.querySelector('.header-burger__icon');
menu.addEventListener('click', function() {
    document.querySelector('.footer-contacts').classList.toggle('none');
    document.querySelector('.main').classList.toggle('none');
})

$('.cart-images__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: '.cart__slider',
    fade: true,
    infinite: false
});

$('.cart__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    asNavFor: '.cart-images__list',
    focusOnSelect: true,
    infinite: false
});

$('.register__form').on('click', '.btn-register__hidden', function(e){
    e.preventDefault();
    let newAttr = $('#password').attr('type') == 'password' ? 'text' : 'password';
    let newImage = newAttr == "password" ? "img/eye-min.svg" : "img/eye-min-2.svg";
    $('#password').attr('type', newAttr);
    $('.btn-register__hidden').css('background-image', `url(${newImage})`);
});

$('.auth__form').on('click', '.btn-auth__hidden', function(e){
    e.preventDefault();
    let newAttr = $('#password').attr('type') == 'password' ? 'text' : 'password';
    let newImage = newAttr == "password" ? "img/eye-min.svg" : "img/eye-min-2.svg";
    $('#password').attr('type', newAttr);
    $('.btn-auth__hidden').css('background-image', `url(${newImage})`);
});