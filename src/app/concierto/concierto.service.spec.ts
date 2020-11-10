

import { TestBed, async, inject } from '@angular/core/testing';
import { ConciertoService } from './concierto.service';
import {
  HttpTestingController,
  HttpClientTestingModule,
 } from "@angular/common/http/testing";

 import faker from "faker";
import { Concierto } from "./concierto";
import { environment } from "../../environments/environment";

describe('Service: Concierto', () => {
  beforeEach(() => {
    let service: ConciertoService;
    let httpMock: HttpTestingController;
    let apiUrl = environment.baseUrl + "conciertos";
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConciertoService]
    });

  afterEach(() => {
    httpMock.verify();
  });

  it("getPost() should return 10 records", () => {
    let mockPosts: Concierto[] = [];

    for (let i = 1; i < 11; i++) {
      let concierto = new Concierto(
        i,
        faker.random.number(),
        faker.lorem.sentence(),
        faker.lorem.sentenge(),
        null,
        null,

      );

      mockPosts.push(concierto);
    }

    service.getConciertos().subscribe((concierto) => {
      expect(concierto.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mockPosts);
  });
});
});
