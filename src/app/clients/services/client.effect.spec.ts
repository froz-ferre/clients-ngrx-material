import { TestBed, inject, fakeAsync, flush } from '@angular/core/testing';

import { ClientService } from './client.service';
import { ClientEffects } from './client.effect';

import { EffectsTestingModule } from '@ngrx/effects';

describe('ClientEffects', () => {
    let runner, postsEffects, postsService;

    beforeEach(() => TestBed.configureTestingModule({
      imports: [
        EffectsTestingModule
      ],
      providers: [
        ClientEffects,
        {
          provide: ClientService,
          useValue: jasmine.createSpyObj('clientService', ['get'])
        }
      ]
    }));

    beforeEach(() => {
        runner = TestBed.get(EffectsRunner);
        postsEffects = TestBed.get(ClientEffects);
        postsService = TestBed.get(ClientService);
    });

  });
