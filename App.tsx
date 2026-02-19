
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Menu, 
  X,
  Calculator,
  TrendingUp,
  MessageCircle,
  Mail 
} from 'lucide-react';
import { CONTACT_INFO, SERVICES } from './constants';

const WHATSAPP_NUMBER = "237693198552"; // Format international pour le Cameroun
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/\s/g, '')}`;

const NavItem: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-slate-600 hover:text-blue-700 font-medium transition-colors duration-200"
  >
    {children}
  </a>
);

const ServiceCard: React.FC<{ title: string; items: string[]; index: number }> = ({ title, items, index }) => (
  <div className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white rounded-2xl flex items-center justify-center text-blue-600 font-bold transition-colors duration-300">
        0{index + 1}
      </div>
      <h3 className="text-xl font-bold text-slate-800 tracking-tight">{title}</h3>
    </div>
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-600">
          <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <span className="text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-orange-600 p-2 rounded-xl shadow-lg shadow-orange-200">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900">
                NOTEC <span className="text-orange-600">CONSULTING</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              <NavItem href="#accueil">Accueil</NavItem>
              <NavItem href="#propos">À Propos</NavItem>
              <NavItem href="#services">Services</NavItem>
              <NavItem href="#contact">Contact</NavItem>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-blue-700 text-white px-7 py-3 rounded-2xl font-bold transition-all shadow-xl hover:shadow-blue-200 transform hover:-translate-y-1"
              >
                WhatsApp Direct
              </a>
            </div>

            {/* Mobile Nav Toggle */}
            <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-4 p-6">
              <NavItem href="#accueil" onClick={() => setIsMenuOpen(false)}>Accueil</NavItem>
              <NavItem href="#propos" onClick={() => setIsMenuOpen(false)}>À Propos</NavItem>
              <NavItem href="#services" onClick={() => setIsMenuOpen(false)}>Services</NavItem>
              <NavItem href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavItem>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-4 rounded-2xl text-center font-bold flex items-center justify-center gap-3 shadow-lg">
                <MessageCircle className="w-5 h-5" /> Discuter sur WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white shadow-sm text-blue-700 rounded-full text-sm font-bold border border-slate-100">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping"></span>
                Cabinet Expert au Cameroun
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
                Gérez votre <span className="text-blue-700">croissance</span> avec sérénité
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                Cabinet d'Assistance Comptable et Fiscal. Nous transformons vos défis réglementaires en opportunités de développement durable.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-2xl shadow-green-200 transform hover:-translate-y-1">
                  <MessageCircle className="w-6 h-6" /> Contact WhatsApp
                </a>
                <a href="#services" className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-2xl font-black transition-all">
                  Nos solutions
                </a>
              </div>
            </div>
            <div className="relative group">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white transform transition-transform group-hover:scale-[1.01] duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Audit & Expertise" 
                  className="w-full h-[650px] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 z-20 bg-white/90 backdrop-blur-md p-8 rounded-[2rem] shadow-2xl border border-white/50 hidden md:block">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-100">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-slate-900">100%</p>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Conformité OHADA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="propos" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">
                Un partenaire de confiance pour votre entreprise
              </h2>
              <div className="space-y-8 text-slate-600 text-lg leading-relaxed font-medium">
                <p>
                  <span className="text-slate-900 font-bold">NOTEC CONSULTING</span> est un cabinet de conseil stratégique basé au Cameroun. Nous accompagnons les entreprises de toutes tailles dans leur structuration financière.
                </p>
                <p>
                  Notre mission est d'apporter des solutions concrètes en comptabilité, audit, fiscalité et conseil en gestion pour assurer la transparence et la pérennité de vos activités.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div>
                    <p className="text-3xl font-black text-blue-700">15+</p>
                    <p className="text-sm font-bold text-slate-500 uppercase">Ans d'expérience</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-orange-600">50+</p>
                    <p className="text-sm font-bold text-slate-500 uppercase">Clients actifs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-[3rem] overflow-hidden shadow-xl aspect-square bg-slate-100 relative">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Notre équipe" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-blue-900/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">Nos Domaines d'Intervention</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">Une expertise complète pour sécuriser chaque aspect de votre gestion financière et fiscale.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-10">
            {SERVICES.map((service, idx) => (
              <ServiceCard key={idx} title={service.title} items={service.items} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Entièrement focalisée WhatsApp */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[4rem] shadow-3xl overflow-hidden flex flex-col lg:flex-row border border-slate-800">
            {/* Colonne gauche : Infos directes */}
            <div className="lg:w-1/2 bg-blue-700 p-12 lg:p-24 text-white">
              <h2 className="text-5xl font-black mb-10 tracking-tight">Nous joindre</h2>
              <p className="mb-16 text-blue-100 text-xl font-medium">Basés à Douala, nous intervenons sur l'ensemble du territoire national.</p>
              
              <div className="space-y-14">
                <div className="flex items-start gap-6">
                  <div className="bg-white/10 p-5 rounded-3xl"><Phone className="w-8 h-8" /></div>
                  <div>
                    <p className="font-black text-xl mb-3 tracking-wide">Lignes directes</p>
                    <div className="flex flex-col gap-2">
                      {CONTACT_INFO.phones.map(p => (
                        <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="text-blue-50 hover:text-white text-xl font-medium transition-colors">
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-white/10 p-5 rounded-3xl"><Mail className="w-8 h-8" /></div>
                  <div>
                    <p className="font-black text-xl mb-3 tracking-wide">Email</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-50 hover:text-white text-xl font-medium transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-white/10 p-5 rounded-3xl"><MapPin className="w-8 h-8" /></div>
                  <div>
                    <p className="font-black text-xl mb-3 tracking-wide">Siège Social</p>
                    <p className="text-blue-50 text-xl font-medium">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Colonne droite : CTA WhatsApp */}
            <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center items-center text-center bg-slate-900">
              <div className="relative mb-10">
                <div className="absolute inset-0 bg-green-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative bg-green-500/10 p-10 rounded-[3rem] border border-green-500/20">
                  <MessageCircle className="w-24 h-24 text-green-500" />
                </div>
              </div>
              <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Consultation Immédiate</h2>
              <p className="text-slate-400 mb-12 text-xl max-w-md font-medium">
                Ouvrez une discussion WhatsApp pour obtenir une réponse rapide à vos besoins d'assistance.
              </p>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-12 py-6 font-black text-white transition-all duration-300 bg-green-600 rounded-3xl focus:outline-none hover:bg-green-700 shadow-[0_20px_50px_rgba(34,197,94,0.3)] transform hover:-translate-y-2"
              >
                <MessageCircle className="w-8 h-8 mr-4" />
                Démarrer sur WhatsApp
              </a>
              <div className="mt-8 flex items-center gap-2 text-slate-500 font-bold uppercase tracking-tighter text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Conseillers disponibles
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Calculator className="w-7 h-7 text-blue-500" />
            <span className="text-2xl font-black text-white tracking-tighter">
              NOTEC <span className="text-blue-500">CONSULTING</span>
            </span>
          </div>
          <p className="text-base max-w-lg mx-auto mb-10 leading-relaxed">
            Votre cabinet de référence pour l'excellence comptable et fiscale au Cameroun.
          </p>
          <div className="h-px w-20 bg-slate-800 mx-auto mb-10"></div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-40">&copy; {new Date().getFullYear()} NOTEC CONSULTING - Douala</p>
        </div>
      </footer>

      {/* Bouton flottant WhatsApp permanent */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center group animate-bounce-slow"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle className="w-9 h-9" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-4 transition-all duration-500 whitespace-nowrap font-black text-lg">
          Discuter avec un expert
        </span>
      </a>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
