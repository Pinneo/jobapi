/**
 * Simple Jobs API
 * This is a simple API for Job postings
 *
 * OpenAPI spec version: 1.0.0
 * Contact: jordanyanke@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SimpleJobsApi);
  }
}(this, function(expect, SimpleJobsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SimpleJobsApi.DevelopersApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DevelopersApi', function() {
    describe('getJob', function() {
      it('should call getJob successfully', function(done) {
        //uncomment below and update the code to test getJob
        //instance.getJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchJobs', function() {
      it('should call searchJobs successfully', function(done) {
        //uncomment below and update the code to test searchJobs
        //instance.searchJobs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));