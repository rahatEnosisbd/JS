const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
}

Object.entries(reactionEmoji).forEach(([key, value]) => {
  console.log(`${key} ${value}`)
})