function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase()); // Error: Object is possibly 'null'
  }
}