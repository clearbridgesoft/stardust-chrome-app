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
		  
		function(require, jquery, angularjs, jqueryMobile, app, jqmRouteProvider,jqmWidgets,jqueryIscroll,iscroll) {
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
			
			app.init(options);
		});