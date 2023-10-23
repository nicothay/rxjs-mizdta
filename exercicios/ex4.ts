import { from } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import films from '../mock/films.json';

console.log('Films: ', films);

const ex4 = () => {
  const observable = from(films).pipe(
    // Retornar somente os atores
    map((film) => {
      return film.Actors;
    }),
    // transformar as strings de atores num vetor, separando os atores
    map((actors) => {
      const vetorAtores = actors.split(', ');
      return vetorAtores;
    })
  );
  const observable2 = from(films).pipe(
    // retornar o ano do filme
    map((film) => {
      return film.Year;
    }),
    // transformar as strings de anos em vetor, separando
    map((year) => {
      const vetorAno = year.split('–');
      return vetorAno;
    }),
    // remover valores vazios do vetor de ano
    map((year) => {
      const vetorAno = year.filter((year) => {
        if (year === '') return false;
        return true;
      });
      return vetorAno;
    })
  );
  const subscribe = observable.subscribe({
    next: (value) => {
      console.log(value);
    },
  });
  //escrever o ano na tela
  const subscribe2 = observable2.subscribe({
    next: (value) => {
      console.log(value);
    },
  });
};

export default ex4;
