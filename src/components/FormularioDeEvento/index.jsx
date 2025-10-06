import './formulario-de-evento.style.css'
import { TituloFomulario } from '../TituloFomulario'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { Label } from '../Label'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { Botao } from '../Botao'
import { ListaSuspensa } from '../ListaSuspensa'


export function FormularioDeEventos({temas, aoSubmeter}) {

    function aoFormSubmetido(formData) {
        const evento = {
            capa: formData.get('capa'),
            tema: temas.find(function (item) {
                return item.id == formData.get('tema')
            }),
            data: new Date(formData.get('dataEvento')),
            titulo: formData.get('nomeEvento')
        }

        aoSubmeter(evento)
    }

    return (
        <form className='form-evento' action={aoFormSubmetido}>
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
                    <Label htmlFor="capa">
                        Qual o endereco da imagem de capa ?
                    </Label>
                    <CampoDeEntrada type="text" id='capa' placeholder='http://...' name='capa' />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlFor="dataEvento">
                        Data do evento
                    </Label>
                    <CampoDeEntrada type="date" id='dataEvento' name='dataEvento' />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlFor="tema">
                       Tema do evento
                    </Label>
                    <ListaSuspensa id='tema' name='tema' itens={temas} />
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