import { useState } from 'react';
import useBoard from '../../store/Board';
import { moveTask } from '../../store/board-domain';
import './Board.css';

export default function BoardPage() {
  const { board, setBoard } = useBoard();
  const [message, setMessage] = useState('');
  const move = (id, columnId) => {
    setBoard(moveTask(board, id, columnId));
    setMessage('Cartão movido.');
  };
  const addColumn = () => {
    const title = window.prompt('Nome da coluna')?.trim();
    if (title) setBoard({ ...board, columns: [...board.columns, { id: crypto.randomUUID(), title, cards: [] }] });
  };
  return <section className="board-container">
    <h1>Divisão de tarefas</h1>
    <button onClick={addColumn}>Adicionar coluna</button>
    <p role="status">{message}</p>
    <div className="task-columns">
      {board.columns.map(column => <section key={column.id} className="task-column"
        onDragOver={event => event.preventDefault()}
        onDrop={event => { event.preventDefault(); move(event.dataTransfer.getData('text/plain'), column.id); }}>
        <h2>{column.title}</h2>
        <button onClick={() => {
          const title = window.prompt('Novo nome', column.title)?.trim();
          if (title) setBoard({ ...board, columns: board.columns.map(item => item.id === column.id ? { ...item, title } : item) });
        }}>Renomear coluna</button>
        <TaskForm onAdd={(title, description) => {
          setBoard({ ...board, columns: board.columns.map(item => item.id === column.id ? {
            ...item, cards: [...item.cards, { id: crypto.randomUUID(), title, description }],
          } : item) });
        }} />
        {column.cards.map(card => <article className="kanban-card" key={card.id} draggable
          onDragStart={event => event.dataTransfer.setData('text/plain', String(card.id))}>
          <h3>{card.title}</h3><p>{card.description}</p>
          <label>Mover cartão
            <select aria-label={`Mover ${card.title}`} value={column.id} onChange={event => move(card.id, event.target.value)}>
              {board.columns.map(target => <option key={target.id} value={target.id}>{target.title}</option>)}
            </select>
          </label>
          <button onClick={() => setBoard({ ...board, columns: board.columns.map(item => ({
            ...item, cards: item.cards.filter(task => task.id !== card.id),
          })) })}>Remover {card.title}</button>
        </article>)}
      </section>)}
    </div>
  </section>;
}

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return <form onSubmit={event => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return;
    onAdd(title.trim(), description.trim()); setTitle(''); setDescription('');
  }}>
    <label>Título<input value={title} maxLength={120} onChange={event => setTitle(event.target.value)} required /></label>
    <label>Descrição<textarea value={description} maxLength={1000} onChange={event => setDescription(event.target.value)} required /></label>
    <button disabled={!title.trim() || !description.trim()}>Adicionar cartão</button>
  </form>;
}
