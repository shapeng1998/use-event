interface SendButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const SendButton = ({ onClick }: SendButtonProps) => {
  console.log('render SendButton')

  return (
    <button className="btn" onClick={onClick}>
      send
    </button>
  )
}
