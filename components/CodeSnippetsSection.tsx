"use client";

import { motion } from "framer-motion";

const snippets = [
  {
    title: "Object Pooling",
    code: `public class ObjectPool<T> where T : Component
{
    private Queue<T> _pool = new Queue<T>();
    private T _prefab;
    
    public T Get() => _pool.Count > 0 ? _pool.Dequeue() : Instantiate(_prefab);
    public void Return(T obj) { obj.gameObject.SetActive(false); _pool.Enqueue(obj); }
}`,
  },
  {
    title: "Event Bus",
    code: `public static class EventBus
{
    private static Dictionary<Type, List<Delegate>> _events = new();
    
    public static void Subscribe<T>(Action<T> listener) { ... }
    public static void Publish<T>(T evt) { ... }
}`,
  },
  {
    title: "State Machine",
    code: `public class StateMachine
{
    private IState _currentState;
    public void ChangeState(IState newState) { _currentState?.Exit(); _currentState = newState; _currentState.Enter(); }
}`,
  },
];

export function CodeSnippetsSection() {
  return (
    <section className="px-6 md:px-10 max-w-7xl mx-auto py-20 md:py-28 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white/90 mb-8">
          Code I Care About
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {snippets.map((snippet, idx) => (
           <motion.div
  key={snippet.title}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: idx * 0.1, duration: 0.5 }}
  whileHover={{
    rotateX: 2,
    rotateY: 2,
    scale: 1.02,
    transition: { duration: 0.2 },
  }}
  style={{ perspective: "800px", transformStyle: "preserve-3d" }}
  className="bg-white/5 rounded-sm p-5 border border-white/5 hover:border-white/20 transition-colors"
>
              <h3 className="text-white/80 font-mono text-sm mb-3 tracking-wide">
                {snippet.title}
              </h3>
              <pre className="text-white/40 font-mono text-xs leading-relaxed overflow-x-auto">
                <code>{snippet.code}</code>
              </pre>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}