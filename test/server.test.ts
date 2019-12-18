import { agent } from './libs/agent';

test('バナナが取得できること', done => {
    agent.get('/api/banana')
    .expect(200, {
        banana: [
            '美味しいバナナ',
            '普通のバナナ',
            '腐ったバナナ'
        ]
    }, done);
});