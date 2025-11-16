
import React, { useState } from 'react';
import { MailIcon } from './Icons';

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (formData.name.trim().split(/\s+/).length < 2) {
            newErrors.name = "Por favor, insira seu nome e sobrenome.";
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Por favor, insira um email válido.";
        }
        
        const phoneDigits = formData.phone.replace(/\D/g, '');
        if (phoneDigits.length < 10 || phoneDigits.length > 11) {
            newErrors.phone = "Número inválido. O número deve ter 10 ou 11 dígitos, incluindo o DDD.";
        }
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setStatus('loading');
        setErrors({});

        try {
            const response = await fetch("https://n8n.zentroplay.net/webhook/diretodosite", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    const renderFormContent = () => {
        if (status === 'success') {
            return (
                <div className="text-center p-8">
                    <h3 className="text-2xl font-bold text-green-400">Mensagem enviada com sucesso!</h3>
                    <p className="mt-2 text-gray-300">Se suas informações estiverem corretas vc receberá uma mensagem em breve via whatsapp.</p>
                </div>
            );
        }

        if (status === 'error') {
            return (
                <div className="text-center p-8">
                    <h3 className="text-2xl font-bold text-red-400">Houve um pequeno erro no envio</h3>
                    <p className="mt-2 mb-6 text-gray-300">Clique no botão abaixo para ser redirecionado ao nosso WhatsApp.</p>
                    <a
                        href="https://wa.me/+5571991113787?text=Oi!%20Vim%20direto%20do%20site%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
                    >
                        Ir para o WhatsApp
                    </a>
                </div>
            );
        }

        return (
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
                        aria-invalid={!!errors.name}
                        aria-describedby="name-error"
                        className={`w-full bg-[#1c1c28] border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 ring-red-500' : 'border-gray-700 focus:ring-blue-500 focus:border-blue-500'}`}
                    />
                    {errors.name && <p id="name-error" className="mt-2 text-sm text-red-500">{errors.name}</p>}
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
                        aria-invalid={!!errors.email}
                        aria-describedby="email-error"
                        className={`w-full bg-[#1c1c28] border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 ring-red-500' : 'border-gray-700 focus:ring-blue-500 focus:border-blue-500'}`}
                    />
                    {errors.email && <p id="email-error" className="mt-2 text-sm text-red-500">{errors.email}</p>}
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
                        aria-invalid={!!errors.phone}
                        aria-describedby="phone-error"
                        className={`w-full bg-[#1c1c28] border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-500 ring-red-500' : 'border-gray-700 focus:ring-blue-500 focus:border-blue-500'}`}
                    />
                    {errors.phone && <p id="phone-error" className="mt-2 text-sm text-red-500">{errors.phone}</p>}
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
                        disabled={status === 'loading'}
                        className="w-full flex items-center justify-center gap-2 bg-[linear-gradient(90deg,#3d8bff,#ab23ff)] text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'loading' ? (
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                           <>
                             <MailIcon className="w-5 h-5"/> Enviar Mensagem
                           </>
                        )}
                    </button>
                </div>
            </form>
        );
    }

    return (
        <section id="contato" className="py-20 bg-[#0d0d17]">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">Entre em Contato</h2>
                    <p className="text-lg text-gray-400 mt-4">Estamos prontos para atender você</p>
                </div>

                <div className="max-w-2xl mx-auto bg-[#13131c] border border-gray-800 rounded-2xl p-8 transition-all duration-300">
                    {renderFormContent()}
                </div>
            </div>
        </section>
    );
};

export default Contact;
