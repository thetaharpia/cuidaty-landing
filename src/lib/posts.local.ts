import type { BlogPostFull } from './blog.server';

/**
 * Posts escritos direto no código, sem passar pela API do blog.
 * Cada post precisa do mesmo shape que a API retorna, com o corpo
 * já em HTML (`content_html`).
 */
export const localPosts: BlogPostFull[] = [
  {
    id: -2,
    title: 'RS em Alerta: A Ecoansiedade Que Pede um Psicólogo',
    subtitle: 'Entenda o papel do psicólogo nas mudanças climáticas no Brasil',
    slug: 'ecoansiedade-medo-clima-saude-mental',
    excerpt:
      'A cada novo prognóstico hidrológico da Defesa Civil do RS, o coração de quem já viveu uma enchente dispara antes da chuva cair. Entenda por que a ecoansiedade é uma resposta legítima do corpo, e não um transtorno a ser calado.',
    cover_image_url: '/blog/ecoansiedade-rs.png',
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
      og_image_url: null,
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
    cover_image_url: '/blog/clinico_x_organizacional.png',
    published_at: '2026-07-20T00:00:00.000Z',
    author: { name: 'Equipe Cuidaty' },
    tags: [
      { name: 'Carreira', slug: 'carreira' },
      { name: 'Psicologia Organizacional', slug: 'psicologia-organizacional' },
      { name: 'Saúde Mental', slug: 'saude-mental' },
    ],
    seo: {
      meta_title: null,
      meta_description:
        'Psicologia Organizacional vs. Clínica: diferenças de atuação, salários no Brasil, EUA e Portugal, e por que as duas áreas se tornaram complementares no combate ao burnout.',
      og_image_url: null,
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
