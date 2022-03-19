import { readFile } from 'fs/promises'

function read<T extends string> (path: T): string | null {
  try {
    readFile(path, 'utf8').then((s) => {
      return s
    })
  } catch {
    return null
  }
  return null
}

export { read }
