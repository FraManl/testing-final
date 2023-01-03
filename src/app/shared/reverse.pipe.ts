import { Pipe } from "@angular/core";

// isolated test
@Pipe({
  name: "reverse",
})
export class ReversePipe {
  transform(value: string) {
    return value.split("").reverse().join("");
  }
}
