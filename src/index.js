import './scss/main.scss';
import 'bootstrap';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

let AllProducts = require('./modules/product-grid');
let navCatagory = require('./modules/nav-categorys');

jQuery.ajax({
    url: 'https://nit.tron.net.ua/api/category/list',
    method: 'get',
    dataType: 'json',
    success: function(json){
        json.forEach(product => $('.navbar-nav').append(navCatagory(product)));
    },
});



jQuery.ajax({
    url: 'https://nit.tron.net.ua/api/product/list',
    method: 'get',
    dataType: 'json',
    success: function(json){
        $('.product-grid').empty();
        json.forEach(product => $('.product-grid').append(AllProducts(product)));
    },
    error: function(xhr){
        alert("An error occured: " + xhr.status + " " + xhr.statusText);
    },
});
