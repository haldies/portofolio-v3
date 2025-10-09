import { SendHorizontal } from 'lucide-react';
import React, { useEffect } from 'react';

const FooterPage = () => {
    useEffect(() => {

        const handleSmoothScroll = (e) => {
            const target = e?.target?.getAttribute('href');
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
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div>
                                <h3 className="font-bold text-lg">Gerhardien</h3>
                                <p className="text-sm text-background/70">AI Engineer</p>
                            </div>
                        </div>
                        <p className="text-background/70 text-sm">
                            Making AI accessible through education, innovation, and real-world solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Explore</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/ai-playground" className="text-background/70 hover:text-background transition-colors">AI Playground</a></li>
                            <li><a href="/knowledge-hub-educational-content" className="text-background/70 hover:text-background transition-colors">Knowledge Hub</a></li>
                            <li><a href="/achievements" className="text-background/70 hover:text-background transition-colors">My Journey</a></li>
                            <li><a href="/contact" className="text-background/70 hover:text-background transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="https://tiktok.com/@haldies" className="text-background/70 hover:text-background transition-colors">TikTok</a></li>
                            <li><a href="https://github.com/haldies" className="text-background/70 hover:text-background transition-colors">GitHub</a></li>
                            <li><a href="https://linkedin.com/in/haldies" className="text-background/70 hover:text-background transition-colors">LinkedIn</a></li>
                            <li><a href="mailto:hello@haldies.dev" className="text-background/70 hover:text-background transition-colors">Email</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold mb-4">Stay Updated</h4>
                        <p className="text-background/70 text-sm mb-4">
                            Get the latest AI insights and tutorials delivered to your inbox.
                        </p>
                        <div className="w-full max-w-md mx-auto">
                            <div className="flex flex-col sm:flex-row w-full">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full sm:flex-1 px-3 py-2 bg-background/10 border border-background/20 rounded-t-brand sm:rounded-l-brand sm:rounded-tr-none text-background placeholder-background/50 text-sm focus:outline-none focus:border-accent"
                                />
                                <button className="w-full sm:w-auto px-4 py-2 bg-accent text-white rounded-b-brand sm:rounded-r-brand sm:rounded-bl-none hover:bg-accent/90 transition-colors">
                                   <SendHorizontal/>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="border-t border-background/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-background/70 text-sm">
                        © {new Date()?.getFullYear()}Gerhardien. All rights reserved.
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