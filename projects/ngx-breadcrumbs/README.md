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

To use this module (forRoot) you have to add it to the `imports` section in your `app.module.ts`. 


```javascript
import { RouterModule } from '@angular/router';
import { NgxBreadcrumbsModule } from '@coderbase/ngx-breadcrumbs';
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgxBreadcrumbsModule.forRoot({
    globalSeparator: '/'
})
  ],  
})
export class AppModule {}
```

For Lazy loading module or other module who want to override global separator , u have to use forChild()

```javascript
import { RouterModule } from '@angular/router';
import { NgxBreadcrumbsModule } from '@coderbase/ngx-breadcrumbs';
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NgxBreadcrumbsModule.forChild({
    globalSeparator: '*'
})
  ],  
})
export class LazyModule {}
```


Now you have to set it on the place in your component template

```html 
<coderbase-ngx-breadcrumbs>
 
     <coderbase-ngx-breadcrumb-item
         label="keyword"
         [route]="['/']"
     >
     </coderbase-ngx-breadcrumb-item>
 
     <coderbase-ngx-breadcrumb-item
         label="keyword"
         [route]="['/']"
          [active]="true"
     >
     </coderbase-ngx-breadcrumb-item>    <coderbase-ngx-breadcrumb-item
     label="keyword"
     [route]="['/']"
 >
 </coderbase-ngx-breadcrumb-item>
     <coderbase-ngx-breadcrumb-item class="first" [label]="'HOME'" [href]="'/'">
 
     </coderbase-ngx-breadcrumb-item>
 
 </coderbase-ngx-breadcrumbs>
```

## Cas d'utilisation du component et construction de votre breadcrumbs 


