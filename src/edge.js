"use strict";
/*
 * An edge connecting two nodes.
 */
class Edge {
    /**
     * Builds an Edge object.
     *
     * @param {import('./node')} srcNode - Source node of the edge.
     * @param {string} relation - Relationship type of the edge.
     * @param {import('./node')} destNode - Destination node of the edge.
     * @param {Map} properties - Properties map of the edge.
     */
	constructor(srcNode, relation, destNode, properties) {
		this.id = undefined;            //edge's id - set by RedisGraph
		this.relation = relation;       //edge's relationship type
		this.srcNode = srcNode;         //edge's source node
		this.destNode = destNode;       //edge's destination node
		this.properties = properties;   //edge's list of properties (list of Key:Value)
	}

    /**
     * Sets the edge ID.
     *
     * @param {number} id (integer)
     * @returns {undefined}
     */
	setId(id) {
		this.id = id;
    }
    
    /**
     * @returns {string} The string representation of the edge.
     */
	toString() {
		return JSON.stringify(this);
	}
}

module.exports = Edge;
