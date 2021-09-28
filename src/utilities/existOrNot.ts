export function notExistString(value: string, msg: string) {
  if (!value) {
    throw new Error(msg)
  }
}

export function existString(value: string, msg: string) {
  if (value) {
    throw new Error(msg)
  }
}

export function notExistClass(value: object, msg: string) {
  if (!value) {
    throw new Error(msg)
  }
}

export function existClass(value: object, msg: string) {
  if (value) {
    throw new Error(msg)
  }
}

export function notExistBoolean(value: boolean, msg: string) {
  if (!value) {
    throw new Error(msg)
  }
}

export function existBoolean(value: boolean, msg: string) {
  if (value) {
    throw new Error(msg)
  }
}
