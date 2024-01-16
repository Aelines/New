import './App.css';

import { Stack, Queue, HashTable } from 'components/examples';

import { HomePage } from './features';
function App() {
  const startNumber = 12;

  // for Error Boundary
  //const exampleError = new Error();

  // for Stack
  const stringStack = new Stack<string>();
  stringStack.push('One');
  stringStack.push('Two');
  console.log('Stack:', stringStack.peek());
  console.log('Stack:', stringStack.pop());
  console.log('Stack:', stringStack.isEmpty());

  // for Queue
  const numberQueue = new Queue<number>();
  numberQueue.enqueue(1);
  numberQueue.enqueue(2);
  numberQueue.dequeue();
  console.log('Queue:', numberQueue.front());
  console.log('Queue:', numberQueue.size());
  console.log('Queue:', numberQueue.isEmpty());

  //for Hash Table
  const myHashTable = new HashTable<number>();
  myHashTable.set('one', 1);
  myHashTable.set('two', 2);

  console.log('Hash Table:', myHashTable.get('one'));
  console.log('Hash Table:', myHashTable.has('three'));

  myHashTable.delete('two');
  console.log('Hash Table:', myHashTable.get('two'));

  return (
    <div className="appWrapper">
      <HomePage start={startNumber} />
    </div>
  );
}

export default App;
