import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { SectionsModule } from './sections/sections.module';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { PresentationModule } from './presentation/presentation.module';
import { CareersComponent } from './careers/careers.component';
import { HistoryComponent } from './history/history.component';
import { MissionVissionComponent } from './mission-vission/mission-vission.component';
import { DirectorsComponent } from './directors/directors.component';
import { LogisticsComponent } from './logistics/logistics.component';

@NgModule({
    declarations: [					
        AppComponent,
        NavbarComponent,
      CareersComponent,
      HistoryComponent,
      MissionVissionComponent,
      DirectorsComponent,
      LogisticsComponent
   ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        PresentationModule,
        SectionsModule,
        ComponentsModule,
        ExamplesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
