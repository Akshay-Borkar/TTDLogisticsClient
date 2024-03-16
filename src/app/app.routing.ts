import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { PresentationComponent } from './presentation/presentation.component';
import { ComponentsComponent } from './components/components.component';
import { SectionsComponent } from './sections/sections.component';
import { AboutusComponent } from './examples/aboutus/aboutus.component';
import { AddproductComponent } from './examples/addproduct/addproduct.component';
import { BlogpostComponent } from './examples/blogpost/blogpost.component';
import { BlogpostsComponent } from './examples/blogposts/blogposts.component';
import { ContactusComponent } from './examples/contactus/contactus.component';
import { DiscoverComponent } from './examples/discover/discover.component';
import { EcommerceComponent } from './examples/ecommerce/ecommerce.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProductpageComponent } from './examples/productpage/productpage.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { RegisterComponent } from './examples/register/register.component';
import { SearchComponent } from './examples/search/search.component';
import { SettingsComponent } from './examples/settings/settings.component';
import { TwitterComponent } from './examples/twitter/twitter.component';
import { Page404Component } from './examples/page404/page404.component';
import { Page422Component } from './examples/page422/page422.component';
import { Page500Component } from './examples/page500/page500.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { CareersComponent } from './careers/careers.component';
import { HistoryComponent } from './history/history.component';
import { MissionVissionComponent } from './mission-vission/mission-vission.component';
import { DirectorsComponent } from './directors/directors.component';
import { LogisticsComponent } from './logistics/logistics.component';
import {PitchDeckComponent} from './pitchdeck/pitchdeck.component';
import {OfficeToursComponent} from './officetours/officetours.component';
import {WhyChooseUSComponent} from './whychooseus/whychooseus.component';
import {ElectrifyingTTDComponent} from './electrifyingttd/electrifyingttd.component';

const routes: Routes =[
    { path: 'home',         component: PresentationComponent },
    { path: 'careers',   component: CareersComponent },

    { path: 'about/history',   component: HistoryComponent },
    {path:'about/whychooseus',component:WhyChooseUSComponent},
    { path: 'about/mission',   component: MissionVissionComponent },
    { path: 'about/directors',   component: DirectorsComponent },
    { path: 'services/logistics',   component: LogisticsComponent },
    { path: 'examples/contactus',   component: ContactusComponent },
    { path: 'about/pitchdeck',   component: PitchDeckComponent },
    {path:'about/officetours',component:OfficeToursComponent},
    {path:'electrifyingttd',component:ElectrifyingTTDComponent},


    // { path: 'components',           component: ComponentsComponent },
    // { path: 'sections',             component: SectionsComponent },
    // { path: 'nucleoicons',          component: NucleoiconsComponent },
    // { path: 'examples/aboutus',     component: AboutusComponent },
    // { path: 'examples/addproduct',  component: AddproductComponent },
    // { path: 'examples/blogpost',    component: BlogpostComponent },
    // { path: 'examples/blogposts',   component: BlogpostsComponent },
    // { path: 'examples/contactus',   component: ContactusComponent },
    // { path: 'examples/discover',    component: DiscoverComponent },
    // { path: 'examples/ecommerce',   component: EcommerceComponent },
    // { path: 'examples/landing',     component: LandingComponent },
    // { path: 'examples/login',       component: LoginComponent },
    // { path: 'examples/productpage', component: ProductpageComponent },
    // { path: 'examples/profile',     component: ProfileComponent },
    // { path: 'examples/register',    component: RegisterComponent },
    // { path: 'examples/search',      component: SearchComponent },
    // { path: 'examples/settings',    component: SettingsComponent },
    // { path: 'examples/twitter',     component: TwitterComponent },
    // { path: 'examples/page404',     component: Page404Component },
    // { path: 'examples/page422',     component: Page422Component },
    // { path: 'examples/page500',     component: Page500Component },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes,{
          useHash: true
        })
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
