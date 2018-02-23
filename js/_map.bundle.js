(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
 function initMap() {
     var magna = { lat: -31.429805, lng: -64.1938951 },
     	 econom = { lat: -31.4355, lng: -64.2558592 },
     	 blas = { lat: -31.3386, lng: -64.256855 },
     	 bogota = { lat: 4.6239927, lng: -74.0062631 };

     var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 10,
         center: magna
     });
     var marker = new google.maps.Marker({
         position: magna,
         map: map
     });
     var marker1 = new google.maps.Marker({
         position: econom,
         map: map
     });
     var marker2 = new google.maps.Marker({
         position: blas,
         map: map
     });
     var marker3 = new google.maps.Marker({
         position: bogota,
         map: map
     });
 }
},{}]},{},[1]);
