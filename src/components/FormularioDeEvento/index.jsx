import './formulario-de-evento.style.css'
import { TituloFomulario } from '../TituloFomulario'
import {CampoDeFormulario} from '../CampoDeFormulario'
import { Label } from '../Label'
import {CampoDeEntrada} from '../CampoDeEntrada'


export function FormularioDeEventos () {
    return (
        <form className='form-evento'>
            <TituloFomulario>
                Preencha para criar um evento:
            </TituloFomulario>
            <CampoDeFormulario>
                <Label htmlFor="Nome">
                    Qual o nome do evento ?
                </Label>
                <CampoDeEntrada type="text" id='nome' placeholder='Summer dev hits' name='nomeEvento' />
            </CampoDeFormulario>
        </form>
    )
} FormularioDeEventos