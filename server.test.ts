import next from 'next';
import supertest from 'supertest';
import express from 'express';
import { setup } from './server/setup';

const app = next({ dev: true });
const server = setup(app, express());
const agent = supertest(server);

test('バナナが取得できること', done => {
    agent.get('/api/banana')
    .expect(200, {
        banana: [
            '美味しいバナナ',
            '普通のバナナ',
            '腐ったバナナ'
        ]
    }, done);
})