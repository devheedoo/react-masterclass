export function printInterface(object) {
  for (const [key, value] of Object.entries(object)) {
    console.log(`${key}: ${typeof value};`);
  }
}
