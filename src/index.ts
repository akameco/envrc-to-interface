type Result = Record<string, string>

// TODO: tsのコンパイラーを使う
function createInterface(result: Result): string {
  const str = Object.keys(result)
    .map((key) => `    readonly ${key}: string;`)
    .join('\n')
  return `
declare namespace NodeJS {
  interface ProcessEnv {
${str}
  }
}`
}

export default function envrcToInterface(input: string): string {
  const lines = input.trim().split('\n')
  const obj = lines.reduce((prev, line) => {
    const groups = /^export\s(?<key>.+?)=(?<value>.+?)$/u.exec(line.trim())
      ?.groups as { key?: string; value?: string }
    if (groups && groups.key && groups.value) {
      const { key, value } = groups
      prev[key] = value
      return prev
    }
    return prev
  }, {} as Result)
  return createInterface(obj)
}
