/*******************************************************************************
 * Copyright (c) 2011 SunGard CSA LLC and others. All rights reserved. This
 * program and the accompanying materials are made available under the terms of
 * the Eclipse Public License v1.0 which accompanies this distribution, and is
 * available at http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors: SunGard CSA LLC - initial API and implementation and/or initial
 * documentation
 ******************************************************************************/

var bpm = null;

require
		.config({
			baseUrl : "./",
			paths : {
				'jquery' 		  : [ 'js/libs/jquery/jquery-1.7.2.min'],
				'jquery-router'   : [ 'js/libs/jquery/plugins/jquery.mobile.router.min'],
				'jquery-mobile'   : [ 'js/libs/jquery/plugins/jquery.mobile-1.4.0.min'],
				'jquery-iscroll'  : [ 'js/libs/jquery/plugins/jquery.mobile.iscrollview.min'],
				'angularjs' 	  : [ 'js/libs/angular/angular.1.2.11.min']
			},
			shim : {
				'jquery-router'    : ['jquery'],
				'jquery-mobile'    : [ 'jquery','jquery-router' ],
				'jquery-iscroll'   : ['jquery','jquery-mobile'],
				'i18n' : {
					exports : "InfinityBPMI18N"
				},
				'angularjs' : {
					require : "jquery",
					exports : "angular"
				}
			}
		});

require(
		
		[ "require", 
		  "jquery", 
		  "angularjs", 
		  "jquery-mobile",
		  "js/app","js/jqmRouteProvider","js/jqmWidgets","jquery-iscroll","js/libs/misc/iscroll"],
		  
		function(require, $, angular, jqueryMobile, app, jqmRouteProvider,jqmWidgets,jqueryIscroll,iscroll) {
			console.log(jqmRouteProvider);
			
			/*Specify our jquery mappings - all apps utilizing the back-end must supply a front-end with
			 *an element corresponding to each entry.*/
			var options={ selectors: { 
							inptLogin : "#inptLogin",   /*login submission button*/
							loginPage : "#login",       /*JQM data-role page, login*/
							mainPage  : "#mainPage",    /*JQM data-role page, Main*/
							worklistListViewPage : "#worklistListViewPage",  /*JQM data-role page, worklist*/
							popup_activityMenu : "#popup-activityMenu",		 /*Popup menu for worklistListViewPage*/
							btnAddNote : "#btnAddNote", /*button which submits a new note bound to a process*/
							notesPage :  "#notesPage"   /*JQM data-role page, Notes*/
						}
			};

			var db, request = indexedDB.open("stardust"), setting;

			function init(){
				var $label = $('<label for="BaseUrl">Please prove the server url: </label>'),
					$input = $('<input id="BaseUrl" type="text">'),
					$button = $('<button>Confirm</button>'),
					$div = $('<div style="margin:auto;max-width: 768px;z-index: 1;position: relative"></div>').append($label, $input, $button);
				if (setting) {
					$input.val(setting.baseUrl);
				}
				$button.click(function(){
					var val = $input.val();
					if (!val) return;
					window.serverBaseUrl = val;
					if (!setting) {
						setting = {};
					}
					setting.baseUrl = val;
					db.transaction(["settings"], "readwrite").objectStore("settings").put(setting);
					db.close();
					$div.remove();
					app.init(options);
				});
				$('body').prepend($div);
			}

			request.onsuccess = function(event) {
				db = event.target.result;
				db.transaction(["settings"]).objectStore("settings").get(1).onsuccess = function(event) {
					setting = event.target.result;
					init();
				};
			};

			request.onupgradeneeded = function (event) {
				db = event.target.result;
				db.createObjectStore("settings", { autoIncrement : true });
			};
		});