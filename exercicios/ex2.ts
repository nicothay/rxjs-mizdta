import { Observable } from 'rxjs';

const ex2 = () => {
  const observable = new Observable((subscribe) => {
    subscribe.next('RxJS');
    subscribe.next('é');
    subscribe.next('muito');
    subscribe.next('legal');

    const number = Math.random();
    if (number > 0.5) {
      subscribe.next('É MAIOR!');
      subscribe.complete();
    } else {
      subscribe.next('É MENOR!');
      subscribe.error('ERROR');
    }
  });

  observable.subscribe({
    next: (value
      ) => {
      console.log(value);
    },
    error: (value) => {
      console.log('Error: ', value);
    },
    complete: () => {
      console.log('FIM');
    },
  });
};

export default ex2;
