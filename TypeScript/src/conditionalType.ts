// conditional type: type that depends on a condition, allowing for more dynamic and flexible type definitions.

type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

const resultC: C = true; // since B extends undefined is true

type RichPeopleVichele = {
  bike: string;
  car: string;
  ship: string;
};

// type CheckVeichele<T> = T extends "bike" | "car" | "ship" ? true : false;

type CheckVeichele<T> = T extends keyof RichPeopleVichele ? true : false;

type HasBike = CheckVeichele<"bike">;