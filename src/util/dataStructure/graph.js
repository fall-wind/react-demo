/**
 * 保存顶点和边
 */
class Vertex {
    constructor(label) {
        this.label = label
    }
}

class Graph {
    constructor() {
        this.vertices = []
        this.edges = []
        this.numberOfEdges = []
    }

    /**
     * 加边
     * @param {*} vertex 
     */
    addVertex(vertex) {
        this.vertices.push(vertex)
        this.edges[vertex] = []
    }

    removeVertex(vertex) {

    }

    /**
     * 加点
     * @param {*} vertex1 
     * @param {*} vertex2 
     */
    addEdge(vertex1, vertex2) {
        this.edges[vertex1].push(vertex2)
        this.edges[vertex2].push(vertex1)
        this.numberOfEdges++
    }

    /**
     * 顶点的个数
     */
    size() {
        return this.vertices.length
    }
}