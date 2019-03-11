# Angular Module Starter

<p align="center">
    <img src="https://github.com/miki995/Angular-Module-Starter/blob/master/starter.png" alt="Angular Module Starter" width="200" height="200"/>
</p>

## Description
An Angular Module Starter kit featuring : Components, Services and Redux with (store, effects, actions).

## Getting Started

Download files or clone.


## Setup

To lazy load this module add this :

```
{
    canActivate: [AuthGuard],
    loadChildren: './starter/starter.module#StarterModule',
    path: 'planning'
}
```


and in your html, preferably sidebar or menu add [routerLink]="starter".

## Author

* **[Miroslav Maksimovic](https://github.com/miki995)** 
