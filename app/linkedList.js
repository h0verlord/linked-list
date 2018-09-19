const Node = require('./Node')

class LinkedList {
  constructor() {
    this.head = null
  }

  addToList(data) {
    let nodeToBeAdded = new Node(data)
    let checkLastNode = this.head

    if (!checkLastNode) {
      this.head = nodeToBeAdded
      return nodeToBeAdded
    }

    while (checkLastNode.next) {
      checkLastNode = checkLastNode.next
    }

    checkLastNode.next = nodeToBeAdded
    this.length++
    return nodeToBeAdded
  }
}
module.exports = LinkedList