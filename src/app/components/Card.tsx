import React from "react";
import Button from "./Button";

const Card = (props: any) => {
  return (
    <div key={props.id} className=" col-span-1 h-full  flex flex-col justify-between">
      <div className="my-2 h-full  rounded-lg flex flex-col justify-between  bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="border-b-2 border-neutral-100 px-6 py-3 text-purple-800 ">
          {props.position}
        </div>
        <div className="p-6 flex flex-col justify-between h-full">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
            {props.name}
          </h5>
          
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {props.description}
          </p>

          <div>
          <a
            href={props.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold py-2 px-4  text-md text-purple-500 "
          >
            Linkedin
          </a>
          <Button text="Ir a su CV" link={props.resume}/>
            
          </div>
          
          
        </div>
        <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 text-neutral-600">
          {props.email}
        </div>
      </div>
    </div>
  );
};

export default Card;
