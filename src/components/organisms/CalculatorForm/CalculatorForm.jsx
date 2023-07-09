import React,{useState, useEffect, useCallback} from 'react';
import InputText from '../../molecules/InputText';
import { Button } from '../../atoms';
import CustomRadio from '../../molecules/CustomRadio';
import InformationBar from '../../molecules/informationBar/InformationBar';
import classCSS from './calculatorForm.module.css';
import BFPService from '../../../services/BFPService';

const CalculatorForm = () => {

    const [formValues,setFormValues] = useState({sexo:"",altura:"",peso:"",cintura:"",caderas:"",cuello:"",showInformationBar:false});
    const [showInformationBar, setShowInformationBar] = useState(false);
    const [result, setResult] = useState(0);
    
    const isFormValid = useCallback(() => {
        if(formValues.sexo === "hombre")
            formValues.caderas = "";

        const formValid = (
          formValues.sexo !== '' &&
          formValues.altura !== '' &&
          formValues.peso !== '' &&
          formValues.cintura !== '' &&
          formValues.cuello !== '' &&
          ((formValues.sexo === 'hombre' && formValues.caderas === '') || (formValues.sexo === 'mujer' && formValues.caderas !== ''))
        );
        
        return formValid;

      }, [formValues]);

    useEffect(() => {
        const formValid = isFormValid();
        !formValid && setShowInformationBar(false);
    }, [isFormValid]);

    const limpiarForm = ()=>{
        setFormValues({sexo:"",altura:"",peso:"",cintura:"",caderas:"",cuello:""});
        setShowInformationBar(true);    
        setResult(0);
        const radioButtons = document.querySelectorAll('[name=sexo]');
        radioButtons.forEach(element => {
            element.setAttribute('checked',false);
        });
    };

    const calcular = async()=>{

        const formValid = isFormValid();
        if (formValid) {
            setResult(await BFPService(formValues));
            setShowInformationBar(true);
        }
    }

    const inputsValidations = (inputValue='')=>{
        return (inputValue === '' || /^\d{0,3}(\.\d{0,2})?$/.test(inputValue))
    }


    const calcularGrasaCorporal = e => {
        e.preventDefault();
        calcular();
    }

    return ( 
        <div className='row ml-0 mr-0'>   
            <div className='col-md-5 col-12'>                          
                <h1 className="mb-2">Calculadora de Grasa Corporal</h1>

                <p className={classCSS['color-gray']+" mb-3"} >
                    El método de la Marina de Estados Unidos (US Navy Method) ofrece una manera sencilla de calcular un aproximado del porcentaje de tejido adiposo en el cuerpo de una persona. 
                </p>

                <p className={classCSS['color-gray']+" mb-3"} >
                    Los valores requeridos por la fórmula son los siguientes:
                </p>

                <div className='w-100'>
                    <form onSubmit={e=>calcularGrasaCorporal(e)}>    
                        <p className={classCSS['color-light-gray']}>
                            Género
                        </p>   
                        <div className={classCSS['gap-28px']+' d-flex justify-content-start mb-4'}>
                            <CustomRadio id="h"
                                    name="sexo"
                                    value="hombre"
                                    label="Hombre"
                                    state={formValues}
                                    updateState={setFormValues}/>

                            <CustomRadio id="m"
                                    name="sexo"
                                    value="mujer"
                                    label="Mujer"
                                    state={formValues}
                                    updateState={setFormValues}/>
                        </div> 
                        <InputText className='mb-4' 
                                   label="Altura (cm)" 
                                   placeholder='Escribe tu altura' 
                                   name="altura"
                                   inputValidation={inputsValidations}
                                   inputValue={formValues.altura}
                                   updateState={setFormValues}/>

                        <InputText className='mb-4'
                                   label="Peso (kg)" 
                                   placeholder='Escribe tu peso' 
                                   name="peso"         
                                   inputValidation={inputsValidations}                         
                                   inputValue={formValues.peso}
                                   updateState={setFormValues}/>

                        <InputText className='mb-4' 
                                   label="Cintura (cm)" 
                                   placeholder='Medida de tu cintura' 
                                   name="cintura"
                                   inputValidation={inputsValidations}
                                   inputValue={formValues.cintura}
                                   updateState={setFormValues}/>

                        <InputText className={`mb-4 ${formValues.sexo !== "mujer" && "d-none"}`}
                                   label="Caderas (cm)" 
                                   placeholder='Medida de tus caderas' 
                                   name="caderas"
                                   inputValidation={inputsValidations}
                                   inputValue={formValues.caderas}
                                   updateState={setFormValues}/>

                        <InputText className='mb-4' 
                                   label="Cuello (cm)" 
                                   placeholder='Medida de tu cuello' 
                                   name="cuello"
                                   inputValidation={inputsValidations}
                                   inputValue={formValues.cuello}
                                   updateState={setFormValues}/>
                                              
                        
                        <div className={classCSS['gap-28px']+' d-flex justify-content-start'}>                        
                            <Button type="submit"
                                    colorType='primary'
                                    className={!isFormValid() && classCSS['disabled']}>
                                Calcular
                            </Button>

                            <Button type="button"
                                    colorType='transparentPrimary'
                                    onClick={()=>limpiarForm()}>
                                Limpiar
                            </Button>
                        </div>
                    </form>                
                </div>
            </div>
            <div className={`${!showInformationBar && "d-none"} ${classCSS['pl-6']} ${classCSS['pt-6']} col-md-7 d-flex flex-column`}>
                <InformationBar value={result}/>
            </div>
        </div>
     );
}
 
export default CalculatorForm;