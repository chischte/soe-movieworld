import {Pipe, PipeTransform} from "@angular/core";

// basic pipe filtering for parsed JSON response
@Pipe({name: 'movieGenre'})
export class GenrePipe implements PipeTransform {
  transform(value: number): number {
    return Math.pow(value, 3);
  }
}
