import React from 'react'

export default function SimpleInfo(props: { data: any }) {

  console.log(props.data);


  return (
    <>
      {props.data.length < 0 &&
        <div className="simpleInfoComponent">
          <img src={props.data.current.icon} alt="" />
          test
        </div>
      }
    </>
  )
}
