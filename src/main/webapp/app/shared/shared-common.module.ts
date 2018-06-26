import { NgModule } from '@angular/core';

import { GirosdelsurJhipsterFullSharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GirosdelsurJhipsterFullSharedLibsModule],
    declarations: [FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GirosdelsurJhipsterFullSharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GirosdelsurJhipsterFullSharedCommonModule {}
