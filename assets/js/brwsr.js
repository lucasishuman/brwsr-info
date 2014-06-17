/*global console, Modernizr, _*/

/*
@codekit-prepend "libs/underscore-min.js";
@codekit-prepend "libs/modernizr-2.8.2.js";
*/

;(function($, document, window, undefined) {

	"use strict";

	var app = {

		EMAIL_TITLE: 'BRWSR.INFO',

		data: null,
		
		$btnEmail: null,
		$results: null,
		$output: null,

		init: function() {

			var t = this;

			t.$results = $('.results');
			t.$output = $('.output');
			t.$btnEmail = $('.btn-email');


			// btn events ---

			t.$btnEmail.click(function() {
				t.refresh();
				t.$btnEmail.attr('href', 'mailto:?subject=' + escape(t.EMAIL_TITLE) + '&body=' + escape(t.data.join("\n")));
			});


			// resize ---

			$(window).resize(_.debounce(function() {
				t.refresh();
				t.show();
			}, 500));


			// show it ---

			t.refresh();
			t.show();

		},

		refresh: function() {

			var t = this,
				i,
				len,
				plugin;

			t.data = [];

			// Meta
			t.data.push('Created: ' + (new Date()).toString());
			
			// native
			t.data.push('---');
			t.data.push('User Agent: ' + navigator.userAgent);
			t.data.push('Platform: ' + navigator.platform);
			t.data.push('Cookie Enabled: ' + navigator.cookieEnabled);
			t.data.push('Device Pixel Ratio: ' + window.devicePixelRatio);
			t.data.push('Screen Pixel Depth: ' + screen.pixelDepth);
			t.data.push('Screen Color Depth: ' + screen.colorDepth);
			t.data.push('Screen Width: ' + screen.width);
			t.data.push('Screen Height: ' + screen.height);
			t.data.push('Window Width: ' + $(window).width());
			t.data.push('Window Height: ' + $(window).height());

			// CSS
			t.data.push('---');
			t.data.push('CSS FEATURES');
			t.data.push('@font-face: ' + Modernizr.fontface);
			t.data.push('background-size: ' + Modernizr.backgroundsize);
			t.data.push('border-image: ' + Modernizr.borderimage);
			t.data.push('border-radius: ' + Modernizr.borderradius);
			t.data.push('box-shadow: ' + Modernizr.boxshadow);
			t.data.push('CSS 2D Transforms: ' + Modernizr.csstransforms);
			t.data.push('CSS 3D Transforms: ' + Modernizr.csstransforms3d);
			t.data.push('CSS Animations: ' + Modernizr.cssanimations);
			t.data.push('CSS Columns: ' + Modernizr.csscolumns);
			t.data.push('CSS Gradients: ' + Modernizr.cssgradients);
			t.data.push('CSS Reflections: ' + Modernizr.cssreflections);
			t.data.push('CSS Transitions: ' + Modernizr.csstransitions);
			t.data.push('Flexible Box Model: ' + Modernizr.flexbox);
			t.data.push('Generated Content: ' + Modernizr.generatedcontent);
			t.data.push('hsla(): ' + Modernizr.hsla);
			t.data.push('Multiple backgrounds: ' + Modernizr.multiplebgs);
			t.data.push('opacity: ' + Modernizr.opacity);
			t.data.push('rgba(): ' + Modernizr.rgba);
			t.data.push('text-shadow: ' + Modernizr.textshadow);

			// HTML
			t.data.push('---');
			t.data.push('HTML5 FEATURES');
			t.data.push('applicationCache: ' + Modernizr.applicationcache);
			t.data.push('Canvas: ' + Modernizr.canvas);
			t.data.push('Canvas Text: ' + Modernizr.canvastext);
			t.data.push('Cross-window Messaging: ' + Modernizr.postmessage);
			t.data.push('Drag and Drop: ' + Modernizr.draganddrop);
			t.data.push('hashchange Event: ' + Modernizr.hashchange);
			t.data.push('History Management: ' + Modernizr.history);
			t.data.push('HTML5 Audio (ogg): ' + (Modernizr.audio.ogg || 'nope'));
			t.data.push('HTML5 Audio (mp3): ' + (Modernizr.audio.mp3 || 'nope'));
			t.data.push('HTML5 Audio (wav): ' + (Modernizr.audio.wav || 'nope'));
			t.data.push('HTML5 Audio (m2a): ' + (Modernizr.audio.m4a || 'nope'));
			t.data.push('HTML5 Video (ogg): ' + (Modernizr.video.ogg || 'nope'));
			t.data.push('HTML5 Video (WebM): ' + (Modernizr.video.webm || 'nope'));
			t.data.push('HTML5 Video (H.264): ' + (Modernizr.video.h264 || 'nope'));
			t.data.push('IndexedDB: ' + Modernizr.indexeddb);

			t.data.push('Input attr autocomplete: ' + Modernizr.input.autocomplete);
			t.data.push('Input attr autofocus: ' + Modernizr.input.autofocus);
			t.data.push('Input attr list: ' + Modernizr.input.list);
			t.data.push('Input attr placeholder: ' + Modernizr.input.placeholder);
			t.data.push('Input attr max: ' + Modernizr.input.max);
			t.data.push('Input attr min: ' + Modernizr.input.min);
			t.data.push('Input attr multiple: ' + Modernizr.input.multiple);
			t.data.push('Input attr pattern: ' + Modernizr.input.pattern);
			t.data.push('Input attr required: ' + Modernizr.input.required);
			t.data.push('Input attr step: ' + Modernizr.input.step);
			
			t.data.push('Input type color: ' + Modernizr.inputtypes.color);
			t.data.push('Input type date: ' + Modernizr.inputtypes.date);
			t.data.push('Input type datetime: ' + Modernizr.inputtypes.datetime);
			t.data.push('Input type datetime-local: ' + Modernizr.inputtypes['datetime-local']);
			t.data.push('Input type email: ' + Modernizr.inputtypes.email);
			t.data.push('Input type month: ' + Modernizr.inputtypes.month);
			t.data.push('Input type number: ' + Modernizr.inputtypes.number);
			t.data.push('Input type range: ' + Modernizr.inputtypes.range);
			t.data.push('Input type search: ' + Modernizr.inputtypes.search);
			t.data.push('Input type tel: ' + Modernizr.inputtypes.tel);
			t.data.push('Input type time: ' + Modernizr.inputtypes.time);
			t.data.push('Input type url: ' + Modernizr.inputtypes.url);
			t.data.push('Input type week: ' + Modernizr.inputtypes.week);

			t.data.push('localStorage: ' + Modernizr.localstorage);
			t.data.push('sessionStorage: ' + Modernizr.sessionstorage);
			t.data.push('Web Sockets: ' + Modernizr.websockets);
			t.data.push('Web SQL Database: ' + Modernizr.websqldatabase);
			t.data.push('Web Workers: ' + Modernizr.webworkers);

			// Misc
			t.data.push('---');
			t.data.push('MISCELLANEOUS');
			t.data.push('Geolocation API: ' + Modernizr.geolocation);
			t.data.push('Inline SVG: ' + Modernizr.inlinesvg);
			t.data.push('SMIL: ' + Modernizr.smil);
			t.data.push('SVG: ' + Modernizr.svg);
			t.data.push('SVG Clip paths: ' + Modernizr.svgclippaths);
			t.data.push('Touch Events: ' + Modernizr.touch);
			t.data.push('Touch Event (touchcancel): ' + Modernizr.hasEvent('touchcancel'));
			t.data.push('Touch Event (touchend): ' + Modernizr.hasEvent('touchend'));
			t.data.push('Touch Event (touchmove): ' + Modernizr.hasEvent('touchmove'));
			t.data.push('Touch Event (touchstart): ' + Modernizr.hasEvent('touchstart'));
			t.data.push('Touch Event (gesturestart): ' + Modernizr.hasEvent('gesturestart'));
			t.data.push('Touch Event (gesturechange): ' + Modernizr.hasEvent('gesturechange'));
			t.data.push('Touch Event (gestureend): ' + Modernizr.hasEvent('gestureend'));
			t.data.push('WebGL: ' + Modernizr.webgl);

			// Media queries
			t.data.push('---');
			t.data.push('MEDIA QUERIES');
			t.data.push('(max-width: 2000px): ' + Modernizr.mq('only screen and (max-width: 2000px)'));
			t.data.push('(min-width: 0px): ' + Modernizr.mq('only screen and (min-width: 0px)'));
			t.data.push('(orientation:portrait): ' + Modernizr.mq('only screen and (orientation:portrait)'));
			t.data.push('(orientation:landscape): ' + Modernizr.mq('only screen and (orientation:landscape)'));

			// Plugins

			if (!navigator.plugins || navigator.plugins.length === 0) {
				return;
			}
			
			t.data.push('---');
			t.data.push('PLUGINS');

			i = 0;
			len = navigator.plugins.length;

			while (i < len) {
				plugin = navigator.plugins[i];
				t.data.push(plugin.name + ' (' + plugin.version + '), ' + plugin.description);
				i++;
			}

		},

		show: function() {
			var t = this;
			t.$output.html(t.data.join('<br>'));
			t.$results.slideDown();
		}
	};

	$(function() {
		app.init();
	});

}(jQuery, document, window));

