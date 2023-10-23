import { from } from 'rxjs';
import { map } from 'rxjs/operators';

const ex3 = () => {
  const notas = ['9,5', '1,7', '5,6', '4,1', '2,0', '8,3'];

  const observable = from(notas).pipe(
    // trocar virgulas para pontos
    map((nota) =>{
      const updtNota = nota.replace(',', '.');
      return updtNota;
    }),
    // Transformar string em numeros
    map((nota) => {
      const floatNota = Number(nota);
      return floatNota;
    }),
    // Transformar em status
    map((nota) => {
      if (nota >= 5) {
        return 'Aprovado';
      } else {
        return 'Reprovado';
      }
    }),
    // Transformar os status
    /*
    map((status) => {
      return status[0];
    })
    */
  );

  const subscribe = observable.subscribe({
    next: (value) => {
      console.log(value);
    },
  });
};

export default ex3;