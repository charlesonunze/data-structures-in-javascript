// Arrays are data structures that allow us to store data of the same type in contigous memeory locations

class MyArray {
  constructor() {
    this.array = [];
  }

  add(data) {
    this.array.push(data);
  }

  remove(data) {
    this.array = this.array.filter(current => current !== data);
  }

  search(data) {
    const foundIndex = this.array.indexOf(data);
    if (foundIndex) {
      return foundIndex;
    }

    return null;
  }

  getIndex(index) {
    return this.array[index];
  }

  length() {
    return this.array.length;
  }
}