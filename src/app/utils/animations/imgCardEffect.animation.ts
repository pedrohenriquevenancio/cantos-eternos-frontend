import { animate, style, transition, trigger } from '@angular/animations';

export const imgCardEffect = trigger('imgCardEffect', [
  transition(':enter', [
    style({ transform: 'scale(0.5)', opacity: 0 }),
    animate('0.5s cubic-bezier(.8, -0.6, 0.2, 1.5)', style({ transform: 'scale(1)', opacity: 1 }))
  ]),
  transition(':leave', [
    style({ transform: 'scale(1)', opacity: 1 }),
    animate('0.5s cubic-bezier(.8, -0.6, 0.2, 1.5)', style({ transform: 'scale(0.5)', opacity: 0 }))
  ])
]);
