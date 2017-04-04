export const HELLO_WORLD = 'HELLO_WORLD'

export const helloWorld = () => {
  console.log('helloWorld actions')
  return {
    type: HELLO_WORLD
  }
}