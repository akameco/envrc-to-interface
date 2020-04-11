import envrcToInterface from '.'

test('envrcToInterface', () => {
  const envrc = `
  export FOO=hello
  export BAR=world
  `
  expect(envrcToInterface(envrc)).toBe(
    `
declare namespace NodeJS {
  interface ProcessEnv {
    readonly FOO: string;
    readonly BAR: string;
  }
}`
  )
})
