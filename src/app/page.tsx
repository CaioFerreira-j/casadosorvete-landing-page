"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, TrendingUp, Truck, Headset, MapPin, Clock, Phone, Star, ArrowRight, Menu, X } from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const whatsappNumber = "5598989170596";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <main className="min-h-screen bg-cs-white flex flex-col">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-cs-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo_cs_1779564358035.jpeg"
              alt="Casa do Sorvete Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center text-sm font-semibold text-gray-700">
            <a href="#sobre" className="hover:text-cs-vibrant-purple transition-colors">Sobre Nós</a>
            <a href="#produtos" className="hover:text-cs-vibrant-purple transition-colors">Produtos</a>
            <a href="#b2b" className="hover:text-cs-vibrant-purple transition-colors">Seja um Revendedor</a>
            <a href="#contato" className="hover:text-cs-vibrant-purple transition-colors">Contato</a>
          </nav>
          
          <div className="hidden md:block">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cs-vibrant-purple text-white px-6 py-3 rounded-full font-bold hover:bg-cs-dark-purple transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Fale com a Gente
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-cs-dark-purple"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cs-white md:hidden pt-24 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col p-6 gap-6 text-lg font-semibold text-gray-800 min-h-full">
              <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-gray-100 pb-4 hover:text-cs-vibrant-purple transition-colors">Sobre Nós</a>
              <a href="#produtos" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-gray-100 pb-4 hover:text-cs-vibrant-purple transition-colors">Produtos</a>
              <a href="#b2b" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-gray-100 pb-4 hover:text-cs-vibrant-purple transition-colors">Seja um Revendedor</a>
              <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-gray-100 pb-4 hover:text-cs-vibrant-purple transition-colors">Contato</a>
              
              <div className="mt-8 flex justify-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-cs-vibrant-purple text-white px-8 py-4 rounded-full font-bold text-center shadow-lg w-full max-w-sm"
                >
                  Fale com a Gente
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-cs-dark-purple">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bg_1779564346064.png"
            alt="Fundo Hero Casa do Sorvete"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cs-dark-purple/90 to-cs-dark-purple/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-cs-gold/20 text-cs-gold font-bold text-sm mb-6 border border-cs-gold/30">
              Distribuidora Premium no Maranhão
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              O melhor açaí e creme <span className="text-transparent bg-clip-text bg-gradient-to-r from-cs-gold to-yellow-200">para aumentar suas vendas</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl">
              Distribuição especializada para açaiterias, sorveterias, mercados, delivery e empreendedores em São Luís - MA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cs-gold text-cs-dark-purple px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(245,183,0,0.4)] hover:shadow-[0_0_30px_rgba(245,183,0,0.6)] flex items-center justify-center gap-2"
              >
                Falar no WhatsApp
                <ArrowRight size={20} />
              </a>
              <a
                href="#produtos"
                className="bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center backdrop-blur-md"
              >
                Ver Catálogo
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative hidden lg:block"
          >
            <div className="relative w-[500px] h-[500px] mx-auto">
               {/* Decorative glow */}
               <div className="absolute inset-0 bg-cs-vibrant-purple blur-[100px] rounded-full opacity-40"></div>
               <Image 
                 src="/images/product_acai_1779564370558.png" 
                 alt="Caixa de Açaí Premium" 
                 fill 
                 className="object-contain drop-shadow-2xl z-20 hover:scale-105 transition-transform duration-500"
               />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-cs-dark-purple mb-6">Nossa Missão é o Seu Sucesso</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Somos uma distribuidora especializada em açaí, sorvetes e cremes em São Luís - MA. Trabalhamos tanto com fornecimento para revendedores quanto com vendas no varejo. Nossa missão é entregar <strong className="text-cs-vibrant-purple">qualidade, sabor e lucratividade</strong> para nossos parceiros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "Produtos Premium", desc: "Qualidade inquestionável que fideliza seu cliente." },
              { icon: TrendingUp, title: "Alta Lucratividade", desc: "Margens excelentes para o crescimento do seu negócio." },
              { icon: Truck, title: "Entrega Rápida", desc: "Logística eficiente para você nunca ficar sem estoque." },
              { icon: Headset, title: "Atendimento Especializado", desc: "Suporte dedicado para entender suas necessidades." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-cs-vibrant-purple/30 transition-all group"
              >
                <div className="w-14 h-14 bg-cs-vibrant-purple/10 rounded-xl flex items-center justify-center text-cs-vibrant-purple mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50/50 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-cs-dark-purple mb-4">Catálogo Premium</h2>
            <p className="text-lg text-gray-600">A linha mais completa e saborosa para o seu negócio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: "Açaí Premium", 
                desc: "Rico em polpa, cremoso e com sabor incomparável. Perfeito para montar barcas e tigelas.",
                img: "/images/product_acai_1779564370558.png"
              },
              { 
                name: "Creme de Cupuaçu", 
                desc: "O verdadeiro sabor da Amazônia. Textura aveludada, azedinho na medida certa.",
                img: "/images/product_cupuacu_1779564403439.png"
              },
              { 
                name: "Creme de Ninho", 
                desc: "Suave, extremamente cremoso e com o sabor inconfundível do leite em pó tradicional.",
                img: "/images/product_ninho_1779564420634.png"
              },
              { 
                name: "Maracujá Trufado", 
                desc: "O equilíbrio perfeito entre o creme de maracujá e pedaços nobres de trufa de chocolate.",
                img: "/images/product_maracuja_1779564433249.png"
              }
            ].map((prod, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                <div className="h-64 bg-gray-100 relative p-6 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-200 to-transparent opacity-50"></div>
                  <Image 
                    src={prod.img} 
                    alt={prod.name} 
                    fill 
                    className="object-contain p-4 drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{prod.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 h-16">{prod.desc}</p>
                  <a 
                    href={whatsappLink} 
                    target="_blank"
                    className="w-full block text-center py-3 px-4 bg-cs-dark-purple text-cs-gold font-bold rounded-xl hover:bg-cs-vibrant-purple transition-colors"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Advantages */}
      <section id="b2b" className="py-24 bg-cs-dark-purple text-white relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cs-vibrant-purple rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cs-gold rounded-full blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-cs-gold font-bold tracking-wider uppercase text-sm mb-4 block">Parceria Comercial</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Por que escolher a Casa do Sorvete para o seu negócio?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Nós entendemos as necessidades do seu estabelecimento. Seja um delivery, uma açaiteria de bairro ou um grande mercado, oferecemos as condições ideais para maximizar seus lucros.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Alta margem de lucro",
                  "Produtos de alta saída",
                  "Ideal para delivery",
                  "Embalagens práticas",
                  "Distribuição rápida",
                  "Suporte ao parceiro"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-cs-gold shrink-0" size={24} />
                    <span className="font-medium text-gray-100">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-cs-gold text-cs-dark-purple px-8 py-4 rounded-full font-bold hover:bg-white transition-colors"
                >
                  Quero Ser Revendedor
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-xl">
                  <div className="text-4xl font-extrabold text-cs-gold mb-2">+40%</div>
                  <div className="text-sm text-gray-300">Margem de Lucro Estimada</div>
                </div>
                <div className="bg-cs-vibrant-purple p-6 rounded-3xl border border-white/10 shadow-xl">
                  <div className="text-4xl font-extrabold text-white mb-2">100%</div>
                  <div className="text-sm text-gray-200">Satisfação dos Clientes</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-cs-vibrant-purple p-6 rounded-3xl border border-white/10 shadow-xl">
                  <div className="text-4xl font-extrabold text-white mb-2">24h</div>
                  <div className="text-sm text-gray-200">Entregas Rápidas na Região</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-xl">
                  <div className="text-4xl font-extrabold text-cs-gold mb-2">+500</div>
                  <div className="text-sm text-gray-300">Parceiros Ativos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-cs-dark-purple mb-4">O Que Nossos Parceiros Dizem</h2>
            <p className="text-lg text-gray-600">A qualidade comprovada por quem vende e lucra todos os dias.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Açaiteria Ponto Certo",
                type: "Açaiteria",
                text: "O açaí premium da Casa do Sorvete mudou nossas vendas. Os clientes elogiam a cremosidade e não trocamos por nada!"
              },
              {
                name: "Delivery do João",
                type: "Delivery",
                text: "A entrega é sempre no prazo e a embalagem de 10 litros é perfeita para o nosso fluxo. O creme de ninho sai demais."
              },
              {
                name: "Mercadinho São José",
                type: "Mercado",
                text: "Excelente aceitação pelas famílias que compram no mercado. Margem de lucro muito boa para revenda nas caixas menores."
              },
              {
                name: "Sorveteria Tropical",
                type: "Sorveteria",
                text: "A qualidade do creme de cupuaçu é absurda. Sabor real da fruta que agrega muito valor às nossas taças especiais."
              }
            ].map((test, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="flex text-cs-gold mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-6 flex-grow">"{test.text}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{test.name}</h4>
                  <span className="text-xs font-semibold text-cs-vibrant-purple uppercase tracking-wider">{test.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location and Contact */}
      <section id="contato" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cs-dark-purple rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 text-white flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cs-vibrant-purple rounded-full blur-[80px] opacity-30"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-8 relative z-10">Venha nos Fazer uma Visita</h2>
              
              <div className="space-y-8 relative z-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-cs-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Endereço</h4>
                    <p className="text-gray-300">R. Primeiro de Janeiro, 215<br />Monte Castelo, São Luís - MA<br />65037-540</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-cs-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Telefone</h4>
                    <p className="text-gray-300">(98) 98917-0596</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="text-cs-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-300">
                      Segunda a sexta: 08h às 18h<br />
                      Sábado: 08h às 12h<br />
                      Domingo: 08h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 h-96 lg:h-auto bg-gray-200">
              {/* Google Maps Embed */}
              <iframe 
                src="https://maps.google.com/maps?q=-2.5336479,-44.2789763&z=17&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Localização"
                className="w-full h-full object-cover"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12 mb-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
               <Image
                  src="/images/logo_cs_1779564358035.jpeg"
                  alt="Casa do Sorvete Logo"
                  width={120}
                  height={120}
                  className="object-contain rounded-xl mb-6"
                />
              <p className="text-gray-400 font-medium italic">
                "Qualidade, sabor e lucratividade para o seu negócio."
              </p>
            </div>
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <h4 className="text-lg font-bold mb-6 text-cs-gold">Links Úteis</h4>
              <ul className="space-y-3">
                <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre a Empresa</a></li>
                <li><a href="#produtos" className="text-gray-400 hover:text-white transition-colors">Nossos Produtos</a></li>
                <li><a href="#b2b" className="text-gray-400 hover:text-white transition-colors">Vantagens para Revenda</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <h4 className="text-lg font-bold mb-6 text-cs-gold">Redes Sociais</h4>
              <a 
                href="https://www.instagram.com/casadosorvetema/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pink-500"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                @casadosorvetema
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Casa do Sorvete Distribuidora. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:bg-[#128C7E] transition-all hover:-translate-y-1 group"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="group-hover:scale-110 transition-transform"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </motion.a>
    </main>
  );
}
