import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import Dropdown from '../Dropdown'
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Sócios',
        'Front-End',
        'Back-End',
        'Mobile',

    ]

    const aoSalvar =(evento)=>{

        evento.preventDefault()
        alert("Salvou porra")
    }

    return (

        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" />
                <Dropdown obrigatorio={true} label="Times" itens={times}></Dropdown>
                <Botao>Criar Card</Botao>

            </form>
        </section>

    )

}

export default Formulario