import { createSignal } from 'solid-js';
import type { Component } from 'solid-js';

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <div>{count()}</div>
      <div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count() + 1)}
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default App;
