"use strict";
class Path {
    /**
     * @param {import('./node')[]} nodes - path's node list.
     * @param {import('./edge')[]} edges - path's edge list.
     */
	constructor(nodes, edges) {
		this.nodes = nodes;
		this.edges = edges;
	}

    /**
     * Returns the path's nodes as list.
     *
     * @returns {import('./node')[]} path's nodes.
     */
	get Nodes() {
		return this.nodes;
	}

    /**
     * Returns the path's edges as list.
     *
     * @returns {import('./edge')[]} paths' edges.
     */
	get Edges() {
		return this.edges;
    }

    /**
     * Returns a node in a given index.
     *
     * @param {number} index (integer)
     * @returns {import('./node')} node in the given index.
     */
	getNode(index) {
		return this.nodes[index];
	}

    /**
     * Returns an edge in a given index.
     *
     * @param {number} index (integer)
     * @returns {import('./edge')} edge in a given index.
     */
	getEdge(index) {
		return this.edges[index];
	}

    /**
     * Returns the path's first node.
     *
     * @returns {import('./node')} first node.
     */
	get firstNode() {
		return this.nodes[0];
	}

    /**
     * Returns the last node of the path.
     *
     * @returns {import('./node')} last node.
     */
	get lastNode() {
		return this.nodes[this.nodes.length - 1];
	}

    /**
     * Returns the amount of nodes in th path.
     *
     * @returns {number} amount of nodes. (integer)
     */
	get nodeCount() {
		return this.nodes.length;
	}

    /**
     * Returns the amount of edges in the path.
     *
     * @returns {number} amount of edges. (integer)
     */
	get edgeCount() {
		return this.edges.length;
	}

    /**
     * Returns the path string representation.
     *
     * @returns {string} path string representation.
     */
	toString() {
		return JSON.stringify(this);
	}
}

module.exports = Path;
