import './campo-de-formulario.style.css'

export function CampoDeFormulario ({children}){
    return (
        <fieldset className='campo-form'>
            {children}
        </fieldset>
    )
}