import { SafePipe } from './safe.pipe';

describe('SafePipe', () => {
    let pipe: SafePipe;
    let sanitiser: any;

    beforeEach(() => {
        sanitiser = jasmine.createSpyObj('DomSanitizer', [
            'bypassSecurityTrustResourceUrl',
            'bypassSecurityTrustUrl',
            'bypassSecurityTrustScript',
            'bypassSecurityTrustStyle',
            'bypassSecurityTrustHtml'
        ]);
        pipe = new SafePipe(sanitiser);
    });

    it('should create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should call bypassSecurityTrustResourceUrl on resource', () => {
        const value = pipe.transform('test', 'resource');
        expect(sanitiser.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith('test');
    })

    it('should call bypassSecurityTrustUrl on url', () => {
        const value = pipe.transform('test', 'url');
        expect(sanitiser.bypassSecurityTrustUrl).toHaveBeenCalledWith('test');
    });

    it('should call bypassSecurityTrustScript on script', () => {
        const value = pipe.transform('test', 'script');
        expect(sanitiser.bypassSecurityTrustScript).toHaveBeenCalledWith('test');
    });

    it('should call bypassSecurityTrustStyle on style', () => {
        const value = pipe.transform('test', 'style');
        expect(sanitiser.bypassSecurityTrustStyle).toHaveBeenCalledWith('test');
    });

    it('should call bypassSecurityTrustHtml on html', () => {
        const value = pipe.transform('test', 'html');
        expect(sanitiser.bypassSecurityTrustHtml).toHaveBeenCalledWith('test');
    });
});
