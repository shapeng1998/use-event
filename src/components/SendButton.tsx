import { memo } from 'react'

interface SendButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const SendButton = memo(({ onClick }: SendButtonProps) => {
  console.log('render SendButton')

  return (
    <button className="btn" onClick={onClick}>
      send
    </button>
  )
})

SendButton.displayName = 'SendButton'
