function greet(person: string, date: Date) {
  console.log(`Hello, ${person}, today is ${date.toDateString()}`);
}

greet("John Doe", new Date()); // Works fine
greet("Jane Doe", "2024-03-10"); // Type Error