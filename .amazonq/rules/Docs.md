# Regra de Documentação para Amazon Q

Objetivo
Esta regra visa garantir que a documentação do projeto seja mantida atualizada sempre que o Amazon Q fizer alterações no código.

Docstrings e Comentários Claros: Escreva docstrings para todos os módulos, classes, funções e métodos, explicando seu
propósito, argumentos, retornos e exceções. Comentários devem ser usados para explicar a lógica complexa ou decisões de
design não óbvias, não para parafrasear o código.

Requisitos

1. Comentários no Código
Adicionar comentários explicativos claros e concisos no próprio código
Documentar o propósito de funções, classes e métodos
Explicar lógicas complexas ou não óbvias
Incluir informações sobre parâmetros e valores de retorno
Documentar quaisquer dependências ou requisitos especiais

2. Atualização de Arquivos de Documentação
Sempre que forem feitas alterações significativas no código, os seguintes arquivos na raiz do projeto devem ser atualizados:

README.md
é o ponto de entrada para qualquer novo desenvolvedor ou usuário do projeto.
O Amazon Q deve garantir que este arquivo esteja sempre atualizado e reflita o estado atual do projeto.

* **Responsabilidade do Amazon Q**: Ao detectar alterações significativas no código que impactam a forma como o projeto é configurado, executado, ou que introduzem novas funcionalidades/dependências, o Amazon Q deve:
  * **Propor Atualizações**: Gerar propostas de texto para as seções relevantes do `README.md`, como:
    * **Visão Geral do Projeto**: Se o escopo ou propósito principal do projeto mudar.
    * **Funcionalidades Principais**: Adicionar novas funcionalidades implementadas ou remover funcionalidades obsoletas.
    * **Instalação e Configuração**: Atualizar instruções de instalação, dependências (Poetry), variáveis de ambiente ou qualquer pré-requisito alterado.
    * **Como Usar**: Adicionar ou modificar exemplos de uso para refletir novas APIs ou fluxos de trabalho.
    * **Estrutura do Projeto**: Se a estrutura de diretórios principal for alterada.
  * **Consistência**: Assegurar que as informações propostas sejam consistentes com o código e outras documentações.
  * **Formato**: Manter o formato Markdown e a clareza.

STATUS_ATUAL.md
Documentar o estado atual do projeto
Listar funcionalidades implementadas e pendentes
Registrar problemas conhecidos
Atualizar informações sobre o ambiente de execução

CHANGELOG.md
é um registro cronológico de todas as mudanças notáveis em um projeto.
O Amazon Q deve auxiliar na manutenção deste histórico, seguindo o formato [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Após cada alteração de código que se qualifique como uma mudança significativa (nova funcionalidade, melhoria, correção de bug importante, alteração que quebra a compatibilidade), o Amazon Q deve:
    ***Gerar Entrada Proposta**: Criar uma nova entrada na seção `Unreleased` (ou na versão apropriada, se o projeto usar um fluxo de release diferente) do `CHANGELOG.md`.
    *   **Categorização**: Classificar a mudança sob as categorias apropriadas (`Added`, `Changed`, `Deprecate`, `Removed`, `Fixed`, `Security`).
    *   **Descrição Concisa**: Fornecer uma descrição clara e concisa da mudança, focando no impacto para o usuário ou desenvolvedor. Incluir referências a issues ou pull requests relevantes, se disponíveis.

Implementação
Ao fazer alterações no código, o Amazon Q deve:
Primeiro, adicionar comentários apropriados no código modificado
Em seguida, identificar quais arquivos de documentação precisam ser atualizados
Atualizar os arquivos de documentação relevantes com informações precisas e concisas
Garantir que as alterações na documentação sejam consistentes com as alterações no código

Observações
A documentação deve ser clara, concisa e útil para outros desenvolvedores
Evitar documentação excessiva ou redundante
Manter um estilo consistente em toda a documentação
Priorizar a qualidade e precisão das informações sobre a quantidade
