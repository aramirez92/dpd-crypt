/**
 * Created by aramirez92 on 15/01/15.
 */

/**
 * Module dependencies
 */
var Resource    = require('deployd/lib/resource'),
    md5         = require('MD5'),
    util        = require('util'),
    path        = require('path');

console.log(md5('message'));

/**
 * Module setup
 */

function Md5(){

    Resource.apply( this, arguments );

}

util.inherits( Md5, Resource );

Md5.prototype.clientGeneration = true;

/**
 * Module methodes
 */

Md5.prototype.handle = function ( ctx, next ) {

    if ( ctx.req && ctx.req.method !== 'POST' ) {
        return next();
    }

    if ( !ctx.req.internal && this.config.internalOnly ) {
        return ctx.done({ statusCode: 403, message: 'Forbidden' });
    }

    var options = ctx.body || {};
    console.log('Options');
    console.log(options);

    return ctx.done({ statusCode: 400, errors: errors });

};

/**
 * Module export
 */

module.exports = md5;