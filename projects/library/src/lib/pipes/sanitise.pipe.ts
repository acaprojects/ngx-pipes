import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle } from '@angular/platform-browser';

enum SecurityContext {
    NONE = 0,
    HTML = 1,
    STYLE = 2,
    SCRIPT = 3,
    URL = 4,
    RESOURCE_URL = 5
}

@Pipe({
    name: 'sanitise'
})
export class SanitisePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}

    transform(
        value: any,
        type: 'resource' | 'url' | 'script' | 'style' | 'html' = 'html'
    ): SafeHtml | SafeResourceUrl | SafeScript | SafeStyle {
        switch (type) {
            case 'resource':
                return this.sanitizer.sanitise(SecurityContext.RESOURCE_URL, value);
            case 'url':
                return this.sanitizer.sanitise(SecurityContext.URL, value);
            case 'script':
                return this.sanitizer.sanitise(SecurityContext.SCRIPT, value);
            case 'style':
                return this.sanitizer.sanitise(SecurityContext.STYLE, value);
            default:
                return this.sanitizer.sanitise(SecurityContext.HTML, value);
        }
    }
}
