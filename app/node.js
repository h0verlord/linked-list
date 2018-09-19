class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }

  addNode(node) {
    if (!this.next) {
      this.next = node
      return
    }

    this.next.addNode(node)
  }
}
module.exports = Node
