import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'participant',
        loadChildren: () => import('./participant/participant.module').then(m => m.TiaavirtualizationParticipantModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class TiaavirtualizationEntityModule {}
