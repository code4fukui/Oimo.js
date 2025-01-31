import { Proxy } from '../Proxy.js';
import { DBVTNode } from './DBVTNode.js';

/**
* A proxy for dynamic bounding volume tree broad-phase.
* @author saharan
*/

function DBVTProxy ( shape ) {

    Proxy.call( this, shape);
    // The leaf of the proxy.
    this.leaf = new DBVTNode();
    this.leaf.proxy = this;

};

DBVTProxy.prototype = Object.assign( Object.create( Proxy.prototype ), {

    constructor: DBVTProxy,

    update: function () {

    }

});

export { DBVTProxy };