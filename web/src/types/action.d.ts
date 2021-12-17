export interface err{
  message: string,
  description: string,
}

export interface ExtendedAction{
  token: string,
  type: string,
  error: err,
  payload: {
    token: string
  }
}
