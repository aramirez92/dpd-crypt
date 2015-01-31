/**
 * Created by aramirez92 on 15/01/15.
 */

/**
 * Module dependencies
 */
var Resource       = require('deployd/lib/resource'),
    util           = require('util'),
    md5            = require('MD5'),
    sha1           = require('sha1');

/**
 * Module setup.
 */
function Md5(name, options) {

    Resource.apply( this, arguments );
    this.md5 = md5;
    this.sha1 = sha1;

}
util.inherits( Md5, Resource );
Md5.label = "Crypt";
Md5.prototype.clientGeneration = true;


/**
 * Module methods
 */
Md5.prototype.handle = function (ctx, next) {
    var req = ctx.req, domain = {url: ctx.url, query:ctx.query};

    if (!this.md5) return ctx.done({statusCode:400,message:'Bad request'});

    if(!ctx.req.internal) return ctx.done({ statusCode: 403, message: 'Forbidden' });

    if (req.method === "GET") {

        var method = domain.query.method;

        if(method=='' || method==undefined) method='md5';

        switch (method){
            case 'sha1':
                var encrypted = this.sha1(domain.query.string);
                break;
            default:
                var encrypted = this.md5(domain.query.string);
                break;
        }

        ctx.done( null, encrypted);
    }else{
        next();
    }
};

/**
 * Module export
 */
module.exports = Md5;