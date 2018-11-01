

export const messageFactory = (nickname: string, room: string, text: string) => ({
  channel: room,
  user: nickname,
  text
})

