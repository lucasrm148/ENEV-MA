import React, { useState, useEffect } from 'react';

const TimeNow = (updateTime = 1000) => {
  const [tempoAtual, setTempoAtual] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTempoAtual(new Date());
    }, updateTime); // Atualiza a cada segundo

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, []);
  function diasNoMes(ano, mes) {
    return new Date(ano, mes, 0).getDate();
  }

  function diasNoMes(ano, mes) {
    return new Date(ano, mes, 0).getDate();
  }

  function tempoAte(dataEvento,negative = false) {
    const agora = new Date();

    let ano = dataEvento.getFullYear() - agora.getFullYear();
    let mes = dataEvento.getMonth() - agora.getMonth();
    let dia = dataEvento.getDate() - agora.getDate();
    let hora = dataEvento.getHours() - agora.getHours();
    let minuto = dataEvento.getMinutes() - agora.getMinutes();
    if (minuto < 0) {
      minuto += 60;
      hora--;
    }

    if (hora < 0) {
      hora += 24;
      dia--;
    }

    if (dia < 0) {
      mes--;
      let mesAnterior = (dataEvento.getMonth() - 1 + 12) % 12;
      let anoAjustado = mesAnterior === 11 ? dataEvento.getFullYear() - 1 : dataEvento.getFullYear();
      dia += diasNoMes(anoAjustado, mesAnterior + 1);
    }

    if (mes < 0) {
      mes += 12;
      ano--;
    }
    if(ano < 0 && !negative){// aceita numeros negativos
        ano = 0 ;
        mes = 0;
        dia = 0 ;
        hora = 0;
        minuto = 0;
    }
    let data = new Date(`${ano}-${mes}-${dia}-${hora}-${minuto}`);
    return {
      anos: ano,
      meses: mes,
      dias: dia,
      horas: hora,
      minutos: minuto,
      data: data
    };
  }
  // Exemplo de uso:
return {
  tempoAtual: tempoAtual,
  tempoAte: (data) => { return tempoAte(data) }
};
 
}
export default TimeNow;