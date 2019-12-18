import next from 'next';
import supertest from 'supertest';
import express from 'express';
import { setup } from '../../server/setup';

const app = next({ dev: true });
const server = setup(app, express());
export const agent = supertest(server);
