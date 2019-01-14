import { NgModule } from '@angular/core';

import { FrontendSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [FrontendSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [FrontendSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FrontendSharedCommonModule {}
