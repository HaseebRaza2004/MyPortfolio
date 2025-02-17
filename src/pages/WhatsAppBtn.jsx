import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {

    const handleWhatsAppClick = () => {
        // window.location.href = "https://wa.me/qr/LRE66SCTCSW7D1";
        // Or alternatively:
        window.open("https://wa.me/qr/LRE66SCTCSW7D1", "_blank");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="fixed bottom-8 right-8 z-50"
        >
            <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110 cursor-pointer"
                style={{
                    width: '60px',
                    height: '60px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp className="w-8 h-8" />
            </button>
        </motion.div>
    );
};

export default WhatsAppButton;