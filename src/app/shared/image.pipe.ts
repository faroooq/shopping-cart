import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl'
})
export class ImagePipe implements PipeTransform {

  transform(value: string, fallback: string): unknown {

    let imageUrl = "";
    if (value) {
      imageUrl = value;
    } else {
      imageUrl = fallback;
    }
    return imageUrl;
  }
}

