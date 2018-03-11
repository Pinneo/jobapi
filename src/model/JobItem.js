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


import ApiClient from '../ApiClient';





/**
* The JobItem model module.
* @module model/JobItem
* @version 1.0.0
*/
export default class JobItem {
    /**
    * Constructs a new <code>JobItem</code>.
    * @alias module:model/JobItem
    * @class
    * @param id {String} 
    * @param name {String} 
    * @param postedDate {String} 
    * @param description {String} 
    */

    constructor(id, name, postedDate, description) {
        

        
        

        this['id'] = id;this['name'] = name;this['postedDate'] = postedDate;this['description'] = description;

        
    }

    /**
    * Constructs a <code>JobItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JobItem} obj Optional instance to populate.
    * @return {module:model/JobItem} The populated <code>JobItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobItem();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('postedDate')) {
                obj['postedDate'] = ApiClient.convertToType(data['postedDate'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} postedDate
    */
    postedDate = undefined;
    /**
    * @member {String} description
    */
    description = undefined;








}


