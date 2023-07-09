import React from 'react'
import { NavBar } from '../atoms'

const TopMenu = ({companyName=""}) => {

    return ( 
        <NavBar>
            <div className="d-flex justify-content-start" style={{gap:"15px"}}>
                <span>
                    {/*dentro del span va la imagen SVG del logo*/}
                </span>
                <span>{companyName !== "" && companyName}</span>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" width="24" height="24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 18h18v-2H3v2zm0-5h18V11H3v2zm0-7v2h18V6H3z"/>
                </svg>
            </div>
        </NavBar>
    );
}
 
export default TopMenu;