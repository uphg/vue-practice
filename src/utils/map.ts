
// map
export function map<T, U>(
  array: T[],
  callback: (item: T, index: number, array: T[]) => U
): U[] {
  const result:U[] = [] 
  const length = array.length
  let index = -1
  while (++index < length) {
    const item = array[index]
    result[index] = callback(item, index, array)
  }
  return result
}