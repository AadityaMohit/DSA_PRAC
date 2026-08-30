class Queue {
	constructor() {
		this.items = [];
	}

	AddElement(data) {
		this.items.push(data);
	}

	RemoveElement() {
		if (this.items.length === 0) {
			console.log("Queue is empty");
			return;
		}

		return this.items.shift();
	}

	Peek() {
		if (this.items.length === 0) {
			console.log("Queue is empty");
			return;
		}

		return this.items[0];
	}

	IsEmpty() {
		return this.items.length === 0;
	}

	Traverse() {
		if (this.items.length === 0) {
			console.log("Queue is empty");
			return;
		}

		for (let i = 0; i < this.items.length; i++) {
			console.log(this.items[i]);
		}
	}
}

const object = new Queue();
object.AddElement(10);
object.AddElement(20);
object.AddElement(30);
console.log("Removed element:", object.RemoveElement());
console.log("Front element:", object.Peek());
object.Traverse();
