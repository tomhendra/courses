import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const characterCollection = new CharactersCollection('gaDfcEb');
characterCollection.sort();
console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(23);
linkedList.add(67);
linkedList.add(144);
linkedList.add(97);

linkedList.sort();
linkedList.print();
