import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl'
})
export class ImagePipe implements PipeTransform {

  transform(value: string, fallback: string, forceHttps: boolean = false): string {

    let image = "";
    if (value) {
      image = value;
    } else {
      image = fallback;
    }
    return image;
  }
}
