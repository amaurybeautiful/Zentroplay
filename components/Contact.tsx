
import React, { useState } from 'react';
import { MailIcon } from './Icons';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data:', formData);
        alert('Mensagem enviada! (simulação)');
    };

    return (
        <section id="contato" className="py-20 bg-[#0d0d17]">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">Entre em Contato</h2>
                    <p className="text-lg text-gray-400 mt-4">Estamos prontos para atender você</p>
                </div>

                <div className="max-w-2xl mx-auto bg-[#13131c] border border-gray-800 rounded-2xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nome Completo</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Seu nome completo"
                                required
                                className="w-full bg-[#1c1c28] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="seu@email.com"
                                required
                                className="w-full bg-[#1c1c28] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Celular (WhatsApp)</label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(11) 99999-9999"
                                required
                                className="w-full bg-[#1c1c28] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensagem (Opcional)</label>
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Conte-nos como podemos ajudar..."
                                className="w-full bg-[#1c1c28] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-[linear-gradient(90deg,#3d8bff,#ab23ff)] text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                            >
                               <MailIcon className="w-5 h-5"/> Enviar Mensagem
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
