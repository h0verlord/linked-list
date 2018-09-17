import Node from './node'

export default class NodeList {
  constructor() {
    this.head = null
    this.length = 0
  }

  addToList(data) {
    let nodeToBeAdded = new Node(data)
    let checkLastNode = this.head

    if (!checkLastNode) {
      this.head = nodeToBeAdded
      this.length++
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
