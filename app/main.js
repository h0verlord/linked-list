const LinkedList = require('./LinkedList')

let list = new LinkedList()

for (let i = 0; i < 5; i++) {
  list.addToList(i)
}

console.log(list)
