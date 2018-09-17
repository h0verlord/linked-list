class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class NodeList {
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

let list = new NodeList()
for (let i = 0; i < 5; i++) {
  list.addToList(i)
}

console.log(list)
