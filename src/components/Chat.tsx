import { useState } from 'react'
import { useEvent } from '../hooks/useEvent'
import { SendButton } from './SendButton'

export const Chat = () => {
  const [text, setText] = useState('')

  const onClick = useEvent(() => {
    console.log(text)
  })

  return (
    <div>
      <input
        className="input"
        placeholder="Type a message..."
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <SendButton onClick={onClick} />
    </div>
  )
}
