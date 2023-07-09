import React from 'react'
import { GradientBar } from '../../atoms';
import Cursor from '../Cursor/Cursor';
import { GradientBarSectionDescriptionWrapper } from '../../atoms';
import InformationBarCSS from './informationBar.module.css'

const InformationBar = ({value}) => {

    console.log(value);

    return ( 
        <div className='w-100'>
            <h1 className="mb-4">
                Tu resultado: {value}%
            </h1>
            <div className="w-100 mb-2">
                 <Cursor value={value}/>
            </div>
            <GradientBar className="mb-4"/>

            <div className={`${InformationBarCSS['gap-10']} d-none d-md-flex justify-content-start`}>
                <div className='col-1'>
                    <GradientBarSectionDescriptionWrapper color="turquoise">
                        <div className='circle'></div>
                        <span className='value'>2-4%</span>
                        <span className='description'>Esencial</span>
                    </GradientBarSectionDescriptionWrapper>
                </div>
                <div className='col-1'>
                    <GradientBarSectionDescriptionWrapper color="#387825">
                        <div className='circle'></div>
                        <span className='value'>6-13%</span>
                        <span className='description'>Deportista</span>
                    </GradientBarSectionDescriptionWrapper>
                </div>
                <div className='col-1'>
                    <GradientBarSectionDescriptionWrapper color="#6FC22B">
                        <div className='circle'></div>
                        <span className='value'>14-17%</span>
                        <span className='description'>Fitness</span>
                    </GradientBarSectionDescriptionWrapper>
                </div>
                <div className='col-1'>
                    <GradientBarSectionDescriptionWrapper color="gold">
                        <div className='circle'></div>
                        <span className='value'>18-25%</span>
                        <span className='description'>Aceptable</span>
                    </GradientBarSectionDescriptionWrapper>
                </div>
                <div className='col-1'>
                    <GradientBarSectionDescriptionWrapper color="darkorange">
                        <div className='circle'></div>
                        <span className='value'>25% +</span>
                        <span className='description'>Obeso</span>
                    </GradientBarSectionDescriptionWrapper>
                </div>
            </div>
        </div>
     );
}
 
export default InformationBar;