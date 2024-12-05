function printName(name: string | null): void {
  // Solution 1: Optional chaining
  console.log(name?.toUpperCase());

  // Solution 2: Nullish coalescing operator
  console.log((name ?? "").toUpperCase());
} 