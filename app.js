
$(document).ready(function(){
    let bannerCount = 0;
    setInterval(function(){
        hideAllBanner();
        changeBannerCount();
        changeBanner();
    }, 8000);

    function changeBanner(){
        $('.banner-item').each(function(idx){
            if(bannerCount == idx){
                $(this).addClass('active-banner');
            }
        });
    }

    function hideAllBanner(){
        $('.banner-item').each(function(idx){
            $(this).removeClass('active-banner');
        });
    }

    function changeBannerCount(){
        bannerCount++;
        if(bannerCount >= $('.banner-item').length){
            bannerCount = 0;
        }
    }

    // navigation bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(600);
    });

    // fixed navbar 
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 800){
            $('.navbar').addClass('fxd-navbar');
        } else {
            $('.navbar').removeClass('fxd-navbar');
        }
    });

});


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0ac75d47d6msh57b6a84a1d00a40p10affejsn7269f247459d',
		'X-RapidAPI-Host': 'horse-racing.p.rapidapi.com'
	}
};

fetch('https://horse-racing.p.rapidapi.com/query-races', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
