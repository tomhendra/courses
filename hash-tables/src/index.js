// ============
// HASH TABLES
// ============
// - hash tables are used to store key-value pairs
// - AKA hash maps
// - like arrays, but the keys are not ordered
// - unlike arrays, hast tables are fast for all of the following operations:
//     - finding values
//     - adding new values
//     - removing values
//
// - nearly every programming language has some sort of hash table data structure
// - because of their speed, hsh tables are very commonly used
//     - Python has dictionaries
//     - JavaScript has objects and maps
//     - Java, Go & Scala have maps *
//     - Ruby has hashes
//     * objects have some restrictions, but are basically hashes
// 
// - the hash part:
//     - in order to look up values by key, we need a way to convert keys into valid array indices
//     - a function which performs this task is called a hash function
//
// - what makes a good hash? (not a cryptographically secure one)
//     - fast (i.e. constant time)
//     - doesn't cluster outputs  specific indices, but distributes uniformly
//     - deterministic (same input yields same output)
