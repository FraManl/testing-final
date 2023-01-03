/* tslint:disable:no-unused-variable */

// isolated test
import { ReversePipe } from "./reverse.pipe";

// using basic isolated testing package (not angular dedicated)
// in the case where we need to test non-angular, classical JS tests : ISOLATED TEST
describe("Pipe: ReversePipe", () => {
  it("should reverse the inputs", () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform("hello")).toEqual("olleh");
  });
});
