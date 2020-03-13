import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}

// Generics
// - like function arguments, but or types in class/function definitions
// - allows us to define he type of a property/argument/return value at  future point
// - used heavily when writing reusable code
// - by convention we use <T>
