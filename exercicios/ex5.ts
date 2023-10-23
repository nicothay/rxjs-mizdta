import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import films from '../mock/films.json';

const ex5 = () => {
  const observableFilmsTitle = of(films).pipe(
    map((films) => {
      const newFilms = films.map((film) => {
        return film.Title;
      });
      return newFilms;
    })
  );

  const subscribe1 = observableFilmsTitle.subscribe({
    next: (value) => {
      console.log('Título dos Filmes: ', value);
    },
  });

  const observableFilter = (filter) => {
    return observableFilmsTitle.pipe(
      map((filmTitleArray) => {
        const arrayFiltered = filmTitleArray.filter((filmTitle) => {
          const filmeTitleUppercase = filmTitle.toUpperCase();
          const filterUppercase = filter.toUpperCase();
          return filmeTitleUppercase.includes(filterUppercase);
        });
        return arrayFiltered;
      })
    );
  };

  const subscribe2 = observableFilter('a').subscribe({
    next: (value) => {
      console.log('Filtrando por "a"', value);
    },
  });

  const subscribe3 = observableFilter('b').subscribe({
    next: (value) => {
      console.log('Filtrando por "b"', value);
    },
  });

  const subscribe4 = observableFilter('Ava').subscribe({
    next: (value) => {
      console.log('Filtrando por "Ava"', value);
    },
  });

  const subscribe5 = observableFilter('ava').subscribe({
    next: (value) => {
      console.log('Filtrando por "ava"', value);
    },
  });
};

export default ex5;
