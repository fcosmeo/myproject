Using Ng-Bootstrap
Ng-Bootstrap contains a set of native Angular directives based on Bootstrap?s markup and CSS. As a result no dependency on jQuery or Bootstrap?s JavaScript is required. Ng-Bootstrap is based on Bootstrap 4 and can be added to your Angular project is the following way.
 
 Ng-Bootstrap is available as a NPM package, so the installation can be done by using the following command in the project directory:
 
 npm install --save @ng-bootstrap/ng-bootstrap
 
 Furthermore Ng-Bootstrap required Bootstrap 4 to be added to our project. Install it via:
$ npm install bootstrap@4.0.0-alpha.6
Now add bootstrap.min.css, jquery.min.js and bootstrap.min.js to you .angular-cli.json file, like we did it before.
 
 Once installed you need to import Ng-Bootstrap?s main module NgbModule from the package @ng-bootstrap/ng-bootstrap. Add the following import statement to app.module.ts:
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
Next, we need to add this module to the imports array of the @NgModule decorator. If you want to import NgbModule in your root module (e.g. AppModule) you need to call the forRoot() factory method, as you can see in the following:
@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgbModule.forRoot(), ...],
  bootstrap: [AppComponent]
})
export class AppModule {
}
If you want to import NgbModule in other modules (child modules of your root application module) you need to add it without calling the forRoot() method:
@NgModule({
  declarations: [OtherComponent, ...],
  imports: [NgbModule, ...]
})
export class OtherModule {
}

Ng-Bootstrap Components
Having imported NgbModule in your Angular application you can now make use of the Ng-Bootstrap components in your templates. The following components are available:
Accordion
Alert
Buttons
Carousel
Collapse
Datepicker
Dropdown
Modal
Pagination
Popover
Progressbar
Rating
Tabs
Timepicker
Tooltip
Typeahead
Let?s 
 
Let?s try it out and use some of these components in app.component.html:
<div class="container">
  <ngb-tabset>
    <ngb-tab title="Simple">
      <template ngbTabContent>
        <p>This is the content of the first tab!</p>
        <ngb-alert [dismissible]="false">
          <strong>Warning!</strong> This is an alert!
        </ngb-alert>
      </template>
    </ngb-tab>
    <ngb-tab>
      <template ngbTabTitle><b>Fancy</b> title</template>
      <template ngbTabContent>
        <p>This is the content of the second tab!</p>
        <p><ngb-progressbar type="success" [value]="25"></ngb-progressbar></p>
        <p><ngb-progressbar type="info" [value]="50"></ngb-progressbar></p>
        <p><ngb-progressbar type="warning" [value]="75"></ngb-progressbar></p>
        <p><ngb-progressbar type="danger" [value]="100"></ngb-progressbar></p>
      </template>
    </ngb-tab>
    <ngb-tab title="Disabled" [disabled]="true">
      <template ngbTabContent>
        <p>This tab is disabled</p>
      </template>
    </ngb-tab>
  </ngb-tabset>
</div>
