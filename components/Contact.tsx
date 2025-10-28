import React, { useState, FormEvent } from 'react';
import { useInView } from '../hooks/useInView';

const Contact: React.FC = () => {
  const [ref, isInView] = useInView<HTMLElement>({ once: true });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus('Por favor, preencha todos os campos.');
      return;
    }
    // Simulate form submission
    setStatus('Mensagem enviada com sucesso! (Simulação)');
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section id="contact" ref={ref} className={`py-20 md:py-32 bg-gray-800 dark:bg-black text-white fade-in-up ${isInView ? 'visible' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Vamos Trabalhar Juntos</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Tem uma ideia ou um projeto em mente? Adoraríamos ouvir sobre isso. Entre em contato!</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Seu Nome</label>
              <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="bg-gray-700 dark:bg-gray-900 border border-gray-600 dark:border-gray-700 text-white text-sm rounded-lg focus:ring-4 focus:ring-violet-500/50 focus:border-violet-500 block w-full p-2.5 transition-all duration-300" placeholder="John Doe" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Seu Email</label>
              <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-gray-700 dark:bg-gray-900 border border-gray-600 dark:border-gray-700 text-white text-sm rounded-lg focus:ring-4 focus:ring-violet-500/50 focus:border-violet-500 block w-full p-2.5 transition-all duration-300" placeholder="john.doe@email.com" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Sua Mensagem</label>
              <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} rows={4} className="bg-gray-700 dark:bg-gray-900 border border-gray-600 dark:border-gray-700 text-white text-sm rounded-lg focus:ring-4 focus:ring-violet-500/50 focus:border-violet-500 block w-full p-2.5 transition-all duration-300" placeholder="Descreva seu projeto..." required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-violet-700 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.6)] hover:shadow-[0_0_20px_rgba(139,92,246,0.8)] dark:shadow-[0_0_15px_rgba(196,181,253,0.5)] dark:hover:shadow-[0_0_20px_rgba(196,181,253,0.7)]">
                Enviar Mensagem
              </button>
            </div>
          </form>
          {status && <p className="text-center mt-4 text-gray-300">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;