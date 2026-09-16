import test from 'node:test';
import assert from 'node:assert/strict';
import { moveTask } from '../src/store/board-domain.js';

test('moving a task preserves source and creates exactly one destination copy', () => {
  const board = { columns: [{ id: 1, cards: [{ id: 'a', title: 'Demo' }] }, { id: 2, cards: [] }] };
  const moved = moveTask(board, 'a', '2');
  assert.equal(board.columns[0].cards.length, 1);
  assert.equal(moved.columns[0].cards.length, 0);
  assert.equal(moved.columns[1].cards[0].id, 'a');
  assert.deepEqual(moveTask(board, 'a', 'missing'), board);
  assert.deepEqual(moveTask(board, 'missing', '2'), board);
});
