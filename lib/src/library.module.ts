/**
 * @Author: Alex Sorafumo
 * @Date:   09/12/2016 9:39 AM
 * @Email:  alex@yuion.net
 * @Filename: index.ts
 * @Last modified by:   Alex Sorafumo
 * @Last modified time: 06/02/2017 11:28 AM
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { LIBRARY_SETTINGS } from './settings';
import { SafePipe } from './pipes/safe.pipe';

import * as day_api from 'dayjs';
const dayjs = day_api;

const PIPES: Type<any>[] = [SafePipe];

@NgModule({
    declarations: [...PIPES],
    imports: [CommonModule],
    exports: [...PIPES]
})
class LibraryModule {
    public static version = '0.1.0';
    private static init = false;
    private build = dayjs(1552621020000);

    constructor() {
        if (!LibraryModule.init) {
            const now = dayjs();
            LibraryModule.init = true;
            const build = now.isSame(this.build, 'd')
                ? `Today at ${this.build.format('h:mmA')}`
                : this.build.format('D MMM YYYY, h:mmA');
            LIBRARY_SETTINGS.version(LibraryModule.version, build);
        }
    }
}

export { LibraryModule as ACA_PIPES_MODULE };
export { LibraryModule as APipesModule };
