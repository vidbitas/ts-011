// const inputField: HTMLInputElement | null = document.querySelector('#input');
// const result: HTMLParagraphElement | null = document.querySelector('#result');

// if (inputField === null) throw new Error('Neteisingas įvesties lauko selektorius');
// if (result === null) throw new Error('Neteisingas rezultatų konteinerio selektorius');

// const handleFieldChange: EventListener = (event) => {
//   const element: HTMLInputElement = event.target as HTMLInputElement;
//   result.innerHTML = element.value;
// };

// const a = 5;
// console.log(handleFieldChange);

// inputField.addEventListener('keyup', handleFieldChange);

type Student = [{
  name: string,
  surname: string,
  kursas: number,
  vidurkis: number,
}];

type Flat = {
  name: string,
  id: number,
};

const Student = [
  {
    name: 'Petras', surname: 'Petraitis', kursas: 3, vidurkis: 5,
  },
  {
    name: 'Petras1', surname: 'Petraitis1', kursas: 3, vidurkis: 5,
  },
  {
    name: 'Petras2', surname: 'Petraitis2', kursas: 4, vidurkis: 6,
  },
  {
    name: 'Petras3', surname: 'Petraitis3', kursas: 4, vidurkis: 6,
  },
  {
    name: 'Petras4', surname: 'Petraitis4', kursas: 5, vidurkis: 7,
  },
  {
    name: 'Petras5', surname: 'Petraitis5', kursas: 5, vidurkis: 7,
  },
];
console.log('xx ============= ', Student.map((el) => ({
  names: el.name, surname: el.surname, kursas: el.kursas, vidurkis: el.vidurkis,
})));

const fDouble = (num: number): number => num * 2;

console.log(fDouble(5));

const arr = [1, 2, 3, 4, 5];

console.log(arr.map((e) => e));
