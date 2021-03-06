import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { JhiResolvePagingParams } from 'ng-jhipster';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IParticipant, Participant } from 'app/shared/model/participant.model';
import { ParticipantService } from './participant.service';
import { ParticipantComponent } from './participant.component';
import { ParticipantDetailComponent } from './participant-detail.component';
import { ParticipantUpdateComponent } from './participant-update.component';

@Injectable({ providedIn: 'root' })
export class ParticipantResolve implements Resolve<IParticipant> {
  constructor(private service: ParticipantService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IParticipant> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((participant: HttpResponse<Participant>) => {
          if (participant.body) {
            return of(participant.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Participant());
  }
}

export const participantRoute: Routes = [
  {
    path: '',
    component: ParticipantComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'Participants'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: ParticipantDetailComponent,
    resolve: {
      participant: ParticipantResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Participants'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: ParticipantUpdateComponent,
    resolve: {
      participant: ParticipantResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Participants'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: ParticipantUpdateComponent,
    resolve: {
      participant: ParticipantResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Participants'
    },
    canActivate: [UserRouteAccessService]
  }
];
