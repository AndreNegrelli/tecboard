import './formulario-de-evento.style.css'
import { TituloFomulario } from '../TituloFomulario'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { Label } from '../Label'
import { CampoDeEntrada } from '../CampoDeEntrada'


export function FormularioDeEventos() {
    return (
        <form className='form-evento'>
            <TituloFomulario>
                Preencha para criar um evento:
            </TituloFomulario>
            <div className='campos'>
                <CampoDeFormulario>
                    <Label htmlFor="nomeEvento">
                        Qual o nome do evento ?
                    </Label>
                    <CampoDeEntrada type="text" id='nomeEvento' placeholder='Summer dev hits' name='nomeEvento' />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlFor="dataEvento">
                        Data do evento
                    </Label>
                    <CampoDeEntrada type="date" id='dataEvento' name='dataEvento' />
                </CampoDeFormulario>
            </div>
        </form>
    )
} FormularioDeEventos