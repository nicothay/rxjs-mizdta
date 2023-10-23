import { fromEvent, concatMap, interval, take, of } from 'rxjs';
 
const ex1 = () => {
  const observableTempo = of(1000);
  const observableIntervalo = (value) => {
    return interval(value);
  };
  const observableOperacao = observableTempo.pipe(
    concatMap((valueObservableTempo) => {
     console.log(valueObservableTempo);
      return observableIntervalo;
    })
   ); 
   //observable3.subscribe((x) => console.log(x));
};

export default ex1;
