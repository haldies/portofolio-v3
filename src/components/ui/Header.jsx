import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const navigationItems = [
        { name: 'Beranda', path: '/home' },
        { name: 'Layanan', path: '/home#services'},
        { name: 'Proyek', path: '/home#projects'},
        { name: 'Proses', path: '/home#process'},
        { name: 'Kontak', path: '/contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const isActivePath = (path) => {
        return location?.pathname === path;
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white'
                : isMenuOpen
                    ? 'bg-white/70 backdrop-blur-xl'
                    : 'bg-transparent backdrop-blur-xl'
                }`}
        >
            <div className="w-full">
                <div className="relative mx-auto flex h-16 w-full max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8">

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navigationItems?.map((item) => (
                            <Link
                                key={item?.path}
                                to={item?.path}
                                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${isActivePath(item?.path)
                                    ? 'text-primary'
                                    : 'text-primary/60 hover:text-primary'
                                    }`}
                            > 
                                <span>{item?.name}</span>
                            </Link>
                        ))}
                    </nav>
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <Link
                            to="/home"
                            className="inline-flex flex-col items-center text-center transition-opacity hover:opacity-80 pointer-events-auto"
                        >
                            <h1 className="text-lg font-semibold uppercase tracking-[0.35em] text-primary">
                               BUATAI
                            </h1>
                        </Link>
                    </div>

                    {/* CTA Button - Desktop */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Button
                            variant="default"
                            size="sm"
                            iconName="MessageCircle"
                            iconPosition="left"
                            asChild
                        >
                            <Link to="/contact">
                                Jadwalkan Panggilan
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                   <div className="lg:hidden ml-auto">
    <button
        type="button"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
        className="flex h-10 w-10 items-center justify-center"
    >
        <span className="relative h-3 w-6">
            <span
                className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-primary transition-all duration-300 ${
                    isMenuOpen ? "top-1/2 rotate-45" : ""
                }`}
            />

            <span
                className={`absolute left-0 bottom-0 h-0.5 w-6 rounded-full bg-primary transition-all duration-300 ${
                    isMenuOpen ? "bottom-1/2 -rotate-45" : ""
                }`}
            />
        </span>
    </button>
</div>


                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={`lg:hidden overflow-hidden origin-top transition-all duration-300 ease-out ${isScrolled ? 'bg-white' : 'bg-transparent'} ${isMenuOpen
                        ? 'max-h-screen opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
                        }`}
                >
                    <nav className="mx-auto max-w-6xl px-4 py-4 space-y-2 bg-transparent">
                        {navigationItems?.map((item) => (
                            <Link
                                key={item?.path}
                                to={item?.path}
                                onClick={closeMenu}
                                className={`flex items-center px-4 py-3 text-base font-medium transition-colors duration-200 ${isActivePath(item?.path)
                                    ? 'text-primary'
                                    : 'text-primary/60 hover:text-primary'
                                    }`}
                            >
                                <span>{item?.name}</span>
                            </Link>
                        ))}

                        {/* Mobile CTA Buttons */}
                        <div className="pt-4 space-y-3">
                            <Button
                                variant="default"
                                fullWidth
                                iconName="MessageCircle"
                                iconPosition="left"
                                asChild
                            >
                                <Link to="/contact" onClick={closeMenu}>
                                    Jadwalkan Panggilan
                                </Link>
                            </Button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
