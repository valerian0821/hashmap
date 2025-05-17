import { Node, LinkedList } from "./linked-lists.js";

class Hashmap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = Array(capacity).fill(null);
  }

  hash(key) {
    let hashCode = 0;   
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    if (this.buckets[index] === null) {
      this.buckets[index] = new LinkedList();
      this.buckets[index].append(key, value);
    } else {
      if (this.buckets[index].contains(key)) {
        this.buckets[index].overwrite(key, value);
      } else {
        this.buckets[index].append(key, value);
      }
    }
    const hashMapSize = this.length();
    if (hashMapSize >= this.loadFactor * this.capacity) {
      const pairs = this.entries();
      this.capacity = this.capacity * 2;
      this.buckets = Array(capacity).fill(null);
      for (let i = 0; i < pairs.length; i++) {
        this.set(pairs[i][0], pairs[i][1]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    return this.buckets[index].getValue(key);
  }

  has(key) {
    const index = this.hash(key);
    return this.buckets[index].contains(key);
  }

  remove(key) {
    const index = this.hash(key);
    if (this.buckets[index].contains(key)) {
      let keyIndex = this.buckets[index].find(key);
      this.buckets[index].removeAt(keyIndex);
      return true;
    } else {
      return false;
    }
  }

  length() {
    let keyCount = 0;
    for (let index in this.buckets) {
      if (this.buckets[index] !== null) {
        keyCount += this.buckets[index].getSize();
      }
    }
    return keyCount;
  }

  clear() {
    for (let index in this.buckets) {
      this.buckets[index] = null;
    }
  }

  keys() {
    const keysArr = [];
    for (let index in this.buckets) {
      if (this.buckets[index] !== null) {
        const bucketKeysArr = this.buckets[index].getKeys();
        keysArr.push(...bucketKeysArr);
      }
    }
    return keysArr;
  }

  values() {
    const valuesArr = [];
    for (let index in this.buckets) {
      if (this.buckets[index] !== null) {
        const bucketValuesArr = this.buckets[index].getValues();
        valuesArr.push(...bucketValuesArr);
      }
    }
    return valuesArr;
  }

  entries() {
    const pairsArr = [];
    for (let index in this.buckets) {
      if (this.buckets[index] !== null) {
        const bucketPairsArr = this.buckets[index].getKeyValuePairs();
        pairsArr.push(...bucketPairsArr);
      }
    }
  }
}
