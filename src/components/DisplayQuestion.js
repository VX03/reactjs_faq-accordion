import React, { useState } from 'react'


const parentContainerStyle = {
    width: '100%',
    height:'auto',
    backgroundColor:'lightpink',
    marginBlock: 15,
    paddingBlock:5,
    paddingInline: 5,
    borderRadius: 15
}

const containerStyle = {
    backgroundColor:'purple',
    display:'flex',
    borderRadius: 10
}

const fontStyle = {
    color: 'white',
    marginInline: 10
}


const buttonStyle = {
    height: 30,
    width: 30,
    marginLeft: 'auto', 
    marginRight: 10,
    marginBlock: 'auto',
    borderRadius: 15,
    fontSize: 20
}



function DisplayQuestion(question, key) {
    const [ openAns, setOpenAns ] = useState(false);

    const openCloseQn = () => {
        setOpenAns(!openAns);
    }
    let infoFontStyle = {
        color: 'gray',
        marginInline: 10,    
        maxHeight: openAns ? 150 : 0,
        height: 'auto',
        overflow: 'hidden',
        transition: 'max-height 0.6s ease-out'
    }

  return (
    <div style={parentContainerStyle}>
        <div style={containerStyle}>
        <p style={fontStyle}>{question.question.title}</p>
        <button 
            onClick={() => openCloseQn()} 
            style={buttonStyle}>{openAns ? <>-</> : <>+</>}</button>
            <br></br>
        </div>
        
        <div style={infoFontStyle} className='panel'>    
        {
            openAns ?
                <>
                <br></br>
                {question.question.info}
                </>
                : null
        }
        </div>
    </div>
  )
}

export default DisplayQuestion;
