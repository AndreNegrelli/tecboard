import './titulo-formulario.style.css'

export function TituloFomulario({ children }) {
    return (
        <h2 className='titulo-form'>
            {children}
        </h2>
    )
}