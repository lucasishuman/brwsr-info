/*global console, Modernizr, swfobject*/

/*
@codekit-prepend "libs/modernizr-2.6.2.js";
*/

;(function($, document, window, undefined) {

	"use strict";

	var EMAIL_TITLE = 'BRWSR.INFO',
		data,
		$btnRun,
		$btnEmail,
		$results,
		$output,

		init = function() {

			$results = $('.results');
			$output = $('.output');
			$btnRun = $('.btn-run');
			$btnEmail = $('.btn-email');

			// btn events -----

			$btnRun.click(function(e) {
				e.preventDefault();
				refresh();
				show();
			});

			$btnEmail.click(function(e) {

				refresh();
				$btnEmail.attr('href', 'mailto:?subject=' + window.escape(EMAIL_TITLE) + '&body=' + window.escape(data.join("\n")));
				
				if ($results.is(':visible')) {
					show();
				}

			});

		},

		refresh = function() {

			var flashVersion = swfobject.getFlashPlayerVersion();

			data = [];

			// Meta
			data.push('Created: ' + (new Date()).toString());
			
			// native
			data.push('---');
			data.push('User Agent: ' + navigator.userAgent);
			data.push('Platform: ' + navigator.platform);
			data.push('Cookie Enabled: ' + navigator.cookieEnabled);
			data.push('Device Pixel Ratio: ' + window.devicePixelRatio);
			data.push('Screen Pixel Depth: ' + screen.pixelDepth);
			data.push('Screen Color Depth: ' + screen.colorDepth);
			data.push('Screen Width: ' + screen.width);
			data.push('Screen Height: ' + screen.height);
			data.push('Window Width: ' + $(window).width());
			data.push('Window Height: ' + $(window).height());

			// CSS
			data.push('---');
			data.push('CSS FEATURES');
			data.push('@font-face: ' + Modernizr.fontface);
			data.push('background-size: ' + Modernizr.backgroundsize);
			data.push('border-image: ' + Modernizr.borderimage);
			data.push('border-radius: ' + Modernizr.borderradius);
			data.push('box-shadow: ' + Modernizr.boxshadow);
			data.push('CSS 2D Transforms: ' + Modernizr.csstransforms);
			data.push('CSS 3D Transforms: ' + Modernizr.csstransforms3d);
			data.push('CSS Animations: ' + Modernizr.cssanimations);
			data.push('CSS Columns: ' + Modernizr.csscolumns);
			data.push('CSS Gradients: ' + Modernizr.cssgradients);
			data.push('CSS Reflections: ' + Modernizr.cssreflections);
			data.push('CSS Transitions: ' + Modernizr.csstransitions);
			data.push('Flexible Box Model: ' + Modernizr.flexbox);
			data.push('Generated Content: ' + Modernizr.generatedcontent);
			data.push('hsla(): ' + Modernizr.hsla);
			data.push('Multiple backgrounds: ' + Modernizr.multiplebgs);
			data.push('opacity: ' + Modernizr.opacity);
			data.push('rgba(): ' + Modernizr.rgba);
			data.push('text-shadow: ' + Modernizr.textshadow);

			// HTML
			data.push('---');
			data.push('HTML5 FEATURES');
			data.push('applicationCache: ' + Modernizr.applicationcache);
			data.push('Canvas: ' + Modernizr.canvas);
			data.push('Canvas Text: ' + Modernizr.canvastext);
			data.push('Cross-window Messaging: ' + Modernizr.postmessage);
			data.push('Drag and Drop: ' + Modernizr.draganddrop);
			data.push('hashchange Event: ' + Modernizr.hashchange);
			data.push('History Management: ' + Modernizr.history);
			data.push('HTML5 Audio (ogg): ' + (Modernizr.audio.ogg || 'nope'));
			data.push('HTML5 Audio (mp3): ' + (Modernizr.audio.mp3 || 'nope'));
			data.push('HTML5 Audio (wav): ' + (Modernizr.audio.wav || 'nope'));
			data.push('HTML5 Audio (m2a): ' + (Modernizr.audio.m4a || 'nope'));
			data.push('HTML5 Video (ogg): ' + (Modernizr.video.ogg || 'nope'));
			data.push('HTML5 Video (WebM): ' + (Modernizr.video.webm || 'nope'));
			data.push('HTML5 Video (H.264): ' + (Modernizr.video.h264 || 'nope'));
			data.push('IndexedDB: ' + Modernizr.indexeddb);

			data.push('Input attr autocomplete: ' + Modernizr.input.autocomplete);
			data.push('Input attr autofocus: ' + Modernizr.input.autofocus);
			data.push('Input attr list: ' + Modernizr.input.list);
			data.push('Input attr placeholder: ' + Modernizr.input.placeholder);
			data.push('Input attr max: ' + Modernizr.input.max);
			data.push('Input attr min: ' + Modernizr.input.min);
			data.push('Input attr multiple: ' + Modernizr.input.multiple);
			data.push('Input attr pattern: ' + Modernizr.input.pattern);
			data.push('Input attr required: ' + Modernizr.input.required);
			data.push('Input attr step: ' + Modernizr.input.step);
			
			data.push('Input type color: ' + Modernizr.inputtypes.color);
			data.push('Input type date: ' + Modernizr.inputtypes.date);
			data.push('Input type datetime: ' + Modernizr.inputtypes.datetime);
			data.push('Input type datetime-local: ' + Modernizr.inputtypes['datetime-local']);
			data.push('Input type email: ' + Modernizr.inputtypes.email);
			data.push('Input type month: ' + Modernizr.inputtypes.month);
			data.push('Input type number: ' + Modernizr.inputtypes.number);
			data.push('Input type range: ' + Modernizr.inputtypes.range);
			data.push('Input type search: ' + Modernizr.inputtypes.search);
			data.push('Input type tel: ' + Modernizr.inputtypes.tel);
			data.push('Input type time: ' + Modernizr.inputtypes.time);
			data.push('Input type url: ' + Modernizr.inputtypes.url);
			data.push('Input type week: ' + Modernizr.inputtypes.week);

			data.push('localStorage: ' + Modernizr.localstorage);
			data.push('sessionStorage: ' + Modernizr.sessionstorage);
			data.push('Web Sockets: ' + Modernizr.websockets);
			data.push('Web SQL Database: ' + Modernizr.websqldatabase);
			data.push('Web Workers: ' + Modernizr.webworkers);

			// Misc
			data.push('---');
			data.push('MISCELLANEOUS');
			data.push('Geolocation API: ' + Modernizr.geolocation);
			data.push('Inline SVG: ' + Modernizr.inlinesvg);
			data.push('SMIL: ' + Modernizr.smil);
			data.push('SVG: ' + Modernizr.svg);
			data.push('SVG Clip paths: ' + Modernizr.svgclippaths);
			data.push('Touch Events: ' + Modernizr.touch);
			data.push('Touch Event (touchcancel): ' + Modernizr.hasEvent('touchcancel'));
			data.push('Touch Event (touchend): ' + Modernizr.hasEvent('touchend'));
			data.push('Touch Event (touchmove): ' + Modernizr.hasEvent('touchmove'));
			data.push('Touch Event (touchstart): ' + Modernizr.hasEvent('touchstart'));
			data.push('Touch Event (gesturestart): ' + Modernizr.hasEvent('gesturestart'));
			data.push('Touch Event (gesturechange): ' + Modernizr.hasEvent('gesturechange'));
			data.push('Touch Event (gestureend): ' + Modernizr.hasEvent('gestureend'));
			data.push('WebGL: ' + Modernizr.webgl);

			// Media queries
			data.push('---');
			data.push('MEDIA QUERIES');
			data.push('(max-width: 2000px): ' + Modernizr.mq('only screen and (max-width: 2000px)'));
			data.push('(min-width: 0px): ' + Modernizr.mq('only screen and (min-width: 0px)'));
			data.push('(orientation:portrait): ' + Modernizr.mq('only screen and (orientation:portrait)'));
			data.push('(orientation:landscape): ' + Modernizr.mq('only screen and (orientation:landscape)'));

			// Plugins
			data.push('---');
			data.push('PLUGINS');
			data.push('Flash Player Version: ' + flashVersion.major + '.' + flashVersion.minor + '.' + flashVersion.release);

		},

		show = function() {
			$output.html(data.join('<br>'));
			$results.slideDown();
		};

	$(document).ready(function() {
		init();
	});

}(jQuery, document, window));

