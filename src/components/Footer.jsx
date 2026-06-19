import { SendHorizontal } from 'lucide-react';
import React, { useEffect } from 'react';

const FooterPage = () => {
    useEffect(() => {
        const handleSmoothScroll = (e) => {
            const clickable = e?.target?.closest ? e.target.closest('a') : null;
            const target = clickable?.getAttribute('href');
            if (target && target?.startsWith('#')) {
                e?.preventDefault();
                const element = document.querySelector(target);
                if (element) {
                    element?.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        document.addEventListener('click', handleSmoothScroll);
        return () => document.removeEventListener('click', handleSmoothScroll);
    }, []);

    return (
        <footer className="bg-foreground text-background py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-bold text-lg">Gerhardien</h3>
                            <p className="text-sm text-background/70">Web & AI Studio</p>
                        </div>
                        <p className="text-background/70 text-sm">
                            Website profesional, sistem internal, dan automasi AI untuk bisnis yang ingin bergerak lebih rapi.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Explore</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/home#services" className="text-background/70 hover:text-background transition-colors">Services</a></li>
                            <li><a href="/home#process" className="text-background/70 hover:text-background transition-colors">Process</a></li>
                            <li><a href="/contact" className="text-background/70 hover:text-background transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="https://wa.me/6289632579100" className="text-background/70 hover:text-background transition-colors">WhatsApp</a></li>
                            <li><a href="https://github.com/haldies" className="text-background/70 hover:text-background transition-colors">GitHub</a></li>
                            <li><a href="https://linkedin.com/in/haldies" className="text-background/70 hover:text-background transition-colors">LinkedIn</a></li>
                            <li><a href="mailto:gerhardien.p@gmail.com" className="text-background/70 hover:text-background transition-colors">Email</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Project Inquiry</h4>
                        <p className="text-background/70 text-sm mb-4">
                            Kirim ide awalmu, nanti saya bantu petakan solusi yang paling masuk akal.
                        </p>
                        <div className="w-full max-w-md">
                            <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-0">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="h-11 w-full rounded-brand border border-background/20 bg-background/10 px-4 py-2 text-sm text-background placeholder:text-background/50 transition-brand focus-brand focus:border-accent sm:flex-1 sm:rounded-r-none"
                                />
                                <button
                                    className="inline-flex h-11 w-full items-center justify-center rounded-brand border border-accent bg-accent px-4 text-accent-foreground transition-brand hover:bg-accent/90 focus-brand sm:w-12 sm:rounded-l-none"
                                    aria-label="Send inquiry"
                                >
                                    <SendHorizontal className="h-4 w-4" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-background/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-background/70 text-sm">
                        © {new Date()?.getFullYear()} Gerhardien. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <a href="/privacy" className="text-background/70 hover:text-background text-sm transition-colors">Privacy</a>
                        <a href="/terms" className="text-background/70 hover:text-background text-sm transition-colors">Terms</a>
                        <a href="/sitemap" className="text-background/70 hover:text-background text-sm transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;
