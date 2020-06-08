export default class Model {
  constructor(public name: string = '123', public value: string = '2') {}
}
const types = {
  a: '1',
  b: '2',
  c: '3',
}

const arr: Object[] = [{ a: 1 }]

console.log(arr)
interface func {
  (num: number): boolean
}

interface ApplyData {
  id: string
  label: string
}
interface OnApply {
  (applyData: ApplyData): void
}
