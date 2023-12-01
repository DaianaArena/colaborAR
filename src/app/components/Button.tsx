import React from 'react'

const Button = (props:any) => {
  return (
    <a
      href={props.link}
      target="_blank"
      type="button"
      className="rounded bg-purple-700 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-purple-600  focus:bg-purple-600 ">
      {props.text}
    </a>
  )
}

export default Button