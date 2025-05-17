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