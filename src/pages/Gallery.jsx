import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
    // In a real app, this might come from a CMS or a more dynamic source.
    const mediaItems = [
        {
            type: 'image',
            src: '/20231130_153636.jpg',
            caption: 'Captured Moment'
        },
        {
            type: 'image',
            src: '/IMG_0004.jpg',
            caption: 'Photoshoot 1'
        },
        {
            type: 'image',
            src: '/IMG_0211.jpg',
            caption: 'Photoshoot 2'
        },
        {
            type: 'video',
            src: '/IMG_0013.MOV',
            caption: 'Video Clip 2'
        }
    ];

    return (
        <div className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-16">
                    <h1 className="text-4xl font-bold mb-4">Gallery</h1>
                    <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
                        A collection of moments and snapshots.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mediaItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card overflow-hidden group"
                        >
                            <div className="relative aspect-video overflow-hidden bg-black/50">
                                {item.type === 'video' ? (
                                    <video
                                        controls
                                        className="w-full h-full object-cover"
                                        src={item.src}
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={item.caption}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                )}

                                {item.type !== 'video' && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <div className="flex items-center text-white">
                                            <ImageIcon className="w-5 h-5 mr-2" />
                                            <span className="font-medium">{item.caption}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {mediaItems.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-20" />
                        <p>No media found.</p>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default Gallery;
