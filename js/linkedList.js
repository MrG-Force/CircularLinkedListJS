const ListNode = class {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  getNext() {
    return this.next;
  }

  setNext(nextNode) {
    this.next = nextNode;
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }
};

const CircularLinkedList = class {
  /**
   * Instantiate a circular singly linked list.
   * If no parameters are passed instantiates an empty list.
   *
   * @param {*} head A single ListNode or an array of elements to populate the list
   */
  constructor(head = null) {
    this.size = 0;
    // if a single ListNode is passed as parameter:
    if (head.length == undefined) {
      this.head = head;
      this.head.setNext(this.head);
      this.size++;
    } else {
      // if an array of elements is passed as parameter:
      head.forEach((element) => {
        // if list not empty:
        if (this.head) {
          let node = new ListNode(element);
          node.setNext(this.head);
          this.getLast().next = node;
          this.size++;
        } else {
          this.head = new ListNode(element);
          this.head.setNext(this.head);
          this.size++;
        }
      });
    }
  }

  /**
   * Return the number of nodes present in the linked list.
   * @returns {number}
   */
  getSize() {
    return this.size;
  }

  /**
   * Empty out the list.
   */
  clear() {
    this.head = null;
  }

  /**
   * Return the last node of the linked list.
   * @returns {ListNode}
   */
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next != this.head) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  /**
   * Return the first node of the linked list.
   * @returns {ListNode}
   */
  getFirst() {
    return this.head;
  }

  addMany(array) {
    array.forEach((element) => {
      if (this.head) {
        let node = new ListNode(element);
        this.getLast().next = node;
        this.size++;
      } else {
        this.head = new ListNode(element);
        this.size++;
      }
    });
  }

  displayList() {
    let node = this.head;
    let indx = 0;
    let string = "LinkedList: [null] 'empty list'";
    if (node) {
      string = `[${indx++}] head: "${node.data}" -->`;
      node = node.next;
      while (indx < this.size) {
        string += `[${indx++}] node: "${node.data}" -->`;
        node = node.next;
      }
      return string + " head";
    } else {
      return string + " head";
    }
  }
};

export { CircularLinkedList as LinkedList, ListNode };
