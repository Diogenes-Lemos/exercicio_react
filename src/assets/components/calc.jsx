import { useState } from "react"
import './calc.css'

const Calc = () => {
    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);

    function resultado (altura, peso) {
        const Imc = peso / (altura * altura);
        return Imc || 0; 
    }

    function analisaImc() {

        const Analise = resultado(altura, peso);

        if (Analise === 0) {
            return 'Digite os valores solicitados'
        } else if (Analise <= 16.9) {
            return 'Muito abaixo do peso ideal';
        } else if (Analise > 16.9 && Analise < 18.5) {
            return 'Abaixo do peso ideal';
        } else if (Analise >= 18.5 && Analise < 25) {
            return 'Dentro do peso ideal';
        } else if (Analise >= 25 && Analise < 30) {
            return 'Acima do peso ideal';
        } else if (Analise >= 30 && Analise < 35) {
            return 'Com grau I de obesidade';
        } else if (Analise >= 35 && Analise < 40) {
            return 'Com grau II de obesidade';
        } else if (Analise >= 40) {
            return 'Com grau III de obesidade';
        } else {
            return 'Valores inseridos inválidos';
        }
    }

    return (
        <div className="calcarea">
            <form>
                <input type="number" placeholder='sua altura' onChange={data => setAltura(parseFloat(data.target.value))} />
                <input type="number" placeholder='seu peso' onChange={data => setPeso(parseFloat(data.target.value))} />
            </form>
            <h2>
                Seu IMC é {resultado(altura, peso).toFixed(1)}
            </h2>
            <h3>
                portanto você está:
            </h3>
            <span>
                { analisaImc() }
            </span>
        </div>
    )
}

export default Calc