/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
// užduotys/src/union-operators.ts
// užduotys/src/tuples.ts
// užduotys/src/assertions.ts
// užduotys/src/literal-types.ts
// užduotys/src/enums.ts

// const printResults = <FunctionArgs extends any[], FunctionReturnType>(
//   fun: (...args: FunctionArgs) => FunctionReturnType,
//   dataSamples: FunctionArgs[],
// ): void => {
//   const result = dataSamples.reduce<{ [props: string]: FunctionReturnType }>((
//     prevResult,
//     dataSample,
//   ) => ({
//     ...prevResult,
//     [`${fun.name ?? 'solution'}(${dataSample.join(', ')})`]: fun(...dataSample),
//   }), {});

//   console.table(result);
// };

// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Tuples - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓

  type PersonTuple = [string, number];

  type Dog = {
    name: string,
    age: number,
    breed: 'Dalmantin' | 'Tax',
  };
  type Person = {
    name: string,
    age: number,
  };
  type FriendshipTuple = [Person, Dog];

  type PointTuple = [number, number];
  type TriangleTuple = [PointTuple, PointTuple, PointTuple];
  // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

  console.groupCollapsed('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
  {
    // sprendimo pavyzdžius spausdinkite čia
    const person1: PersonTuple = ['Kerpis', 12];
    const person2: PersonTuple = ['Kiaunė', 24];

    const tuplePerson = (nameAge: string): string => nameAge;

    console.log(person1);
    printResults(tuplePerson, [
      [person1],
      [person2],
    ]);
  }
  console.groupEnd();

  console.groupCollapsed('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
  {
    // sprendimo pavyzdžius spausdinkite čia
    const friendship1: FriendshipTuple = [{
      name: 'Agnolis',
      age: 12,
    }, {
      name: 'Barkis',
      age: 2,
      breed: 'Dalmantin',
    }];

    console.log(friendship1);

    const tupleFriendship = (person: string): string => [person[0].name, person[0].age, person[1].name, person[1].age, person[1].breed];
    printResults(tupleFriendship, [
      [friendship1],
    ]);
    // const tupleFriendship = (person: string, dog?: string, breed?: string): string => person;
    // printResults(tupleFriendship, [
    //   [[friendship1[0].name, friendship1[0].age,
    //   friendship1[1].name, friendship1[1].age, friendship1[1].breed]],
    // ]);
  }
  console.groupEnd();

  console.groupCollapsed('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
  {
    // sprendimo pavyzdžius spausdinkite čia
    const triangle1: TriangleTuple = [[-2, 1], [2, 2], [3, 1]];
    const rightTriangle: TriangleTuple = [[0, 0], [4, 0], [4, 3]];

    console.log({
      triangle1,
      rightTriangle,
    });
  }
  console.groupEnd();
}
console.groupEnd();
