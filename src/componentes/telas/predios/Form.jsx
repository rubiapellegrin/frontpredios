import { useContext } from 'react'
import Alerta from '../../Alerta';
import Campo from './Campo';
import Dialogo from './Dialogo';
import PredioContext from './PredioContext';

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta } = useContext(PredioContext);
    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()

    return (
        <Dialogo id="modalEdicao" titulo="Prédio" idformulario="formulario" acaoCadastrar={acaoCadastrar}>
            <Alerta alerta={alerta} />
            <Campo id="txtcodigo" label="Codigo" tipo="number" classe="form-control"
                name="codigo" value={objeto.codigo}
                onchange={handleChange} required={false} readonly={true} msgvalido=""
                msginvalido=""
            />
            <Campo id="txtNome" label="Nome" tipo="text" classe="form-control"
                name="nome" value={objeto.nome}
                onchange={handleChange} required={true} readonly={false} msgvalido="ok"
                msginvalido="Informe o nome"
            />
            <Campo id="txtDescricao" label="Descricao" tipo="text" classe="form-control"
                name="descricao" value={objeto.descricao}
                onchange={handleChange} required={false} readonly={false} msgvalido="ok"
                msginvalido="Informe a descricao"
            />
            <Campo id="txtSigla" label="Sigla" tipo="text" classe="form-control"
                name="sigla" value={objeto.sigla}
                onchange={handleChange} required={false} readonly={false} msgvalido="ok"
                msginvalido="Informe a sigla"
            />
        </Dialogo>


    )
}

export default Form;