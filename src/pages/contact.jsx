import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from 'emailjs-com';

// Validation schema using Yup
const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    message: yup.string().required('Message is required'),
});

const ContactSection = () => {

    const form = useRef();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
    });

    // Alert state
    const [alert, setAlert] = useState({ message: '', type: '' });

    const onSubmit = (data) => {
        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setAlert({ message: 'Message sent successfully!', type: 'success' });
                    reset();
                },
                (error) => {
                    setAlert({ message: 'Failed to send message, please try again.', type: 'error' });
                    reset();
                }
            );
    };

    // Auto dismiss alert after 5 seconds
    useEffect(() => {
        if (alert.message) {
            const timer = setTimeout(() => {
                setAlert({ message: '', type: '' });
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [alert]);

    return (
        <section id="contact" className="py-32 px-6 lg:px-20 relative">
            <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/5 rounded-3xl border border-white/10 p-12">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-white mb-12 text-center"
                >
                    Let's Collaborate
                </motion.h2>

                <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            {...register('name')}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            {...register('email')}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <textarea
                            rows="5"
                            placeholder="Message"
                            className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            {...register('message')}
                        ></textarea>
                        {errors.message && (
                            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center"
                    >
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-12 py-4 rounded-full text-white font-semibold hover:scale-105 transition-transform"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </motion.div>
                </form>
            </div>

            {/* Alert Notification */}
            <AnimatePresence>
                {alert.message && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5 }}
                        className={`fixed bottom-10 right-10 z-50 p-4 rounded-2xl shadow-lg backdrop-blur-lg bg-white/10 border border-white/10 text-white
              ${alert.type === 'success' ? 'bg-green-600/20 border-green-500' : 'bg-red-600/20 border-red-500'}
            `}
                    >
                        {alert.message}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ContactSection;
