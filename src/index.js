import './scss/main.scss';
import 'bootstrap';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

let navCatagory = require('./modules/category-html');
jQuery.ajax({
    url: 'https://nit.tron.net.ua/api/category/list',
    method: 'get',
    dataType: 'json',
    success: function(json){
        console.table(json);
        json.forEach(product => $('.navbar-nav').append(navCatagory(product)));
    },
    error: function(xhr){
        alert("An error occured: " + xhr.status + " " + xhr.statusText);
    },
});
