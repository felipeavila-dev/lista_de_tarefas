import React from "react"

type Props = {
  children: string;
  onClick: (e: any) => void;
}

export const Button = ({ children, onClick }: Props) => {
  return(
    <button onClick={ onClick }>{ children }</button>
  )
}