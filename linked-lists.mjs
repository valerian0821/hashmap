class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(key, value) {
    let newNode = new Node(key, value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  prepend(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let prevNodeHead = this.head;
    this.head = newNode;
    newNode.next = prevNodeHead;
  }

  getSize() {
    if (!this.head) {
      return 0;
    }
    let currentNode = this.head;
    let nodeCount = 1;
    while (currentNode.next) {
      nodeCount++;
      currentNode = currentNode.next;
    }
    return nodeCount;
  }

  getHead() {
    if (this.getSize() === 0) {
      return "";
    }
    return this.head;
  }

  getTail() {
    if (this.getSize() === 0) {
      return "";
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  at(index) {
    if (this.getSize() === 0) {
      return "";
    }
    if (index === 0) {
      return this.head;
    }
    let currentNode = this.head;
    let nodeIndex = 0;
    while (currentNode.next) {
      currentNode = currentNode.next;
      nodeIndex++;
      if (nodeIndex === index) {
        return currentNode;
      }
    }
    return "";
  }

  pop() {
    if (this.getSize() === 0) {
      return;
    } else if (this.getSize() === 1) {
      this.head = null;
      return;
    }
    let currentNode = this.head;
    let newTailNode;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        newTailNode = currentNode;
      }
      currentNode = currentNode.next;
    }
    newTailNode.next = null;
  }

  contains(key) {
    if (this.getSize() === 0) {
      return false;
    }
    let currentNode = this.head;
    if (currentNode.key === key) {
      return true;
    }
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.key === key) {
        return true;
      }
    }
    return false;
  }

  find(key) {
    if (this.getSize() === 0) {
      return null;
    }
    let currentNode = this.head;
    let nodeIndex = 0;
    if (currentNode.key === key) {
      return nodeIndex;
    }
    while (currentNode.next) {
      currentNode = currentNode.next;
      nodeIndex++;
      if (currentNode.key === key) {
        return nodeIndex;
      }
    }
    return null;
  }

  overwrite(key, value) {
    let currentNode = this.head;
    while (currentNode) {
      if (key === currentNode.key) {
        currentNode.value = value;
        break;
      }
      currentNode = currentNode.next;
    }
  }

  getValue(key) {
    let currentNode = this.head;
    while (currentNode) {
      if (key === currentNode.key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  getKeys() {
    const keysArr = [];
    let currentNode = this.head;
    while (currentNode) {
      keysArr.push(currentNode.key);
      currentNode = currentNode.next;
    }
    return keysArr;
  }

  getValues() {
    const valuesArr = [];
    let currentNode = this.head;
    while (currentNode) {
      valuesArr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return valuesArr;
  }

  getKeyValuePairs() {
    const keyValuePairsArr = [];
    let currentNode = this.head;
    while (currentNode) {
      keyValuePairsArr.push([currentNode.key, currentNode.value]);
      currentNode = currentNode.next;
    }
    return keyValuePairsArr;
  }

  toString() {
    let currentNode = this.head;
    let result = "";
    while (currentNode) {
      result += currentNode.value + " -> ";
      currentNode = currentNode.next;
    }
    console.log(result + "null");
  }

  insertAt(value, index) {
    let newNode = new Node(value);
    
    //Check if the given index is valid
    if (this.getSize() >= index) {

      //When there is nothing in the list
      if (this.getSize() === 0) {
        this.head = newNode;
      }

      //When the new value is at the front of the new list
      if (index === 0) {
        let prevNodeHead = this.head;
        this.head = newNode;
        newNode.next = prevNodeHead;     
      }

      //When the new value is at the end of the new list
      else if (index === this.getSize()) {
        let currentNode = this.head;
        while (currentNode) {
          if (!currentNode.next) {
            currentNode.next = newNode;
            break;
          }
          currentNode = currentNode.next;
        }
      }

      //When the new value is not at either end of the new list
      else {
        let currentNode = this.head;
        let nodeIndex = 0;
        while (currentNode) {
          if (nodeIndex + 1 === index) {
            let newPrevNode = currentNode;
            let newNextNode = currentNode.next;
            newPrevNode.next = newNode;
            newNode.next = newNextNode;
            break;
          }
          currentNode = currentNode.next;
          nodeIndex++;
        }
      }
    }
  }

  removeAt(index) {

    //Check if the given index is valid
    if (this.getSize() !== 0 && this.getSize() >= index + 1) {

      //Remove the only element in the list
      if (this.getSize() === 1) {
        this.head = null;
      }

      //Remove the first element in a multi-element list
      else if (index === 0) {
        let currentNode = this.head;
        let newHeadNode = currentNode.next;
        this.head = newHeadNode;
      }

      //Remove the last element in a multi-element list
      else if (index === this.getSize() - 1) {
        let currentNode = this.head;
        while (currentNode) {
          if (!currentNode.next.next) {
            let newTailNode = currentNode;
            newTailNode.next = null;
            break;
          }
          currentNode = currentNode.next;
        }
      }

      //Remove an element in the middle of a multi-element list
      else {
        let currentNode = this.head;
        let nodeIndex = 0;
        while (currentNode) {
          if (nodeIndex + 1 === index) {
            let prevNode = currentNode;
            let nextNode = currentNode.next.next;
            prevNode.next = nextNode;
            break;
          }
          currentNode = currentNode.next;
          nodeIndex++;
        }
      }
    }
  }
}

export {LinkedList};