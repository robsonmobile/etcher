/*
 * Copyright 2016 Resin.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**
 * @module Etcher.notification
 */

const angular = require('angular');
const electron = require('electron');
const app = electron.remote.app;
const notification = angular.module('Etcher.notification', []);

notification.service('NotificationService', function() {

  /**
   * @summary Send a notification
   * @function
   * @public
   *
   * @description
   * This function makes use of Electron's notification desktop
   * integration feature. See:
   * http://electron.atom.io/docs/v0.37.5/tutorial/desktop-environment-integration/
   *
   * @param {String} title - notification title
   * @param {String} body - notification body
   * @returns {Object} HTML5 notification object
   *
   * @example
   * const notification = NotificationService.send('Hello', 'Foo Bar Bar');
   * notification.onclick = function() {
   *   console.log('The notification has been clicked');
   * };
   */
  this.send = function(title, body) {

    // `app.dock` is only defined in OS X
    if (app.dock) {
      app.dock.bounce();
    }

    return new Notification(title, {
      body: body
    });
  };

});