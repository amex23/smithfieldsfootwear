$( document ).ready(function() {
    const unsplash_api_key = 'zw1H9ansDEzElxgjNt0GFaI6Sbvno5NdPH1kWpUouro'
    const unsplash_url = 'https://api.unsplash.com'
    $.get( `${unsplash_url}/photos/random?client_id=${unsplash_api_key}`, function( data ) {
        $('.image-with-text__media img').removeAttr('srcset')
        $('.image-with-text__media img').attr('src', data.urls.full)
    });
});