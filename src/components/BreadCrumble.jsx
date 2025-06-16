import React from 'react'

const BreadCrumble = () => {
  return (
    <div className='flex text-white' style={{
        fontSize: "13px",
        width: "98%",
        margin: "auto",
        gap: "10em",
        marginTop: "10px"
    }}>
        <div style={{
            backgroundColor: "rgb(62, 114, 195)",
            padding: ".4em",
            fontStyle: "italic"
        }}>
           <p> SAM Children(2017) - Annual Estimated Burden <span style={{marginLeft: "29px"}}>3,433,979</span></p>
           <p> SAM Children(2017) - Annual Targeted Caseload <span style={{marginLeft: "23px"}}>2,576,369</span></p>
        </div>
        <div className='flex ' style={{
            alignItems: "center",
            backgroundColor: "rgb(111, 177, 70)",
            padding: ".4em"
        }}>
            <p>Total number of new cases of US children <br />with SAM admitted for treatment </p>
            <span style={{marginLeft: "18px"}}>917,688</span>
        </div>
        <div style={{
            backgroundColor: "rgb(111, 177, 70)",
            padding: ".4em"
        }}>
            <p>% of US SAM children reached <span style={{marginLeft: "73px"}}>27%</span></p>
            <p>% of targeted US SAM children reached <span style={{marginLeft:"20px"}}>36%</span></p>
        </div>
    </div>
  )
}

export default BreadCrumble