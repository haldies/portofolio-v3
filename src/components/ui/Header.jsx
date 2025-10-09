import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const navigationItems = [
        { name: 'Home', path: '/home', icon: 'Home' },
        { name: 'Journey', path: '/achievements', icon: 'Trophy' },
        { name: 'Projects', path: '/ai-playground', icon: 'Zap' },
        { name: 'Educational', path: '/educational-content', icon: 'BookOpen' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
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
            className={`fixed top-0 left-0 right-0 z-50 transition-brand ${isScrolled
                ? 'bg-background/95 backdrop-blur-brand shadow-brand-subtle border-b border-border'
                : 'bg-transparent'
                }`}
        >
            <div className="w-full">
                <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Link
                        to="/home"
                 
                    >
                        <div className="hidden sm:block">
                            <h1 className="text-brand-headline text-xl text-foreground">
                                Gerhardien
                            </h1>
                            <p className="text-xs text-text-secondary font-brand-accent">
                                AI Engineer
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navigationItems?.map((item) => (
                            <Link
                                key={item?.path}
                                to={item?.path}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-brand text-sm font-medium transition-brand focus-brand ${isActivePath(item?.path)
                                    ? 'bg-accent text-accent-foreground shadow-brand-subtle'
                                    : 'text-foreground hover:bg-muted hover:text-foreground'
                                    }`}
                            >
                                <Icon name={item?.icon} size={16} />
                                <span>{item?.name}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button - Desktop */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Button
                            variant="outline"
                            size="sm"
                            iconName="Github"
                            iconPosition="left"
                            onClick={() => window.open('https://github.com/@haldies', '_blank')}
                            className="text-sm"
                        >
                            GitHub
                        </Button>
                        <Button
                            variant="default"
                            size="sm"
                            iconName="MessageCircle"
                            iconPosition="left"
                            asChild
                        >
                            <Link to="/contact">
                                Let's Connect
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleMenu}
                            className="relative"
                            aria-label="Toggle menu"
                        >
                            <Icon
                                name={isMenuOpen ? "X" : "Menu"}
                                size={24}
                                className="transition-brand"
                            />
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={`lg:hidden transition-brand overflow-hidden ${isMenuOpen
                        ? 'max-h-screen opacity-100 bg-background/95 backdrop-blur-brand border-b border-border' : 'max-h-0 opacity-0'
                        }`}
                >
                    <nav className="mx-auto max-w-6xl px-4 py-4 space-y-2">
                        {navigationItems?.map((item) => (
                            <Link
                                key={item?.path}
                                to={item?.path}
                                onClick={closeMenu}
                                className={`flex items-center space-x-3 px-4 py-3 rounded-brand text-base font-medium transition-brand focus-brand ${isActivePath(item?.path)
                                    ? 'bg-accent text-accent-foreground shadow-brand-subtle'
                                    : 'text-foreground hover:bg-muted'
                                    }`}
                            >
                                <Icon name={item?.icon} size={20} />
                                <span>{item?.name}</span>
                            </Link>
                        ))}

                        {/* Mobile CTA Buttons */}
                        <div className="pt-4 space-y-3 border-t border-border">
                            <Button
                                variant="outline"
                                fullWidth
                                iconName="Github"
                                iconPosition="left"
                                onClick={() => {
                                    window.open('https://github.com', '_blank');
                                    closeMenu();
                                }}
                            >
                                View GitHub
                            </Button>
                            <Button
                                variant="default"
                                fullWidth
                                iconName="MessageCircle"
                                iconPosition="left"
                                asChild
                            >
                                <Link to="/contact" onClick={closeMenu}>
                                    Let's Connect
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
