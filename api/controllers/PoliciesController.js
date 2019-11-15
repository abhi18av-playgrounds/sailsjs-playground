/**
 * PoliciesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  attributes: {

    policyNumber: {
      type: 'string',
      required: true,
      unique: true
    },
    amount: {
      type: 'number',
      required: true
    },
    creationDate:{
      type: 'ref',
      columnType: 'datetime'
    },
    expireDate:{
      type: 'ref',
      columnType: 'datetime'
    }
  }
};
