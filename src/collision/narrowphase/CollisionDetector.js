import { printError } from '../../core/Utils.js';

function CollisionDetector (){

    this.flip = false;

};

Object.assign( CollisionDetector.prototype, {

    CollisionDetector: true,

    detectCollision: function ( shape1, shape2, manifold ) {

        printError("CollisionDetector", "Inheritance error.");

    }

} );

export { CollisionDetector };