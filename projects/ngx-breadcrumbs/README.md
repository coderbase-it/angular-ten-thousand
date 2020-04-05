# ngx-breadcrumbs

# Goal

Le but est garder une librairie simple d'utilisation , facilitant la mise en place d'un breadcrumb 
sans lien avec un librairie et laissait l'utilisateur maitre de la partie css
le breadcrumb peut etre proposé dynamiquement ou en manuel voir les deux     

## DEV GUIDELINES
```npm install && ng serve ngx-breadcrumbs-app```


# DEMO 
[DEMO](https://stackblitz.com/github/coderbase-it/angular-ten-thousand/tree/master/projects/ngx-breadcrumb-app)

## Installation
```bash
# install via npm
$ npm --save install @coderbase/ngx-breadcrumbs
# or install via yarn
$ yarn add @coderbase/ngx-breadcrumbs
```

To use this module you have to add it to the `imports` section in your `app.module.ts`. It should be lower than `RouterModule` import.

```javascript
import { RouterModule } from '@angular/router';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgxBreadcrumbsModule.forRoot()
  ],  
})
export class AppModule {}
```

Now you have to set it on the place in your global template. Usually, the best place is in `AppComponent` template.
```javascript
@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <coderbase-ngx-breadcrumbs></coderbase-ngx-breadcrumbs>
      <router-outlet></router-outlet>
    </div>`
})
export class AppComponent {}
```

## Configuration

Configuration of the breadcrumbs module is accessable in your route configuration.

```javascript
const routes: Route[] = {
  {
    path: '',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home',
      isHome: true,
      icon: 'fa fa-home',
      show: false
    }
  }
};
```
