import "./Dropdown.css"



const Dropdown = (props) => {

    return(
<div className="dropdown">
    <label>{props.label}</label>
        <select value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio}>
            <option>Selecione o time</option>
            {props.itens.map(item => <option key={item}>{item}</option>)}
        </select>
</div>

    )

}

export default Dropdown