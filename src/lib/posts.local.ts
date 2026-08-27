import type { BlogPostFull } from './blog.server';

/**
 * Posts escritos direto no código, sem passar pela API do blog.
 * Cada post precisa do mesmo shape que a API retorna, com o corpo
 * já em HTML (`content_html`).
 */
export const localPosts: BlogPostFull[] = [
  {
    id: -5,
    title:
      '"Talvez Você Deva Conversar com Alguém": as Lições de Lori Gottlieb para o Dia do Psicólogo',
    subtitle:
      'Você já parou para pensar o que acontece quando a vida do seu psicólogo desmorona? Lori Gottlieb respondeu isso num livro inteiro, e a resposta é o melhor jeito de comemorar o 27 de agosto',
    slug: 'dia-do-psicologo-27-de-agosto-homenagem-cuidaty',
    excerpt:
      'Você já parou para pensar o que acontece quando a vida do seu psicólogo desmorona? Em "Talvez você deva conversar com alguém", Lori Gottlieb conta exatamente isso. No Dia do Psicólogo, 27 de agosto, a Cuidaty tira do livro quatro lições para levar para a vida e para o consultório, e se posiciona ao lado da categoria nas suas pautas de valorização.',
    cover_image_url: '/blog/4_licoes_dia_psicologo_capa.webp',
    published_at: '2026-08-27T00:00:00.000Z',
    author: { name: 'Equipe Cuidaty' },
    tags: [
      { name: 'Dia do Psicólogo', slug: 'dia-do-psicologo' },
      { name: 'Carreira', slug: 'carreira' },
      { name: 'Psicologia Clínica', slug: 'psicologia-clinica' },
      { name: 'Saúde Mental', slug: 'saude-mental' },
    ],
    seo: {
      meta_title: 'Dia do Psicólogo (27/08): lições de "Talvez você deva conversar com alguém"',
      meta_description:
        'Dia do Psicólogo, 27 de agosto: quatro lições do livro de Lori Gottlieb para levar para a vida e para o consultório. Sobre a humanidade do terapeuta, o cuidado com quem cuida e por que a Cuidaty apoia as pautas da saúde mental brasileira.',
      og_image_url: '/blog/4_licoes_dia_psicologo_capa-og.jpg',
      canonical_url: null,
    },
    content_html: `
<p>Você já parou para pensar o que acontece quando a vida do seu psicólogo desmorona?</p>

<p>Não é pergunta retórica. Alguém sentou e escreveu um livro inteiro respondendo, e o livro virou fenômeno mundial justamente porque quase ninguém tinha coragem de abrir essa porta.</p>

<h2>A terapeuta que precisou de terapeuta</h2>

<p>Em <em>Talvez você deva conversar com alguém</em>, Lori Gottlieb faz uma coisa arriscada para uma psicoterapeuta. Ela conta que levou um fora, desmoronou e foi bater na porta de outro terapeuta, o Wendell. Enquanto isso, seguia atendendo os próprios pacientes: o roteirista cínico que chamava todo mundo de idiota, a jovem com câncer terminal, a idosa que achava que tinha desperdiçado a vida inteira.</p>

<p>O livro alterna as duas cadeiras. Num capítulo ela é quem escuta. No outro, é quem chora no sofá e implora por uma resposta que ninguém pode dar.</p>

<figure style="margin:2.5rem auto;max-width:290px">
<img src="/blog/livro_talvez_voce_devesse_converssar_com_alguem.png" alt="Capa do livro Talvez Você Deva Conversar com Alguém, de Lori Gottlieb: fundo amarelo com uma caixa de lenços azul e lenços amassados." width="525" height="791" loading="lazy" decoding="async" style="width:100%;height:auto;margin:0;border-radius:0;box-shadow:none" />
<figcaption>Capa da edição brasileira, publicada pela Vestígio. O subtítulo entrega a proposta: uma terapeuta, o terapeuta dela e a vida de todos nós.</figcaption>
</figure>

<p style="text-align:center;font-size:0.95rem"><a href="https://www.amazon.com.br/Talvez-voc%C3%AA-deva-conversar-algu%C3%A9m/dp/6599039812" target="_blank" rel="noopener noreferrer nofollow">Comprar impresso na Amazon</a> · <a href="https://www.kobo.com/br/pt/ebook/talvez-voce-deva-conversar-com-alguem" target="_blank" rel="noopener noreferrer nofollow">Comprar ebook na Kobo</a><br /><span style="color:#94a3b8;font-size:0.85rem">Links sem afiliação: a Cuidaty não ganha nada com a sua compra.</span></p>

<p>Hoje é 27 de agosto, Dia do Psicólogo, data que marca a regulamentação da profissão no Brasil, em 1962. E a homenagem mais honesta que a gente consegue fazer não começa elogiando técnica, formação ou currículo. Começa exatamente onde a Gottlieb começa. Separamos quatro lições do livro para levar para a vida, e para dentro do consultório.</p>

<h2>Lição 1: a linha entre quem cuida e quem precisa de cuidado não existe</h2>

<p>É a tese que sustenta o livro inteiro, e ela é desconfortável. A graduação sugere uma fronteira nítida: de um lado o profissional, treinado e estável; do outro o paciente, em sofrimento. Gottlieb passa quatrocentas páginas mostrando que essa fronteira é uma convenção do setting, não um fato sobre as pessoas.</p>

<p>Ela erra. Fica irritada com paciente. Se emociona junto. Julga alguém no primeiro encontro e descobre, capítulos depois, o tamanho da própria miopia. Nenhum desses momentos aparece no livro como fracasso profissional. Aparecem como o núcleo da coisa.</p>

<h2>Lição 2: quem faz alguém soltar as grades é uma pessoa, não uma técnica</h2>

<p>Tem uma imagem no livro que virou quase um clichê justamente porque acerta demais. A pessoa está numa cela, segurando as grades com força, gritando por socorro. Só que a cela tem uma porta. A porta está aberta. E ninguém consegue enxergar isso enquanto estiver com as duas mãos ocupadas segurando as grades.</p>

<p>Quem faz a pessoa soltar não é um protocolo. É outro ser humano, sentado ali, disposto a ficar na cela junto por um tempo até que dê para olhar em volta.</p>

<p>O paciente não se sente acolhido porque a interpretação foi tecnicamente correta. Ele se sente acolhido porque percebe, de um jeito pré-verbal, que tem alguém inteiro na sala. Alguém que também já perdeu gente, também já teve medo do futuro, também já ficou sem saber o que fazer da própria vida num domingo à tarde. É essa presença que sustenta a aliança terapêutica. A técnica organiza o trabalho. A humanidade é o que faz o trabalho acontecer.</p>

<h2>Lição 3: se afetar não é falha de manejo</h2>

<p>Existe um mito de formação que produz muito sofrimento em silêncio: o de que sentir alguma coisa com o paciente é erro. Que profissional bom é profissional que não se abala. Que se você saiu de uma sessão pensando naquilo no chuveiro, algo deu errado no seu setting.</p>

<p>Não deu.</p>

<p>Gottlieb escreve sobre chorar depois de uma sessão, sobre carregar a história de alguém pelo resto do dia, sobre não saber o que dizer e simplesmente ficar ali. O que ela mostra é que a diferença entre se afetar e se perder no caso não está em blindar o afeto. Está em ter onde levá-lo: supervisão, análise pessoal, pares. O afeto não é o problema. O afeto sozinho, sem lugar nenhum para ir, é.</p>

<h2>Lição 4: cuidar de quem cuida é condição de trabalho, não luxo</h2>

<p>Escutar dor alheia quarenta horas por semana cobra caro. Fadiga por compaixão, esgotamento, aquela sensação de estar drenado num nível que férias não resolvem. Psicólogo não é feito de material diferente do resto das pessoas.</p>

<p>O livro é, no fundo, a demonstração prática disso: uma terapeuta experiente, com anos de clínica nas costas, que precisou de terapia para continuar exercendo. Supervisão, terapia própria, descanso, agenda que caiba num ser humano. Nada disso é mimo. É infraestrutura da profissão.</p>

<h2>E aos estudantes de psicologia</h2>

<p>Para quem ainda está na graduação, atravessando estágio, primeira supervisão, o pânico da primeira sessão de verdade: a insegurança que você sente não é sinal de que escolheu errado. É sinal de que entendeu o tamanho da responsabilidade.</p>

<p>Ninguém entra numa sala de atendimento pela primeira vez se sentindo pronto. Gottlieb, veterana, descreve exatamente a mesma dúvida diante de casos difíceis. A diferença entre o estudante e o profissional experiente não é a ausência de dúvida. É o que cada um faz com ela: leva para a supervisão, estuda, discute, tolera não saber por mais tempo sem se desesperar.</p>

<p>Vocês estão entrando numa profissão que o Brasil precisa com urgência. E vão entrar num mercado que ainda não paga o que essa urgência vale. As duas coisas são verdade ao mesmo tempo, e é bom saber disso desde já.</p>

<h2>Onde a Cuidaty se posiciona</h2>

<p>Homenagem que só distribui elogio no dia 27 e vira as costas no dia 28 é marketing. Então vamos ser específicos.</p>

<p>A Cuidaty está ao lado da categoria nas suas reivindicações. Piso salarial digno. Jornada compatível com a natureza clínica do trabalho, porque escutar sofrimento não é atividade que se estica indefinidamente sem consequência. Remuneração justa nos convênios, onde o valor pago por sessão está congelado há tempo demais enquanto o custo de manter um consultório só sobe. Condições reais de trabalho na saúde pública, nos CAPS, nas unidades básicas, nas escolas, onde a demanda cresce muito mais rápido que a estrutura. Fim da precarização por plataformas que transformam atendimento clínico em corrida por volume.</p>

<p>Essas pautas não são disputa corporativa. Psicólogo mal pago e sobrecarregado atende pior, adoece mais e abandona a profissão antes. Quem paga essa conta no fim é o paciente.</p>

<p>E fazemos questão de deixar claro: esse apoio não é condicionado a você ser cliente nosso. Vale para quem usa a Cuidaty e para quem nunca ouviu falar da gente. Somos parceiros da comunidade de saúde mental brasileira inteira, não da nossa base de assinantes.</p>

<p>O que a gente pode fazer, faz do nosso jeito: tirar do seu caminho a parte burocrática que consome tempo clínico. Agenda, prontuário, cobrança, guia de convênio, aquele bloco de horas que some com administração e nunca aparece na conta de ninguém. Não é o mais importante do seu trabalho. Mas é o que rouba a energia que deveria estar sobrando para o mais importante.</p>

<h2>Feliz Dia do Psicólogo</h2>

<p>Para quem atende no consultório, no SUS, na escola, na empresa, no hospital, no online. Para quem supervisiona, pesquisa e forma as próximas turmas. Para quem ainda está no quarto ano lendo caso clínico de madrugada e se perguntando se dá conta.</p>

<p>O que vocês fazem sustenta gente de pé todo dia, e boa parte disso acontece sem ninguém ver.</p>

<p>Parabéns pelo dia. Estaremos sempre do lado de vocês.</p>
`,
  },
  {
    id: -4,
    title: 'O Convênio Te Deve Dinheiro, e Você Nem Sabe',
    subtitle: 'A sessão que você atendeu, o plano negou e quase ninguém vai atrás de receber',
    slug: 'como-reduzir-glosas-psicologia-ciencia-de-dados-guias-tiss',
    excerpt:
      'A maior parte das glosas de planos de saúde não é discordância clínica, é erro formal na guia. Veja o que as operadoras exigem na emissão, quais indicadores acompanhar e como um sistema de gestão com dados estruturados corta a perda de receita do consultório.',
    cover_image_url: '/blog/convenio_te_deve_dinheiro.webp',
    published_at: '2026-08-25T00:00:00.000Z',
    author: { name: 'Equipe Cuidaty' },
    tags: [
      { name: 'Gestão de Clínica', slug: 'gestao-de-clinica' },
      { name: 'Convênios', slug: 'convenios' },
      { name: 'Faturamento TISS', slug: 'faturamento-tiss' },
      { name: 'Ciência de Dados', slug: 'ciencia-de-dados' },
    ],
    seo: {
      meta_title: 'Como reduzir glosas em psicologia: guias TISS, dados e faturamento',
      meta_description:
        'Reduzir glosas de convênio em clínicas de psicologia: o que os planos exigem na emissão da guia SP/SADT, códigos TUSS, prazos de recurso e como análise de dados no prontuário eletrônico recupera receita.',
      og_image_url: '/blog/convenio_te_deve_dinheiro-og.jpg',
      canonical_url: null,
    },
    content_html: `
<p>Uma sessão glosada parece pouco. Cento e vinte reais, cento e cinquenta, some da conta e ninguém percebe no mês. Agora multiplique por doze pacientes de convênio, quatro sessões cada, todo mês, e o número deixa de ser detalhe: vira a diferença entre a clínica fechar no azul ou no vermelho.</p>

<p>E o pior é que quase nada disso é discordância clínica. É formulário.</p>

<h2>A glosa é quase sempre um erro formal, não uma disputa técnica</h2>

<p>Os dados hospitalares deixam isso evidente. O <a href="https://www.anahp.com.br/publicacoes/observatorio-anahp-2025/" target="_blank" rel="noopener noreferrer">Observatório Anahp 2025</a> acompanha dois indicadores que costumam ser confundidos. O primeiro é a <strong>glosa inicial</strong>, o que a operadora nega de largada, ainda em negociação: subiu de 11,89% em 2023 para 15,89% em 2024 entre os hospitais associados (Tabela 1, capítulo de Gestão Econômico-Financeira). O segundo é a <strong>glosa aceita</strong>, o valor que o hospital desistiu de cobrar e lançou como perda definitiva: ficou em 1,96% da receita bruta de convênios no mesmo ano (Gráfico 8).</p>

<p>Os dois números têm bases de cálculo diferentes, então não dá para subtrair um do outro e cravar um percentual de recuperação. Mas a ordem de grandeza conta a história sozinha: o que é negado de saída é várias vezes maior do que o que vira prejuízo no fim da linha. A maior parte da glosa não sobrevive à contestação, porque nunca teve razão de existir.</p>

<p>O custo dessa disputa aparece em outro indicador do mesmo relatório. O índice de recebimento caiu de 91,27% para 88,61% entre 2023 e 2024, e a inadimplência das operadoras saltou de 49,96% para 61,53%. O dinheiro até volta, mas volta tarde e depois de alguém provar que era devido. Num consultório sem estrutura de faturamento, esse alguém não existe, e a glosa indevida vira perda por desistência.</p>

<p>As glosas se dividem em três tipos. A <strong>administrativa</strong> vem de falha formal: código errado, guia incompleta, senha vencida, prazo estourado. A <strong>técnica</strong> questiona a pertinência do procedimento. A <strong>linear</strong> é um corte percentual aplicado sem análise item a item. Em clínicas de psicologia, a esmagadora maioria é administrativa. Ou seja: evitável antes do envio, não depois.</p>

<h2>O que o plano exige quando você emite a guia</h2>

<p>O faturamento com operadoras segue o padrão TISS da ANS, hoje na versão 4.01.00. Para psicoterapia, o documento é a guia SP/SADT, que cobre consultas com procedimento, terapias e atendimentos de equipe não médica. Cada campo dela é um ponto potencial de glosa.</p>

<p><strong>Elegibilidade do beneficiário.</strong> Número da carteirinha correto, plano ativo, validade dentro da data de atendimento. Paciente que trocou de plano no meio do tratamento e não avisou é causa clássica de guia negada em bloco.</p>

<p><strong>Senha de autorização e validade.</strong> Consulta em psicologia e psicoterapia individual costumam exigir autorização prévia. A senha tem número, quantidade de sessões liberadas e prazo de validade. Em operadoras de alto volume na psicologia, como SulAmérica e Geap, é aqui que mora a maior parte da perda: o tratamento é contínuo e a autorização é finita. Executar a décima primeira sessão de um pacote de dez, ou atender três dias depois do vencimento da senha, gera glosa certa. Cada operadora tem sua própria regra de quantidade e renovação, e é responsabilidade da clínica acompanhar cada uma.</p>

<p><strong>Código TUSS correto.</strong> Consulta em psicologia (50000462), sessão de psicoterapia individual por psicólogo (50000470), sessão de psicoterapia individual (20104219), psicoterapia de grupo por paciente (20104200). Trocar o código do procedimento pelo da consulta, ou usar um código que a operadora não contrata, derruba o item.</p>

<p><strong>Dados de execução.</strong> Data de atendimento, número do conselho e CBO do profissional executante, quantidade executada compatível com a autorizada, CID quando o contrato exigir, assinatura do beneficiário comprovando a presença.</p>

<p><strong>Prazo de envio do lote e prazo de recurso.</strong> Os dois são contratuais e correm em paralelo. Perder a janela de contestação transforma uma glosa recuperável em perda definitiva, mesmo quando você tinha razão.</p>

<p>O consultório de psicologia sofre um agravante estrutural aqui. O faturamento é de alto volume e baixo valor unitário: dezenas de eventos semanais recorrentes, cada um com pouca receita. Conferir manualmente sessão por sessão custa mais caro que a própria sessão. É exatamente esse tipo de problema que dado estruturado resolve bem.</p>

<h2>Onde entra a ciência de dados</h2>

<p>Glosa é um evento altamente repetitivo, com causa codificada e histórico. Isso a torna previsível. Não no sentido de adivinhação, mas no sentido estatístico: a mesma operadora nega o mesmo campo, pelo mesmo motivo, mês após mês.</p>

<p><strong>Classificação por motivo e por operadora.</strong> O primeiro passo é parar de tratar glosa como acidente isolado e começar a tabular. Motivo, operadora, profissional executante, procedimento, valor, data. Em três meses de registro, o padrão aparece sozinho. É comum descobrir que dois motivos concentram mais da metade da perda, e que uma única operadora responde pela maior parte do prejuízo.</p>

<p><strong>Regras preventivas antes do envio.</strong> Uma vez que o padrão está mapeado, ele vira checagem automática. Senha próxima do vencimento, saldo de sessões autorizadas chegando a zero, carteirinha com validade expirando, procedimento sem código compatível com o contrato daquela operadora. O sistema avisa antes, não depois.</p>

<p><strong>Monitoramento do saldo de autorização.</strong> Em psicoterapia, o tratamento é longo e a autorização é curta. Acompanhar quantas sessões restam em cada senha, por paciente, evita o cenário mais frustrante de todos: atender por semanas sem cobertura ativa e descobrir na hora do faturamento.</p>

<p><strong>Indicadores de acompanhamento.</strong> Quatro números dizem quase tudo sobre a saúde do faturamento de convênio: taxa de glosa inicial, taxa de glosa final (o que sobrou depois dos recursos), percentual recuperado em contestação e prazo médio entre atendimento e recebimento. Sem esses quatro, gestão de convênio é palpite.</p>

<p><strong>Renegociação com base em evidência.</strong> Esse é o uso menos óbvio e talvez o mais valioso. Chegar numa renegociação de contrato com a taxa de glosa daquela operadora, o motivo dominante e o valor retido no ano muda completamente a conversa. Sem dados, você reclama. Com dados, você negocia.</p>

<h2>Todos os demonstrativos numa tela só</h2>

<p>O obstáculo prático para tudo o que está acima é que cada operadora devolve seu demonstrativo do seu jeito, no seu portal, no seu prazo e no seu leiaute. Quem atende SulAmérica e Geap conhece bem a cena: dois acessos diferentes, dois arquivos que não conversam, duas lógicas de numeração de guia. Some mais três convênios e a clínica tem cinco planilhas e nenhuma visão do conjunto. É por isso que quase ninguém sabe responder quanto perdeu de glosa no ano passado.</p>

<p>Consolidar esses retornos num só lugar muda a pergunta que você consegue fazer. Deixa de ser “essa guia foi negada?” e passa a ser “qual operadora está me custando mais caro?”. O painel abaixo é um exemplo do formato:</p>

<figure>
<div style="overflow-x:auto">
<svg viewBox="0 0 720 404" width="100%" role="img" aria-labelledby="glosaTitulo glosaDesc" xmlns="http://www.w3.org/2000/svg" style="min-width:620px;font-family:Figtree, ui-sans-serif, system-ui, sans-serif"><title id="glosaTitulo">Demonstrativos consolidados de todas as operadoras</title><desc id="glosaDesc">Valor apresentado e valor glosado por operadora em um unico painel. Total apresentado de R$ 48.600, total glosado de R$ 6.620, taxa de glosa de 13.6 por cento.</desc><rect x="0.5" y="0.5" width="719" height="403" rx="12" fill="#ffffff" stroke="#e6e4df"/><text x="24" y="36" font-size="17" font-weight="600" fill="#0f1c26">Demonstrativos consolidados</text><text x="24" y="55" font-size="12" fill="#475569">Todas as operadoras, competência de agosto/2026</text><rect x="24" y="68" width="218" height="60" rx="8" fill="#f0f4f8"/><text x="38" y="91" font-size="10" font-weight="600" letter-spacing="0.08em" fill="#475569">APRESENTADO</text><text x="38" y="117" font-size="21" font-weight="600" fill="#0f1c26">R$ 48.600</text><rect x="251" y="68" width="218" height="60" rx="8" fill="#f0f4f8"/><rect x="265" y="83" width="8" height="8" rx="2" fill="#d9534f"/><text x="278" y="91" font-size="10" font-weight="600" letter-spacing="0.08em" fill="#475569">GLOSADO</text><text x="265" y="117" font-size="21" font-weight="600" fill="#0f1c26">R$ 6.620</text><rect x="478" y="68" width="218" height="60" rx="8" fill="#f0f4f8"/><text x="492" y="91" font-size="10" font-weight="600" letter-spacing="0.08em" fill="#475569">TAXA DE GLOSA</text><text x="492" y="117" font-size="21" font-weight="600" fill="#0f1c26">13,6%</text><text x="24" y="158" font-size="10" font-weight="600" letter-spacing="0.08em" fill="#475569">POR OPERADORA</text><line x1="142" y1="170" x2="142" y2="358" stroke="#e6e4df"/><g><title>SulAmérica: R$ 16.800 apresentado, R$ 2.520 glosado</title><text x="24" y="189.0" font-size="13" fill="#0f1c26">SulAmérica</text><rect x="150" y="176" width="373.7" height="16" rx="3" fill="#2b7fb8"/><rect x="525.7" y="176" width="66.3" height="16" rx="3" fill="#d9534f"/><text x="602.0" y="189.0" font-size="12" fill="#0f1c26">R$ 2.520 <tspan fill="#475569">(15%)</tspan></text></g><g><title>Geap: R$ 12.400 apresentado, R$ 2.480 glosado</title><text x="24" y="229.0" font-size="13" fill="#0f1c26">Geap</text><rect x="150" y="216" width="259.0" height="16" rx="3" fill="#2b7fb8"/><rect x="411.0" y="216" width="65.2" height="16" rx="3" fill="#d9534f"/><text x="486.2" y="229.0" font-size="12" fill="#0f1c26">R$ 2.480 <tspan fill="#475569">(20%)</tspan></text></g><g><title>Unimed: R$ 9.600 apresentado, R$ 960 glosado</title><text x="24" y="269.0" font-size="13" fill="#0f1c26">Unimed</text><rect x="150" y="256" width="225.3" height="16" rx="3" fill="#2b7fb8"/><rect x="377.3" y="256" width="25.3" height="16" rx="3" fill="#d9534f"/><text x="412.6" y="269.0" font-size="12" fill="#0f1c26">R$ 960 <tspan fill="#475569">(10%)</tspan></text></g><g><title>Bradesco Saúde: R$ 6.200 apresentado, R$ 372 glosado</title><text x="24" y="309.0" font-size="13" fill="#0f1c26">Bradesco Saúde</text><rect x="150" y="296" width="151.3" height="16" rx="3" fill="#2b7fb8"/><rect x="303.3" y="296" width="9.8" height="16" rx="3" fill="#d9534f"/><text x="323.1" y="309.0" font-size="12" fill="#0f1c26">R$ 372 <tspan fill="#475569">(6%)</tspan></text></g><g><title>Amil: R$ 3.600 apresentado, R$ 288 glosado</title><text x="24" y="349.0" font-size="13" fill="#0f1c26">Amil</text><rect x="150" y="336" width="85.1" height="16" rx="3" fill="#2b7fb8"/><rect x="237.1" y="336" width="7.6" height="16" rx="3" fill="#d9534f"/><text x="254.7" y="349.0" font-size="12" fill="#0f1c26">R$ 288 <tspan fill="#475569">(8%)</tspan></text></g><rect x="24" y="373" width="10" height="10" rx="2" fill="#2b7fb8"/><text x="40" y="382" font-size="12" fill="#475569">Recebido</text><rect x="114" y="373" width="10" height="10" rx="2" fill="#d9534f"/><text x="130" y="382" font-size="12" fill="#475569">Glosado</text><text x="696" y="382" font-size="11" text-anchor="end" fill="#94a3b8">Dados ilustrativos</text></svg>
</div>
<figcaption>Exemplo ilustrativo de consolidação de demonstrativos por operadora. Valores fictícios.</figcaption>
</figure>

<p>Compare as duas primeiras linhas e o problema fica evidente. A SulAmérica é o maior faturamento do mês e também a maior perda absoluta, R$ 2.520. Olhando só essa coluna, é nela que você mexe primeiro. Só que a Geap fatura 26% menos e glosa praticamente o mesmo valor, R$ 2.480, porque a taxa dela é de 20% contra 15% da SulAmérica. Proporcionalmente, a Geap é a pior conta da clínica, e ela some da vista de quem só olha valor absoluto.</p>

<p>As duas leituras importam, e elas pedem ações diferentes. O volume absoluto da SulAmérica diz onde há mais dinheiro parado para recuperar em recurso, agora. A taxa da Geap diz que existe algo estruturalmente errado ali: ou o preenchimento da guia não atende ao que aquela operadora exige, ou o contrato precisa ser renegociado. Recorrer todo mês sem corrigir a causa é enxugar gelo.</p>

<p>Com o histórico acumulado, esse mesmo painel responde se a taxa da Geap está subindo mês a mês, se um profissional específico concentra as glosas por preenchimento e quanto do total negado voltou depois do recurso. Sem consolidação, cada demonstrativo é um susto isolado. Com ela, viram série histórica.</p>

<h2>O prontuário é a prova do recurso</h2>

<p>Contestar glosa técnica sem registro clínico é discussão perdida. A operadora questiona a pertinência, e a resposta precisa ser documental: evolução da sessão registrada na data correta, indicação clínica, plano terapêutico, frequência justificada.</p>

<p>Prontuário eletrônico estruturado resolve isso por consequência, não por esforço extra. Se o registro já é feito no dia, com campos organizados e vinculado ao paciente e ao convênio, montar um recurso deixa de ser garimpo em pastas e vira exportação de documento. A diferença entre recuperar o valor glosado e desistir dele geralmente está aí, no custo operacional de provar o óbvio.</p>

<h2>O que um sistema de gestão precisa entregar</h2>

<p>Nenhuma dessas análises acontece com dados espalhados entre caderno, planilha e memória. Elas dependem de uma base única onde paciente, convênio, agenda, atendimento e financeiro conversam.</p>

<p>Na <a href="https://app.cuidaty.com/register" target="_blank" rel="noopener noreferrer">Cuidaty</a>, esse alicerce começa no plano Básico: cadastro de paciente com dados de convênio, agenda com recorrência, prontuário eletrônico completo, financeiro com faturas e dashboard, formulários e relatórios exportáveis em PDF. É o mínimo para que cada sessão vire um registro consultável, e não uma anotação solta.</p>

<p>Para quem opera em escala, o plano Clínicas e Grupos adiciona a camada de inteligência de negócio: analytics avançado de operação, multiunidade, equipes com permissão por cargo e prontuário, migração de dados de outras plataformas. Uma rede com várias unidades e dezenas de profissionais precisa comparar taxa de glosa entre filiais e entre executantes para saber onde intervir. Isso é problema de dados agregados, não de esforço individual.</p>

<p>Vale a ressalva honesta: a Cuidaty organiza a base clínica, financeira e de convênio que sustenta esse trabalho. A transmissão do lote no padrão TISS continua acontecendo no portal da operadora ou no faturador que a clínica já usa. O ponto é que a qualidade do que você envia, e a sua capacidade de contestar o que volta, dependem do que está registrado antes.</p>

<p>Glosa não se ganha no recurso. Se ganha no cadastro, na senha conferida e no registro feito no dia certo.</p>
`,
  },
  {
    id: -3,
    title: 'Antes de Terapeuta, Mulher: O Tabu do Assédio Cometido por Pacientes',
    subtitle: 'O que fazer quando quem deveria ser cuidado cruza o limite',
    slug: 'assedio-cometido-por-pacientes-tabu-psicologia',
    excerpt:
      'A ética clínica costuma discutir o poder do terapeuta e a vulnerabilidade do paciente. Mas existe um silêncio na profissão sobre o que acontece quando é o paciente quem cruza a linha, e a psicóloga se torna a vítima dentro da própria sala.',
    cover_image_url: '/blog/terapia_abuso_por_pacientes.webp',
    published_at: '2026-07-22T00:00:00.000Z',
    author: { name: 'Equipe Cuidaty' },
    tags: [
      { name: 'Ética Profissional', slug: 'etica-profissional' },
      { name: 'Saúde Mental', slug: 'saude-mental' },
      { name: 'Psicologia Clínica', slug: 'psicologia-clinica' },
      { name: 'Assédio', slug: 'assedio' },
    ],
    seo: {
      meta_title: 'Assédio cometido por pacientes: o tabu que a psicologia não discute',
      meta_description:
        'Assédio sexual cometido por pacientes contra psicólogas: por que a empatia profissional não pode custar a integridade da terapeuta, como identificar a escalada de desvios de limites e o que fazer diante de uma violação em sessão.',
      og_image_url: '/blog/terapia_abuso_por_pacientes-og.jpg',
      canonical_url: null,
    },
    content_html: `
<p>A ética clínica tem um roteiro conhecido: o poder é do terapeuta, a vulnerabilidade é do paciente. Esse roteiro cobre a maior parte dos casos reais. Mas ele quebra quando a dinâmica se inverte, quando é o paciente quem cruza a linha e a psicóloga que se torna alvo dentro da própria sala de atendimento.</p>

<p>Existe um silêncio perigoso em torno disso. Formamos psicólogas para acolher, para compreender contextos, para ressignificar dores alheias. Só que a empatia profissional não pode custar a integridade física e pessoal de quem está do outro lado do divã.</p>

<h2>O peso da empatia e o conflito de papéis</h2>

<p>Um relato que virou referência na literatura clínica é o da psicóloga estadunidense Ashley Herbst. Durante um atendimento, ela foi assediada sexualmente por um paciente ao fim da sessão. A reação dela, como a de muitas profissionais na mesma situação, foi um conflito interno imediato: será que denunciar prejudica o progresso clínico dele? O histórico de sofrimento do paciente justifica o que aconteceu?</p>

<p>Esse é o ponto central do tabu do assédio reverso: a terapeuta tende a justificar clinicamente o abuso, só para não sair do papel de terapeuta. Foi a supervisora clínica de Herbst quem trouxe a clareza que faltava, relatada no <a href="https://www.societyforpsychotherapy.org/ethical-considerations-when-a-client-crosses-sexual-boundaries-my-experience-as-a-student-therapist/" target="_blank" rel="noopener noreferrer">artigo original publicado pela Society for the Advancement of Psychotherapy</a>: naquele momento, ela não era apenas uma terapeuta. Era uma mulher que tinha acabado de ser violada. A segurança dela vinha antes de qualquer contrato terapêutico.</p>

<h2>A escalada do abuso: do desvio à violação</h2>

<p>Abusos raramente começam de forma abrupta. Eles seguem uma escalada bem documentada na literatura sobre ética clínica:</p>

<p><strong>Desvios de limites (boundary crossings):</strong> começam pequenos. Um pedido para prolongar a sessão sem motivo clínico. Perguntas insistentes sobre a vida pessoal da terapeuta. Toques que o paciente chama de casuais.</p>

<p><strong>Violações de limites (boundary violations):</strong> se os desvios não são freados com firmeza, evoluem para comentários sexuais explícitos, assédio e agressão, quebrando de vez o setting terapêutico.</p>

<p>Um <a href="https://www.tandfonline.com/doi/full/10.1080/23311908.2016.1194176" target="_blank" rel="noopener noreferrer">estudo publicado na Cogent Psychology</a> mostra que cerca de 75% dos terapeutas relatam já ter percebido algum nível de atração vinda de um cliente. Sentir atração é humano. Agir sobre ela de forma abusiva não é.</p>

<h2>O que fazer quando o limite é cruzado</h2>

<p>Não existe um código de ética que regule o comportamento do paciente. A responsabilidade de impor o limite, e de se proteger, é da profissional. Diante de uma violação, algumas diretrizes ajudam a atravessar o momento:</p>

<p>Interrompa na hora. Ao primeiro sinal de violação, o limite precisa ser verbalizado de forma assertiva e inegociável. Não tente analisar o assédio enquanto ele está acontecendo.</p>

<p>Busque supervisão imediatamente. O choque costuma vir acompanhado de vergonha e da sensação de incompetência profissional. Levar o caso à supervisão clínica e à rede de apoio quebra o isolamento antes que ele se instale.</p>

<p>Você tem o direito de denunciar. As diretrizes de sigilo do <a href="https://site.cfp.org.br/legislacao/codigo-de-etica/" target="_blank" rel="noopener noreferrer">Conselho Federal de Psicologia</a> exigem não causar dano ao paciente, mas isso não anula o direito da profissional à justiça e ao autocuidado. Prestar queixa é uma opção legítima, e em muitos casos, necessária.</p>

<p>Encerre o vínculo terapêutico. Continuar o atendimento depois de uma violação compromete a objetividade e a saúde mental da profissional. Encerrar o caso, com encaminhamento se for seguro fazê-lo, costuma ser a única via ética disponível.</p>

<h2>Registro e gestão como proteção real</h2>

<p>A organização da clínica funciona como escudo nesses casos. Manter registros rigorosos de cada sessão não é burocracia. É segurança jurídica e ética.</p>

<p>Um sistema de gestão e prontuário eletrônico bem estruturado permite documentar os primeiros sinais de desvio de limites: falas literais do paciente, comportamentos inadequados, e as intervenções de limite que a profissional já fez antes da situação escalar. Se um dia isso vira denúncia formal ou justifica o rompimento forçado do vínculo, um prontuário bem mantido é prova da conduta correta da terapeuta.</p>

<p>O consultório é espaço de trabalho, não escudo contra a realidade. Antes de terapeuta, você é uma mulher, e proteger a sua prática começa por reconhecer que a sua segurança não é negociável.</p>
`,
  },
  {
    id: -2,
    title: 'RS em Alerta: A Ecoansiedade Que Pede um Psicólogo',
    subtitle: 'Entenda o papel do psicólogo nas mudanças climáticas no Brasil',
    slug: 'ecoansiedade-medo-clima-saude-mental',
    excerpt:
      'A cada novo prognóstico hidrológico da Defesa Civil do RS, o coração de quem já viveu uma enchente dispara antes da chuva cair. Entenda por que a ecoansiedade é uma resposta legítima do corpo, e não um transtorno a ser calado.',
    cover_image_url: '/blog/ecoansiedade-rs.webp',
    published_at: '2026-07-21T00:00:00.000Z',
    author: { name: 'Equipe Cuidaty' },
    tags: [
      { name: 'Saúde Mental', slug: 'saude-mental' },
      { name: 'Ecoansiedade', slug: 'ecoansiedade' },
      { name: 'Psicologia Clínica', slug: 'psicologia-clinica' },
      { name: 'Previsão do Tempo', slug: 'previsao-do-tempo' },
    ],
    seo: {
      meta_title: 'Ecoansiedade no RS: o medo por trás de cada previsão de chuva',
      meta_description:
        'Ecoansiedade no Rio Grande do Sul: por que a previsão do tempo e a situação de inundação em rios como o Quaraí disparam ansiedade real. Entenda a resposta do corpo e como a psicologia pode ajudar.',
      og_image_url: '/blog/ecoansiedade-rs-og.jpg',
      canonical_url: null,
    },
    content_html: `
<p>"Acordo de madrugada com o barulho da chuva e não consigo mais dormir." Esse relato tem aparecido com frequência crescente nos consultórios gaúchos, e não é exagero do paciente. Para milhares de pessoas no Rio Grande do Sul, o coração dispara a cada novo boletim da Defesa Civil, e a mão vai direto ao celular checar a previsão do tempo antes mesmo de acordar de verdade.</p>

<p>O que antes era uma preocupação abstrata com o futuro do planeta virou uma angústia concreta, sentida no corpo, no presente, e ela chega ao consultório com um nome: ecoansiedade. Reconhecer esse quadro, e diferenciá-lo de um transtorno de ansiedade generalizada, é o primeiro passo do trabalho clínico.</p>

<h2>O Rio Grande do Sul como retrato do problema</h2>

<p>Não é preciso ir longe para ver essa tensão em ação. Em 20 de julho de 2026, o Centro de Monitoramento da Defesa Civil do Rio Grande do Sul atualizou o prognóstico hidrológico do estado, colocando cidades do oeste e do centro gaúcho em condição de atenção ou alerta por causa de chuvas de volumes moderados a elevados nos próximos dias. Entre os rios monitorados estão o Quaraí, o Ibirapuitã, o Ibicuí, o Jaguari, o Vacacaí, o Jacuí, o Pardo, o Forqueta, o Taquari, o Caí e afluentes do rio Uruguai no Alto Uruguai, além do risco de alagamento em arroios, pequenos rios e áreas urbanas. O <a href="https://www.defesacivil.rs.gov.br/upload/arquivos/202607/20114417-aviso-hidrometeorologico-10-atualizacao-4.pdf" target="_blank" rel="noopener noreferrer">Aviso Hidrometeorológico 10/2026</a> já apontava esse padrão, com previsão de chuvas de até 200 milímetros em 48 horas, rajadas de vento superiores a 90 km/h e ameaça de cheia justamente em rios como o Taquari, o Jacuí e o Caí.</p>

<p>O boletim é claro ao dizer que os rios citados não devem atingir a cota de inundação dessa vez. Mas para quem já viu a água subir na porta de casa, essa ressalva técnica não desliga o alarme interno. A situação de inundação próxima ao Rio Quaraí, na fronteira com o Uruguai, e o histórico recente de cheias em praticamente todo o estado bastam para o corpo entrar em alerta antes mesmo de a chuva prevista se confirmar.</p>

<p>95% dos municípios gaúchos já foram atingidos por inundações recentes. Com um histórico desses, faz sentido que o sistema nervoso da população local viva em estado de alerta permanente, e que qualquer previsão de tempestade vire motivo de insônia antes mesmo de a chuva começar.</p>

<p>Existe uma explicação neurológica para isso. A amígdala, a região do cérebro que detecta perigo, fica hipersensível e perde a comunicação com o córtex pré-frontal, a área que normalmente regula essa resposta. O corpo passa a ser inundado cronicamente por cortisol, o hormônio do estresse. Não é força de vontade que resolve isso.</p>

<h2>Um problema que já tem escala</h2>

<p>Uma pesquisa da Universidade de Bath, citada em <a href="https://www.scielo.br/j/pusp/a/y5W5SvQrXTmJchCzkQbpWTg/" target="_blank" rel="noopener noreferrer">estudo publicado na Psicologia USP</a>, mostrou que 50% dos jovens brasileiros relatam prejuízo no funcionamento psicossocial do dia a dia por causa da crise ecológica. Em nível global, <a href="https://jornalismo.iesb.br/destaque3/diante-da-ecoansiedade-jovens-adotam-novos-habitos/" target="_blank" rel="noopener noreferrer">39% dos jovens entrevistados afirmam hesitar em ter filhos</a> por medo do colapso ambiental.</p>

<p>Esse sofrimento, porém, não é distribuído de forma igual. Em reportagem do <a href="https://jornal.usp.br/campus-ribeirao-preto/ecoansiedade-afeta-com-mais-intensidade-populacoes-vulneraveis/" target="_blank" rel="noopener noreferrer">Jornal da USP</a>, a pesquisadora Mariana Leal de Barros e o professor Márcio Henrique Ponzilacqua, ambos da USP, chamam atenção para o racismo ambiental: comunidades ribeirinhas, moradores de favelas e populações marginalizadas são historicamente empurrados para as áreas de maior risco geológico e ficam de fora das infraestruturas de proteção. O luto ecológico bate mais forte em quem já tinha menos.</p>

<h2>O papel do psicólogo diante de um medo que é real</h2>

<p>Diante de uma ameaça estrutural e coletiva, reduzir o pavor de uma enchente a um simples desequilíbrio neuroquímico individual seria um erro clínico. O medo, aqui, é uma resposta proporcional à realidade, não uma distorção dela. E é esse o primeiro ajuste de postura que o profissional precisa fazer diante de um paciente com ecoansiedade: validar o sintoma antes de tratá-lo.</p>

<p>Quando a apreensão com o próximo boletim da Defesa Civil passa a atrapalhar o sono, a concentração no trabalho ou a relação familiar do paciente, o papel do psicólogo não é prometer tirar o medo do mapa. É ajudar a reorganizar como o corpo desse paciente reage a ele, especialmente em regiões como o Rio Grande do Sul, onde esse tipo de demanda tende a crescer junto com a frequência dos alertas climáticos.</p>

<p>É por isso que profissionais da saúde mental têm recorrido a abordagens como <a href="https://www.simplepractice.com/blog/eco-anxiety-supporting-clients-through-climate-distress/" target="_blank" rel="noopener noreferrer">Terapias Somáticas e EMDR</a>. Essas técnicas ajudam o corpo a processar a energia de sobrevivência que ficou represada e reprocessam as memórias traumáticas de desastres, devolvendo alguma estabilidade ao sistema nervoso.</p>

<p>Há também um trabalho de desconstrução do que o filósofo Mark Fisher chamou de "realismo capitalista", conceito retomado no mesmo <a href="https://doi.org/10.1590/0103-6564e240078" target="_blank" rel="noopener noreferrer">estudo da Psicologia USP</a>: a sensação de que a destruição é inevitável e qualquer mobilização, inútil. Essa crença paralisa. E paralisia, no meio de uma crise real, é o pior lugar para ficar.</p>

<h2>O antídoto não é calar o medo, é agir com ele</h2>

<p>Uma diretriz clínica importante para quem atende esses casos: angústia diante da degradação do próprio habitat não é doença a ser eliminada. É prova de empatia e de uma conexão biológica real com a Terra, e o tratamento não deve mirar em apagá-la.</p>

<p>O objetivo terapêutico é outro: ajudar o paciente a trocar o desespero solitário pela <a href="https://www.scielo.br/j/pusp/a/y5W5SvQrXTmJchCzkQbpWTg/" target="_blank" rel="noopener noreferrer">esperança ativa</a>, a postura de parar de esperar por dias melhores e passar a construí-los através de movimentos comunitários e coletivos. Nesse processo, o psicólogo não trabalha para fazer o medo desaparecer. Trabalha para transformá-lo em combustível, e é isso que separa o paciente que trava do que segue em frente.</p>
`,
  },
  {
    id: -1,
    title:
      'Psicologia Organizacional e Psicologia Clínica: escopos, mercados e a integração necessária',
    slug: 'psicologia-organizacional-vs-psicologia-clinica-escolhas-mercados-e-o-futuro-da-saude-mental',
    excerpt:
      'Clínica e Organizacional partiam de escopos diferentes, mas a crise de burnout no trabalho aproximou as duas áreas. Veja as diferenças de atuação, os salários no Brasil, EUA e Portugal, e por que dominar as duas visões virou vantagem competitiva.',
    cover_image_url: '/blog/clinico_x_organizacional.webp',
    published_at: '2026-07-20T00:00:00.000Z',
    author: { name: 'Equipe Cuidaty' },
    tags: [
      { name: 'Carreira', slug: 'carreira' },
      { name: 'Psicologia Organizacional', slug: 'psicologia-organizacional' },
      { name: 'Saúde Mental', slug: 'saude-mental' },
    ],
    seo: {
      meta_title: 'Psicologia Organizacional vs. Clínica: diferenças, salários e mercado',
      meta_description:
        'Psicologia Organizacional vs. Clínica: diferenças de atuação, salários no Brasil, EUA e Portugal, e por que as duas áreas se tornaram complementares no combate ao burnout.',
      og_image_url: '/blog/clinico_x_organizacional-og.jpg',
      canonical_url: null,
    },
    content_html: `
<p>Você já se sentiu dividido entre o desejo de ajudar pessoas a superarem suas dores emocionais mais íntimas e a vontade de transformar os ambientes corporativos, onde a maioria de nós passa a maior parte da vida adulta? Se sim, não está sozinho. Desde os primeiros semestres da graduação, boa parte dos estudantes de psicologia já demonstra preferência pela clínica, atraídos pelo ideal da profissão liberal. Isso costuma tornar o entendimento do papel organizacional um desafio à parte.</p>

<p>A separação rígida entre as duas áreas, no entanto, não se sustenta mais. A Psicologia Clínica se consolidou no cuidado do sofrimento psíquico individual. A Organizacional, no estudo da relação entre pessoas e seus ambientes de trabalho, em nível de equipes e de estrutura. O adoecimento mental contemporâneo não respeita essa fronteira, e cada vez mais uma área precisa da lente da outra para produzir bem-estar de verdade.</p>

<p>Abaixo estão as principais diferenças de escopo, as realidades salariais no Brasil e no exterior, e o ponto em que essas duas áreas se encontram para lidar com a saúde mental no trabalho.</p>

<h2>Escopo de atuação: indivíduo versus sistema</h2>

<p>A psicologia é uma ciência plural, e suas subáreas refletem demandas sociais diferentes. Os alvos e os métodos de intervenção divergem bastante entre elas.</p>

<p>Na <strong>Psicologia Clínica</strong>, a unidade de análise é o indivíduo, a família, os pequenos grupos. O foco está no diagnóstico, na reabilitação e no tratamento de psicopatologias por meio da psicoterapia. O psicólogo clínico constrói um espaço que favorece o autoconhecimento e a resolução de conflitos internos.</p>

<p>Na <strong>Psicologia Organizacional e do Trabalho</strong>, o foco são as organizações, as equipes, a liderança, a cultura corporativa. Em vez de tratar a psicopatologia isoladamente, esse profissional desenha avaliações de desempenho, estrutura planos de carreira, conduz recrutamento, seleção e treinamento, e atua para tornar a organização mais produtiva, eficiente e justa.</p>

<h2>O mercado de trabalho: retorno financeiro e formação</h2>

<p>As diferenças ficam mais nítidas quando se olha para os números, e eles variam bastante de país para país.</p>

<h3>Brasil</h3>

<p>Tanto a atuação clínica quanto a organizacional exigem graduação de cinco anos em Psicologia e registro no Conselho Regional (CRP). No mercado formal via CLT, os salários iniciais são parecidos, mas a Psicologia Organizacional leva uma leve vantagem: média de R$ 4.017,60, contra R$ 3.766,05 na Clínica.</p>

<p>A progressão muda de figura em polos como Distrito Federal e São Paulo. Ali, psicólogos sêniores, tanto clínicos quanto organizacionais em grandes empresas, chegam a faixas entre R$ 6.231,00 e mais de R$ 13.900,00 mensais. A carreira clínica, porém, demanda mais tempo de maturação: construir uma carteira de pacientes até o teto salarial não é rápido.</p>

<h3>Estados Unidos</h3>

<p>O cenário americano inverte a lógica brasileira. Para alcançar salários altos na área clínica, o profissional precisa de doutorado (PhD ou PsyD), o que soma de cinco a sete anos de estudo além do bacharelado, com licenciamento estadual rígido pelo caminho.</p>

<p>A Psicologia Industrial-Organizacional é a exceção de alto retorno com menos exigência formal: um mestrado costuma bastar para cargos corporativos de peso, sem as licenças clínicas obrigatórias. O resultado é que psicólogos organizacionais têm a maior remuneração mediana da área nos EUA, algo em torno de US$ 134.400 anuais, com tetos que passam de US$ 193.950 e chegam a US$ 247.220.</p>

<h3>Portugal</h3>

<p>O início de carreira na clínica costuma ser duro, com salários-base próximos ao mínimo nacional, entre 720 € e 760 €. Posições voltadas ao ambiente corporativo, como recrutamento ou psicologia ocupacional, pagam bem mais: entre 1.556 € e 3.100 € brutos por mês.</p>

<h2>Onde as duas áreas se encontram: saúde mental corporativa e burnout</h2>

<p>O ponto de encontro contemporâneo entre Clínica e Organizacional é a crise de esgotamento no trabalho e a Síndrome de Burnout. O estresse crônico desregula o funcionamento neurobiológico e produz, desde queixas cognitivas até transtornos de ansiedade e depressão maior. Fatores como conflito entre trabalho e vida pessoal, demandas emocionais altas e a obrigação velada de esconder emoções são preditores fortes desse adoecimento.</p>

<p>Nesse cenário, as duas áreas passam a operar de forma complementar. O psicólogo organizacional atua na prevenção primária: diagnostica disfunções na cultura da empresa, redesenha cargos, melhora a comunicação das lideranças, faz a triagem de colaboradores em sofrimento. O psicólogo clínico assume o tratamento especializado, cuidando do trabalhador já adoecido com intervenções voltadas à reabilitação.</p>

<h2>Por que dominar as duas visões é uma vantagem</h2>

<p>Tratar um paciente na clínica sem entender as dinâmicas de poder e as exigências do ambiente corporativo que o adoecem deixa a intervenção incompleta. Do mesmo jeito, redesenhar processos de RH sem sensibilidade clínica para enxergar o sofrimento silencioso de uma equipe produz planilhas bonitas e pouco eficazes.</p>

<p>O psicólogo mais valorizado nos próximos anos será quem consegue transitar entre os dois mundos: profundidade empática no olhar clínico, somada à visão sistêmica e estratégica do ambiente organizacional. Essa combinação não melhora só o retorno financeiro da carreira. Ela é o que sustenta, na prática, a integridade psíquica de quem trabalha.</p>
`,
  },
];
