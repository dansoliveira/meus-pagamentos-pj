import React from 'react';
import './App.css';

const numberFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

function App() {
  const [value, setValue] = React.useState<string>('')
  const [hours, setHours] = React.useState<number>(0)
  const [minutes, setMinutes] = React.useState<number>(0)
  const valorHora = 40

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    const splittedTime = value.split(' ')
    const hours = splittedTime.reduce((prev, cur) => {
        const [hours, ] = cur.split(':')

        return prev + Number(hours)
    }, 0)

    const minutes = splittedTime.reduce((prev, cur) => {
        const [, minutes] = cur.split(':')

        return prev + Number(minutes)
    }, 0)

    setValue(value)
    setHours(isNaN(hours) ? 0 : hours)
    setMinutes(isNaN(minutes) ? 0 : minutes)
  }
  
  return (
    <div className="App">
      <input type="textarea" value={value} onChange={handleInputChange} />
      <h5>Valor hora</h5>
      <p>{numberFormat.format(valorHora)}</p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
      }}>
        <div>
          <h5>Horas</h5>
          <p>{hours}</p>
        </div>
        <div>
          <h5>Minutos</h5>
          <p>{minutes}</p>
        </div>
      </div>
      <h4>Valor à receber</h4>
      <p>{numberFormat.format(hours * valorHora)}</p>
    </div>
  );
}

export default App;
