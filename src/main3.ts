// import { printBlue } from "./helpers";

// const words: string[] = ['I\m', 'blue', 'dabudy', 'dabudaj'];

// words.forEach(printBlue);

// type People = {
//   vardas: string,
//   amzius: number,
// };

// const People: object[] = [
//     {vardas: 'Jonas', amzius: 45},
//     {vardas: 'Petras', amzius: 55},
// ]

// const money: Number[] = [1,2,5,10,20,50];

/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

/*
  Užduočių atlikimo eiga:
  * Pirmiausiai perskaitykite visą užduotį:

  * Klauskite dėstytojo užduoties paaiškinimo, jeigu užduotis nėra aiški.

  * Galvoje susidarytkite sprendimo planą:
    * Kaip atliksiu užduotį? Galbūt verta pasibraižyti sprendimo idėją ant lapelio?
    * Kokių tipų reikės? Parametrų tipai, rezultatų tipai, funkcijų tipai.
    * Kaip aiškiai ir tvarkingai pateiksiu rezultatus?

  * Bandykite atlikti užduotį:
    * Pavyko:
      * Atspausdinkite rezultatus ir/arba veikimo pavyzdžius
      * Pabandykite patobulinti savo kodą:
        * pabandykite aiškiau aprašyti kintamųjų/tipų pavadinimus
        * sužiūrėkite ar tikrai naudojate vieningą sintaksę
      * Palyginkite savo sprendimą su užuočių atsakymų failu.
      * Suformuokite klausimus dėstytojui, pagal sprendimų skirtumus
    * Nepavyko:
      * pažiūrėkite atsakymų failą ir PO VIENĄ EILUTĘ nusirašykite sprendimą
      * rašant kiekvieną eilutę smulkmeniškai suformuokite klausimus.

    * Spręskite kitus uždavinius, o kai dėstytojas aiškins užduoties sprendimą, klausykitės
      * Po dėstytojo sprendimo ir aiškinimo užduokite klausimus, kurių vis dar nesuprantate.

  Patarimai:
    * Paspauskite komandą: ALT + Z - tai padės lengviau skaityti užduočių tekstą
    * Nežiūrėkite į atsakymų failus anksčiau laiko.
      jūsų tikslas lavinti inžinerinį mąstymą, o ne atlikti užduotis.
    * Nesedėkite prie kompiuterio ilgiau nei 1 val iš eilės, darykite pertraukas po 10 min
    * Klauskite visko ko nesuprantate. Neklausdami eikvojat savo laiką, kurį šie kursai taupo.
      Gerbiat savo laiką - gerbiat save.
    * Kodo tvarka ir aiškumas tiek pat svarbūs kiek funkcionalumas. Išmoksite tai dabar,
      arba kuomet negausite darbo dėl netvarkingo kodo.
    * Atlikę užduotį, užduokite sau klausimą: "Ar tai geriausia ką galėjau?"
    * Įsigilinimas jūsų žinias iš supratimo perkelia į suvokimą. Tik suvokiant dalykus, galite
      žinias pritaikyti kūrybiškai. Iš to seka, kad užduoties atlikimo kokybė >>> užduočių kiekis
    * Užduočių rezultatų pateikimas tike pat svarbus, kiek sprendimas.

*/

// 10 min

console.groupCollapsed('1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis');
{
  // Funkcijos deklaravimas
  const printCapitalized = (str: string): string => {
    const wordCapitalized = str.toUpperCase();
    return wordCapitalized;
    // console.log(wordCapitalized);
  };

  // console.log('abcd:');
  // printCapitalized('abcd');
  // console.log('"AAAA');
  // printCapitalized('AAAA');
  // console.log('"aBcD');
  // printCapitalized('aBcD');

  // eslint-disable-next-line @typescript-eslint/quotes
  console.table({
    'printCapitalized("abcd")': printCapitalized('abcd'),
    'printCapitalized("AAAA")': printCapitalized('AAAA'),
    'printCapitalized("aBcD")': printCapitalized('aBcD'),
  });
}
console.groupEnd();

// 10 min
console.groupCollapsed('2. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių');
{
  // Funkcijos deklaravimas
  const printWordLengt = (word1: string, word2: string): number => word1.length + word2.length;
  console.table({
    'printWordLengt("abcd", "efghkl;mn")-dvieju zodziu ilgis': printWordLengt('abcd', 'efghkl;mn'),
  });
}
console.groupEnd();

// 10 min
console.groupCollapsed('3. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false');
{
  // Funkcijos deklaravimas
  // const printSecondWordChar = (word1: string | null, word2: string): boolean => (!!word2.charAt(0));
  // console.table({
  //   'printSecondWordChar("abcd", "a")-second word char = true': printSecondWordChar('abcd', 'a'),
  //   'printSecondWordChar("abcd", "2")-second word char = false': printSecondWordChar('abcd', '2'),
  // });

  const containsLetter = (word: string, letter: string): boolean => word.includes(letter);

  console.table({
    'labas, a': containsLetter('labas', 'a'),
    'kempė, a': containsLetter('kempė', 'a'),
    'Finakolė, u': containsLetter('Finakolė', 'u'),
  });
}
console.groupEnd();

// 10 min
console.groupCollapsed('4. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių');
{
  const containsLetterCount = (word: string): boolean => !(word.length % 2);

  console.table({
    'labas = false': containsLetterCount('labas'),
    'labas2 = true': containsLetterCount('labas2'),
  });
}
console.groupEnd();

// 15 min
console.groupCollapsed('5. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje');
{
  const balses = ['a', 'e', 'i', 'o', 'u'];
  // word='abae'.split('').map(el => str.includes(el)).filter(ok => ok === true)
  // const findBalse = (word: string): {} =
}
console.groupEnd();

// 15 min
console.groupCollapsed('6. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje');
{

}
console.groupEnd();

// 15 min
console.groupCollapsed('7. Sukurkite funkciją, kuri ištrintų pirmą surastą simbolį žodyje ir grąžintų pakeistą žodį');
{

}
console.groupEnd();

// 20 min
//  7. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.groupCollapsed('7. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.');
{

}
console.groupEnd();

// 60 min
// 8. Sukurkite funkciją, kuri taiso teksto klaidas, pagal tokius reikalavimus:
//  * Pirma sakinio raidė didžioji.
//  * Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  * Bet koks kiekis tarpų pakeičiamas vienu tarpu
//  * Pašalinti tarpus aplink visą tekstą
console.groupCollapsed('8. Sukurkite funkciją, kuri taiso pastraipos klaidas');
{

}
console.groupEnd();
