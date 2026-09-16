export function moveTask(board, cardId, targetId) {
  const card = board.columns.flatMap(column => column.cards).find(item => String(item.id) === String(cardId));
  if (!card || !board.columns.some(column => String(column.id) === String(targetId))) return board;
  return { ...board, columns: board.columns.map(column => ({
    ...column,
    cards: [...column.cards.filter(item => item.id !== card.id), ...(String(column.id) === String(targetId) ? [card] : [])],
  })) };
}
