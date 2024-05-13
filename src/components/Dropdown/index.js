import "./Dropdown.css"



const Dropdown = (props) => {

    return(
<div className="dropdown">
    <label>{props.label}</label>
        <select required={props.obrigatorio}>
            <option>Selecione o time</option>
            {props.itens.map(item => <option key={item}>{item}</option>)}
        </select>
</div>

    )

}

export default Dropdown