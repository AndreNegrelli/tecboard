import './formulario-de-evento.style.css'
import { TituloFomulario } from '../TituloFomulario'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { Label } from '../Label'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { Botao } from '../Botao'
import { ListaSuspensa } from '../ListaSuspensa'


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
                <CampoDeFormulario>
                    <Label htmlFor="dataEvento">
                       Tema do evento
                    </Label>
                    <ListaSuspensa></ListaSuspensa>
                </CampoDeFormulario>
            </div>
            <div className='actions'>
                <Botao>
                    Criar evento
                </Botao>
            </div>
        </form>
    )
} FormularioDeEventos