import React from 'react'

interface Props{
     title: string;
     subTitle: string;
}

const PageHeader = (props: Props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.subTitle
            }</h2>
        
    </div>
    
  )
}

export default PageHeader