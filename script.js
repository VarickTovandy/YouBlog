// Filter js
$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter')
        if (value == 'all'){
            $('.post-box').show('1000')
        }
        else {
            console.log(value)
            $('.post-box').not('.' + value).hide('1000')
            $('.post-box').filter('.' + value).show('1000')
        }
    })
    // Add active class to buttons
    $(".filter-item").click(function(){
        $(this).addClass("active-filter").siblings().removeClass('active-filter');
    })
})
// Header Background on scroll
let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)
})