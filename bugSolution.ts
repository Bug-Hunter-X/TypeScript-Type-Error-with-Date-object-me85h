function greet(person: string, date: Date | string) {
  let formattedDate: string;
  if (date instanceof Date) {
    formattedDate = date.toDateString();
  } else {
    formattedDate = date; //Treat the input as a string
  }
  console.log(`Hello, ${person}, today is ${formattedDate}`);
}

greet("John Doe", new Date());
greet("Jane Doe", "2024-03-10");