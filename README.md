# Angular Module Starter

![text](https://github.com/miki995/Angular-Module-Starter/blob/master/starter.jpg)


## Description
An Angular Module Starter kit featuring : Components, Services and Redux with (store, effects, actions).

## Getting Started

Download files or clone.


## Setup

To lazy load this module add this :

* Angular 6-

```
{
    canActivate: [AuthGuard],
    loadChildren: 'app/starter/starter.module#StarterModule',
    path: 'planning'
}
```

* Angular 7+

```
{
    canActivate: [AuthGuard],
    loadChildren: () => StarterModule,
    path: 'planning'
}
```

and in your html, preferably sidebar or menu add [routerLink]="starter".

## Author

* **[Miroslav Maksimovic](https://github.com/miki995)** 
