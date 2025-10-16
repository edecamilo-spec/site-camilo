"use client";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-2xl bg-gray-900 text-white grid place-items-center font-bold">AC</div>
              <div className="leading-tight">
                <p className="font-semibold">Edemilson Camilo</p>
                <p className="text-sm text-gray-500">Créditos & Investimentos • Ademicon Palhoça</p>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#servicos" className="hover:text-gray-700">Serviços</a>
              <a href="#portfolio" className="hover:text-gray-700">Resultados</a>
              <a href="#sobre" className="hover:text-gray-700">Sobre</a>
              <a href="#depoimentos" className="hover:text-gray-700">Depoimentos</a>
              <a href="#contato" className="inline-flex items-center rounded-xl border border-gray-900 px-4 py-2 font-medium hover:bg-gray-900 hover:text-white transition">Fale comigo</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-100" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600">Sem juros • Estratégia • Patrimônio</span>
              <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">Consórcio como <span className="underline decoration-gray-900">investimento</span> para construir patrimônio real</h1>
              <p className="mt-5 text-lg text-gray-600 max-w-xl">Eu ajudo empresários e famílias a acessarem crédito inteligente para comprar imóveis, levantar capital e formar renda de aluguel — com método, previsibilidade e segurança.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#contato" className="inline-flex justify-center rounded-2xl bg-gray-900 px-6 py-3 text-white font-medium shadow-sm hover:shadow-lg">Agendar conversa estratégica</a>
                <a href="https://wa.me/5548991038050?text=Ol%C3%A1%20Camilo!%20Quero%20entender%20a%20estrat%C3%A9gia%20de%20cons%C3%B3rcio%20como%20investimento." target="_blank" className="inline-flex justify-center rounded-2xl border border-gray-900 px-6 py-3 font-medium hover:bg-gray-900 hover:text-white">WhatsApp (48) 99103‑8050</a>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-600">
                <li className="rounded-xl border border-gray-200 bg-white p-4"><span className="block text-2xl font-semibold">R$ 1 bi+</span><span>em operações</span></li>
                <li className="rounded-xl border border-gray-200 bg-white p-4"><span className="block text-2xl font-semibold">Desde 2005</span><span>construindo cases reais</span></li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-gray-200 to-white" />
              <div className="aspect-[4/3] rounded-3xl border border-gray-200 bg-white p-2 shadow-sm">
                <div className="h-full w-full rounded-2xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-gray-100 grid place-items-center">
                  <div className="text-center px-6">
                    <p className="text-sm uppercase tracking-widest text-gray-500">Estudo de Caso</p>
                    <p className="mt-2 text-2xl font-semibold">De R$ 1.000/mês a R$ 5 milhões em patrimônio</p>
                    <p className="mt-3 text-gray-600">Estratégia com múltiplos ciclos de consórcio, aquisição de imóveis e renda de locação ~0,6% a.m.</p>
                    <a href="#portfolio" className="mt-5 inline-flex rounded-xl border border-gray-300 px-5 py-2 text-sm font-medium hover:border-gray-900">Ver como funciona</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Soluções</h2>
          <p className="mt-2 text-gray-600 max-w-2xl">Planos personalizados para cada objetivo — do primeiro imóvel ao portfólio de locação.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Consórcio Imobiliário', desc: 'Compra de imóvel pronto, terreno, construção e capital. Análise de crédito e estratégia de lance.' },
              { title: 'Alavancagem com Renda', desc: 'Modelo para gerar renda de aluguel (~0,6% a.m.) cobrindo parte das parcelas e formando patrimônio.' },
              { title: 'Plano Construtora', desc: 'Estrutura para incorporadoras não se descapitalizarem e transferirem dívida ao comprador.' },
              { title: 'Crédito para Empresários', desc: 'Levantamento de capital com planejamento tributário e de garantias.' },
              { title: 'Auditoria de Carteira', desc: 'Revisão de contratos, taxas, grupos e oportunidades de upgrade/transferência.' },
              { title: 'Mentoria 1:1', desc: 'Sessões estratégicas mensais para desenho e acompanhamento do plano.' },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg">{card.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{card.desc}</p>
                <a href="#contato" className="mt-4 inline-flex text-sm font-medium underline decoration-gray-300 hover:decoration-gray-900">Quero detalhes</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados / Portfolio */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Resultados e Cases</h2>
            <a href="#contato" className="inline-flex items-center rounded-xl border border-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-900 hover:text-white">Pedir um estudo personalizado</a>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { kpi: '+R$ 3,7 mi', label: 'Patrimônio projetado (15 anos)', note: 'Com aportes de R$ 1.000/mês e reciclagem de crédito' },
              { kpi: '15%', label: 'Desconto médio negociação', note: 'Compra à vista via carta contemplada' },
              { kpi: '0,6% a.m.', label: 'Renda de aluguel sobre VGV', note: 'Auxilia no pagamento das parcelas' },
            ].map((it) => (
              <div key={it.label} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <p className="text-2xl font-semibold">{it.kpi}</p>
                <p className="mt-1 text-gray-700">{it.label}</p>
                <p className="mt-2 text-sm text-gray-600">{it.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-sm text-gray-500">*Resultados variam conforme grupos, lances, INCC, prazos e execução do plano.</div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold">Quem é o Camilo</h2>
            <p className="mt-4 text-gray-700">Sou especialista em consórcios desde 2005, com mais de R$ 1 bilhão em operações assessoradas. Minha missão é ajudar você a comprar dinheiro barato, com inteligência e previsibilidade — construindo um portfólio sólido para sua família ou empresa.</p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Atendimento consultivo, sem “empurrar” produto.</li>
              <li>• Estratégias testadas em casos reais (imóveis, veículos e capital).</li>
              <li>• Foco em segurança: compliance, análise de risco e contratos.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-wider text-gray-500">Diferenciais</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>✓ Planejamento de lances com métricas</li>
              <li>✓ Simulações claras e comparativos</li>
              <li>✓ Acompanhamento pós-contemplação</li>
              <li>✓ Rede de parceiros (imobiliárias, jurídico, cartórios)</li>
            </ul>
            <a href="https://wa.me/5548991038050" target="_blank" className="mt-5 inline-flex w-full justify-center rounded-xl bg-gray-900 px-5 py-3 text-white font-medium">Chamar no WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold">O que dizem os clientes</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { name: 'Marcelo • Empresário', text: 'Transformamos R$ 1.000/mês em um plano de aquisição com desconto e renda de locação cobrindo boa parte das parcelas.' },
              { name: 'Uirla • Parceira', text: 'Processo claro, seguro e com números. O cliente entende o jogo e toma decisão com confiança.' },
              { name: 'Adriano • Investidor', text: 'Consegui meu imóvel com 15% de desconto via carta contemplada. Hoje sigo no segundo ciclo do plano.' },
            ].map((d) => (
              <figure key={d.name} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <blockquote className="text-gray-700">“{d.text}”</blockquote>
                <figcaption className="mt-4 text-sm text-gray-600">{d.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-gray-900 text-white p-10 sm:p-14">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl sm:text-3xl font-semibold">Pronto para desenhar seu plano?</h3>
                <p className="mt-2 text-gray-300">Agende uma conversa de 20 minutos. Sem custo. Vou te mostrar como a estratégia funciona com seus números.</p>
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://wa.me/5548991038050" target="_blank" className="inline-flex justify-center rounded-2xl bg-white px-6 py-3 text-gray-900 font-medium">Falar agora no WhatsApp</a>
                <a href="#contato" className="inline-flex justify-center rounded-2xl border border-white/30 px-6 py-3 font-medium">Enviar meus dados</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Contato</h2>
          <p className="mt-2 text-gray-600">Preencha os dados e retornarei em até 1 dia útil.</p>
          <form className="mt-8 grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
            <input className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Nome completo" />
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="E-mail" />
              <input className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Telefone / WhatsApp" />
            </div>
            <select className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900">
              <option>Interesse principal</option>
              <option>Consórcio Imobiliário</option>
              <option>Levantamento de Capital</option>
              <option>Plano Construtora</option>
              <option>Mentoria 1:1</option>
            </select>
            <textarea rows={5} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Conte seu objetivo em poucas linhas" />
            <button type="submit" className="mt-2 inline-flex justify-center rounded-2xl bg-gray-900 px-6 py-3 text-white font-medium">Solicitar contato</button>
          </form>
          <div className="mt-6 text-sm text-gray-600">
            <p><span className="font-medium">WhatsApp:</span> (48) 99103‑8050 • <span className="font-medium">E‑mail:</span> contato@edemilsoncamilo.com</p>
            <p className="mt-1">Atendimento: Seg a Sex, 9h–18h • Palhoça/SC</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Edemilson Camilo — Todos os direitos reservados.</p>
          <div className="text-sm text-gray-600 flex items-center gap-4">
            <a href="#" className="hover:text-gray-800">Política de Privacidade</a>
            <a href="#" className="hover:text-gray-800">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
