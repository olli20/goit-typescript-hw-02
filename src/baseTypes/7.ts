/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Tages { MO, DI, MI, DO, FR, SA, SO }

const isWeekend = (tag: Tages): boolean => tag === Tages.SA || tag === Tages.SO;

// const isWeekend = (tag: Tages): boolean => {
//   if (tag === Tages.SA || tag === Tages.SO) {
//     return true;
//   } else {
//     return false;
//   }
// }

export {};
