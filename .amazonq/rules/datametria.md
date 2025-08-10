# 🤖 Instruções para o Amazon Q: Guia de Desenvolvimento Python

Este documento serve como um guia de referência para o Amazon Q ao desenvolver, refatorar e documentar código Python para o projeto. Ele consolida as melhores práticas definidas no `Python_Dev_Best_Practices_Guide.md`, traduzindo-as em diretrizes acionáveis para garantir a qualidade, manutenibilidade, reuso e eficiência do código.

O objetivo é que o Amazon Q siga estas regras rigorosamente para manter a consistência e a excelência em todo o codebase, promovendo um desenvolvimento ágil e robusto.

---



## 1. Diretrizes para Python com Poetry

Ao trabalhar com projetos Python gerenciados por Poetry, o Amazon Q deve aderir às seguintes diretrizes:

### 1.1. Estrutura de Projeto e Inicialização

*   **Sempre inicie projetos com `poetry new`**: Utilize `poetry new <project-name>` para criar a estrutura inicial do projeto, garantindo a configuração correta do `pyproject.toml` e a padronização.
*   **Mantenha uma estrutura de diretórios clara**: Organize o código em `src/`, testes em `tests/` (subdivididos em `unit/`, `integration/`, `e2e/`), configurações em `config/`, scripts auxiliares em `scripts/`, documentação em `docs/` e recursos em `resources/`.

### 1.2. Gerenciamento de Dependências com `pyproject.toml`

*   **Adicione dependências via `poetry add`**: Sempre utilize `poetry add <package-name>` para adicionar dependências, permitindo que o Poetry gerencie o `pyproject.toml` e o ambiente virtual automaticamente.
*   **Separe dependências de desenvolvimento**: Use `poetry add <package-name> --group dev` para dependências não essenciais em produção (ex: ferramentas de teste, linters).
*   **Inclua `poetry.lock` no controle de versão**: Garanta que `poetry.lock` esteja sempre versionado para assegurar a reprodutibilidade do ambiente.
*   **Mantenha dependências atualizadas**: Realize `poetry update` regularmente para manter as dependências atualizadas dentro dos intervalos definidos.

### 1.3. Ambientes Virtuais

*   **Execute comandos via `poetry run`**: Sempre utilize `poetry run <command>` para executar scripts, testes ou qualquer comando relacionado ao projeto, garantindo a execução dentro do ambiente virtual isolado do Poetry.

### 1.4. Empacotamento e Distribuição (Criação de Packages)

*   **Defina metadados completos em `pyproject.toml`**: Preencha todos os metadados relevantes (nome, versão, descrição, autores, licença) para facilitar a identificação e o uso do pacote.
*   **Crie pacotes Python reutilizáveis**: Identifique funcionalidades que podem ser compartilhadas entre projetos e crie-as como pacotes Python separados, seguindo o versionamento semântico (SemVer).

### 1.5. Qualidade de Código e Ferramentas

*   **Integre linters e formatadores**: Utilize `black` para formatação automática e `flake8` para linting. Certifique-se de que estas ferramentas sejam executadas em pre-commit hooks ou no pipeline de CI/CD.
*   **Use Type Hinting com `mypy`**: Adicione type hints ao código e integre `mypy` para verificações estáticas de tipo, melhorando a legibilidade e a detecção de erros.
*   **Utilize `bandit` para análise de segurança**: Execute `bandit` como parte do pipeline de CI/CD para identificar vulnerabilidades de segurança no código Python.
*   **Escreva Docstrings claras**: Garanta que todos os módulos, classes, funções e métodos possuam docstrings claras e concisas, seguindo padrões estabelecidos (ex: Google Style).

### 1.6. Testes e Cobertura de Testes

*   **Use `pytest` para testes**: Escreva testes unitários e de integração utilizando `pytest`.
*   **Mantenha uma estrutura de testes organizada**: Organize os testes em `tests/` com subdiretórios para `unit/`, `integration/` e `e2e/`.
*   **Garanta cobertura de testes acima de 85%**: Utilize `pytest-cov` para medir a cobertura e configure o pipeline de CI/CD para falhar se a cobertura for inferior a 85%. Priorize testes significativos que cubram a lógica de negócio crítica.

---



## 2. Diretrizes para Automação de UI com Pywinauto

Ao desenvolver automações de UI com Pywinauto, o Amazon Q deve focar na resiliência e na manutenibilidade, seguindo estas diretrizes:

### 2.1. Resiliência da Automação de UI

*   **Identificação Robusta de Elementos**: Priorize a identificação de elementos por `control_id`, `class_name` ou `auto_id`. Evite depender de `index` isoladamente. Combine múltiplos critérios para maior robustez.
*   **Esperas Explícitas (Waits)**: Sempre utilize `wait('ready')`, `wait('visible')`, `wait('enabled')` antes de interagir com elementos da UI para garantir que estejam disponíveis.
*   **Tratamento de Exceções**: Implemente `try-except` para lidar com `ElementNotFoundError` e outras exceções inesperadas, permitindo que a automação se recupere ou registre o erro de forma controlada.
*   **Reconhecimento de Imagem (Último Recurso)**: Use reconhecimento de imagem apenas como último recurso para elementos que não podem ser identificados de forma confiável por atributos.

### 2.2. Mapeamento e Gerenciamento de Elementos da UI

*   **Armazene Locators em Arquivos Separados**: Mantenha todos os locators de elementos da UI em um arquivo ou módulo Python separado (ex: `ui_elements.py`).
*   **Organize Locators por Agrupamento**: Utilize classes ou dicionários para agrupar locators que representam telas ou módulos específicos da aplicação.
*   **Verificações Periódicas da Árvore de Elementos**: Utilize `Inspect.exe` ou ferramentas similares para inspecionar e monitorar a estrutura da UI, identificando mudanças.
*   **Compare Mapas de UI**: Desenvolva ou utilize scripts para comparar mapas de elementos da UI entre versões, detectando proativamente mudanças que possam quebrar a automação.
*   **Centralize Atualizações de Locators**: Todas as atualizações de locators devem ser feitas no arquivo de mapeamento centralizado.
*   **Implemente Mecanismos de Adaptação Dinâmica**: Considere estratégias de fallback, logs detalhados e notificação de quebra para lidar com mudanças inesperadas na UI.

### 2.3. Boas Práticas de Codificação para Pywinauto

*   **Encapsule Interações**: Crie funções ou métodos que encapsulem interações complexas com a UI (ex: `login(username, password)`).
*   **Use Backends Apropriados**: Escolha o backend Pywinauto (`win32` ou `uia`) apropriado para a aplicação que está sendo automatizada.
*   **Limpeza de Ambiente**: Garanta que a automação deixe o ambiente em um estado limpo após a execução.
*   **Capture Telas em Caso de Falha**: Em caso de erro, capture uma screenshot para auxiliar na depuração.

---



## 3. Diretrizes para AWS Lambda em Python

Ao desenvolver funções AWS Lambda em Python, o Amazon Q deve focar em eficiência, segurança e observabilidade:

### 3.1. Estrutura do Código e Empacotamento

*   **Separe a Lógica de Negócio do Handler**: O handler da Lambda deve ser leve, delegando a lógica de negócio para outros módulos ou funções para facilitar o teste unitário.
*   **Minimize o Tamanho do Pacote de Deploy**: Inclua apenas as dependências necessárias. Utilize Poetry para gerenciamento de dependências e Lambda Layers para bibliotecas comuns ou grandes.
*   **Use Variáveis de Ambiente para Configuração**: Mantenha configurações fora do código, utilizando variáveis de ambiente para valores que mudam entre ambientes ou são sensíveis.

### 3.2. Performance e Otimização de Custos

*   **Escolha a Memória Correta**: Utilize ferramentas como AWS Lambda Power Tuning para identificar a configuração ideal de memória.
*   **Reutilize o Ambiente de Execução (Cold Starts)**: Inicialize conexões de banco de dados, clientes AWS SDK e outras dependências fora do handler para reutilização em invocações subsequentes.
*   **Considere Provisioned Concurrency**: Para funções críticas que exigem latência mínima, configure a Concorrência Provisionada.
*   **Defina Timeout Apropriado**: Configure um timeout razoável para a função, evitando custos desnecessários ou falhas.

### 3.3. Segurança

*   **Princípio do Menor Privilégio**: Conceda à role IAM da função Lambda apenas as permissões mínimas necessárias.
*   **Gerenciamento de Segredos**: Nunca armazene credenciais no código. Utilize AWS Secrets Manager ou AWS Systems Manager Parameter Store.
*   **Validação de Entradas**: Valide e sanitize todas as entradas recebidas pela função Lambda para prevenir ataques.
*   **Configuração de VPC**: Se a função precisar acessar recursos em uma VPC, configure-a para ser executada dentro da VPC.

### 3.4. Logging e Monitoramento

*   **Logs Estruturados**: Utilize logs estruturados (JSON) para facilitar a análise no CloudWatch Logs Insights.
*   **Métricas e Alarmes no CloudWatch**: Monitore métricas chave como `Invocations`, `Errors`, `Duration` e configure alarmes.
*   **AWS X-Ray para Tracing**: Utilize AWS X-Ray para tracing distribuído em arquiteturas complexas.
*   **Dead-Letter Queues (DLQ)**: Configure uma DLQ para capturar eventos que falharam após todas as tentativas de reprocessamento.

### 3.5. Testes

*   **Testes Unitários**: Teste a lógica de negócio isoladamente.
*   **Testes de Integração**: Teste a interação da função Lambda com outros serviços AWS.
*   **Testes de Ponta a Ponta**: Simule o fluxo completo da aplicação para validar o comportamento geral.

---



## 4. Diretrizes para Reuso de Código e Granularidade

O Amazon Q deve promover o reuso de código e a granularidade para construir soluções escaláveis e manuteníveis:

### 4.1. Princípios de Reuso de Código

*   **Modularização**: Divida o código em módulos pequenos, independentes e coesos, com interfaces claras. Encapsule lógicas específicas em funções e classes.
*   **Pacotes Python**: Agrupe módulos relacionados em pacotes Python bem definidos. Crie pacotes Python reutilizáveis para funcionalidades compartilhadas entre projetos.
*   **Bibliotecas Compartilhadas**: Para funcionalidades comuns a múltiplos projetos, crie bibliotecas Python separadas e versionadas (ex: clientes de API, utilitários de dados, componentes de UI genéricos, integrações AWS).
*   **Padrões de Design**: Aplique padrões de design de software para criar soluções flexíveis e extensíveis.

### 4.2. Granularidade: O Nível Certo de Detalhe

*   **Funções e Métodos Pequenos e Focados**: Cada função ou método deve ter uma única responsabilidade (SRP). Funções pequenas são mais fáceis de entender, testar e reutilizar.
*   **Classes Coesas**: Classes devem representar uma única entidade ou conceito e agrupar dados e comportamentos relacionados.
*   **Módulos e Pacotes Bem Definidos**: Cada módulo ou pacote deve ter um propósito claro e bem definido.
*   **Granularidade em Automação de UI (Pywinauto)**: Crie funções para interações atômicas e para fluxos de UI específicos. Mantenha o mapeamento de UI granular e separado do código de automação.
*   **Granularidade em AWS Lambda**: Funções Lambda devem ser o mais granular possível, seguindo o princípio de "uma função, uma responsabilidade". Utilize AWS Step Functions para orquestrar funções Lambda granulares em fluxos de trabalho complexos.

### 4.3. Criação de Packages Reutilizáveis

*   **Identifique Candidatos a Pacotes**: Procure por funcionalidades repetidas ou genéricas que possam ser empacotadas.
*   **Estrutura do Pacote**: Siga a estrutura padrão de pacotes Python.
*   **Versionamento Semântico**: Use SemVer para gerenciar as versões do pacote.
*   **Documentação e Exemplos**: Inclua um `README.md` claro, docstrings e exemplos de uso.
*   **Publicação (Opcional)**: Considere publicar pacotes reutilizáveis em um PyPI privado ou repositório interno.

---



## 5. Diretrizes para Qualidade de Código e Cobertura de Testes

O Amazon Q deve garantir a excelência na qualidade do código e na cobertura de testes:

### 5.1. Qualidade de Código

*   **Conformidade com PEP 8**: Siga rigorosamente o PEP 8. Utilize `black` para formatação automática e `flake8` para linting.
*   **Type Hinting com `mypy`**: Adicione type hints ao código e utilize `mypy` para verificações estáticas de tipo.
*   **Docstrings e Comentários Claros**: Escreva docstrings claras e concisas para todos os elementos do código. Use comentários para explicar lógicas complexas, não para parafrasear o código.
*   **Princípios SOLID**: Aplique os princípios SOLID para projetar classes e módulos coesos e flexíveis.
*   **Tratamento de Erros e Exceções**: Implemente um tratamento de erros robusto, utilizando exceções e fornecendo mensagens claras.
*   **Logging Eficaz**: Utilize o módulo `logging` com logs estruturados (JSON) para registrar eventos importantes.
*   **Revisão de Código**: O código deve estar pronto para revisão por pares, seguindo os padrões de qualidade definidos.

### 5.2. Cobertura de Testes (Acima de 85%)

*   **Pirâmide de Testes**: Siga a pirâmide de testes: priorize testes unitários, seguidos por testes de integração e, por fim, testes de ponta a ponta.
*   **Ferramentas para Cobertura de Testes**: Utilize `pytest` para escrever testes e `pytest-cov` para medir a cobertura. A meta é de 85% de cobertura, e o pipeline de CI/CD deve falhar se este limite não for atingido.
*   **Estratégias para Atingir Alta Cobertura**: Foque em testes significativos, utilize injeção de dependência e mocking para isolar unidades, teste cenários de erro e refatore o código para testabilidade.
*   **Integração Contínua (CI)**: Garanta que a execução de testes e a verificação de cobertura sejam parte integrante do pipeline de CI/CD.

---



## 6. Diretrizes para Desacoplamento e Coesão

O Amazon Q deve aplicar os princípios de desacoplamento e coesão para construir software robusto, manutenível e flexível:

### 6.1. Desacoplamento (Low Coupling)

*   **Injeção de Dependência (DI)**: Utilize DI para fornecer dependências a módulos e classes, em vez de criá-las internamente. Isso facilita a substituição de implementações e o teste isolado.
*   **Interfaces e Abstrações**: Projete módulos para depender de abstrações (ABCs em Python) em vez de implementações concretas.
*   **Event-Driven Architecture (EDA)**: Em arquiteturas distribuídas (ex: AWS Lambda), utilize eventos para comunicação assíncrona entre serviços, desacoplando produtores e consumidores.
*   **Mensagens Assíncronas**: Para operações que não exigem resposta imediata, utilize filas de mensagens (ex: SQS) para desacoplar produtor e consumidor.
*   **Configuração Externa**: Mantenha configurações (URLs, credenciais) fora do código, utilizando variáveis de ambiente ou serviços como AWS Systems Manager Parameter Store/Secrets Manager.
*   **Princípio da Responsabilidade Única (SRP)**: Cada módulo ou classe deve ter apenas uma razão para mudar, o que naturalmente leva a um menor acoplamento.

### 6.2. Coesão (High Cohesion)

*   **Princípio da Responsabilidade Única (SRP)**: Cada classe ou módulo deve ter apenas uma responsabilidade bem definida, sendo o pilar da alta coesão.
*   **Encapsulamento**: Agrupe dados e métodos que operam sobre esses dados dentro de uma única unidade (classe), expondo apenas uma interface bem definida.
*   **Módulos Focados**: Crie módulos Python com um propósito específico, contendo apenas funções e classes relacionadas a esse propósito.
*   **Funções Pequenas e Focadas**: Funções devem fazer uma única coisa bem feita. Se uma função realiza múltiplas tarefas, considere dividi-la.
*   **Refatoração Contínua**: Refatore regularmente o código para melhorar a estrutura e a organização, mantendo a alta coesão.

### 6.3. Desacoplamento e Coesão em Automações de UI (Pywinauto)

*   **Desacoplamento**: Utilize o mapeamento de elementos da UI em arquivos separados para desacoplar a lógica de automação dos detalhes da UI. Use injeção de dependência para o "driver" da aplicação.
*   **Coesão**: Crie classes ou módulos que representem telas ou componentes específicos da UI, agrupando interações e elementos relacionados.

### 6.4. Desacoplamento e Coesão em AWS Lambda

*   **Desacoplamento**: Utilize Event-Driven Architecture (SNS, SQS) para desacoplar funções Lambda, permitindo que evoluam e escalem independentemente.
*   **Coesão**: Mantenha as funções Lambda com alta coesão, aderindo ao princípio de "uma função, uma responsabilidade". Orquestre funções Lambda coesas usando AWS Step Functions para fluxos de trabalho complexos.

---



## Conclusão

Ao seguir estas diretrizes, o Amazon Q contribuirá significativamente para a criação de um codebase Python de alta qualidade, manutenível, escalável e eficiente. A adesão a estas regras é fundamental para o sucesso do projeto e para a promoção de um ambiente de desenvolvimento colaborativo e produtivo.

Este documento será atualizado periodicamente para refletir novas melhores práticas e tecnologias. O Amazon Q deve sempre consultar a versão mais recente deste guia antes de iniciar novas tarefas de desenvolvimento.




---

## 7. Diretrizes para Orquestração na AWS com AWS CDK

Ao desenvolver soluções que envolvem orquestração de serviços AWS, o Amazon Q deve utilizar o AWS CDK e seguir estas diretrizes:

### 7.1. AWS CDK para Infraestrutura como Código

*   **Defina a infraestrutura em Stacks e Constructs**: Utilize Stacks para unidades de deploy e Constructs para abstrações de alto nível de recursos AWS. Priorize o uso de Constructs existentes e crie Constructs customizados para padrões de arquitetura reutilizáveis.
*   **Use Python para definir a infraestrutura**: Aproveite a familiaridade com Python para definir a infraestrutura, aplicando princípios de desenvolvimento de software (reuso, modularidade, testes) à IaC.

### 7.2. Orquestração com Serviços AWS

*   **Amazon EventBridge (Eventos)**:
    *   **Defina regras de eventos**: Configure regras no EventBridge para rotear eventos de fontes personalizadas ou de serviços AWS para destinos apropriados (Lambda, SQS, SNS, Step Functions).
    *   **Utilize esquemas de eventos**: Sempre que possível, use o Schema Registry do EventBridge para garantir a consistência dos dados de eventos e gerar código para manipulá-los.

*   **AWS Step Functions (Fluxos de Trabalho)**:
    *   **Defina fluxos de trabalho como máquinas de estado**: Utilize Step Functions para orquestrar funções Lambda e outros serviços AWS em sequências lógicas, especialmente para processos de negócios complexos e de longa duração.
    *   **Implemente tratamento de erros e retries**: Configure mecanismos robustos de tratamento de erros, retries e compensação nas máquinas de estado para garantir a resiliência dos fluxos de trabalho.

*   **Amazon SQS (Filas de Mensagens)**:
    *   **Utilize SQS para desacoplamento**: Empregue filas SQS para desacoplar microsserviços e aplicações serverless, permitindo que produtores e consumidores operem de forma assíncrona.
    *   **Configure Dead-Letter Queues (DLQ)**: Sempre associe uma DLQ a cada fila SQS para capturar mensagens que não puderam ser processadas, evitando a perda de dados e facilitando a depuração.

*   **Amazon SNS (Publicação/Assinatura)**:
    *   **Crie tópicos SNS para notificações**: Utilize tópicos SNS para publicar mensagens e permitir que múltiplos serviços ou aplicações se inscrevam para recebê-las, promovendo um modelo de comunicação de publicação/assinatura.

---




---

## 8. Diretrizes para Esteira de CI/CD e DevSecFinOps

O Amazon Q deve integrar as práticas de CI/CD, DevSecOps e FinOps em todo o ciclo de vida do desenvolvimento, garantindo automações rápidas, seguras e eficientes em termos de custo:

### 8.1. Integração Contínua (CI)

*   **Versionamento de Código (Git)**: Sempre utilize Git para controle de versão. Entenda e siga as estratégias de branching adotadas (GitFlow, Trunk-Based Development).
*   **Automação de Build**: Garanta que o código seja construído automaticamente, incluindo instalação de dependências (Poetry), linting, formatação e verificação de tipos.
*   **Testes Automatizados**: Execute todos os testes (unitários, integração, e2e) automaticamente no pipeline de CI. A falha em qualquer teste deve impedir a integração do código.
*   **Verificação de Cobertura de Testes**: Enforce a meta de cobertura de testes (ex: 85%) no pipeline de CI, utilizando ferramentas como `pytest-cov` e integrando com serviços de relatório de cobertura.

### 8.2. Entrega Contínua (CD)

*   **Deploy Automatizado**: Automatize o processo de implantação para ambientes de staging e produção, utilizando AWS CDK para gerenciar a infraestrutura e as funções Lambda.
*   **Estratégias de Deploy**: Ao implementar, considere e aplique estratégias de deploy que minimizem o risco (Blue/Green, Canary Releases).
*   **Rollback Automatizado**: Esteja preparado para implementar e acionar rollbacks automatizados em caso de falha na implantação ou problemas pós-deploy.

### 8.3. DevSecOps: Segurança Integrada

*   **Security by Design**: Ao escrever código, sempre priorize a segurança. Siga o Princípio do Menor Privilégio para permissões IAM, valide e sanitize entradas, e utilize gerenciamento de segredos (AWS Secrets Manager).
*   **Análise Estática de Código (SAST)**: Integre e utilize ferramentas SAST como `Bandit` no pipeline de CI para identificar vulnerabilidades no código-fonte.
*   **Análise de Dependências (SCA)**: Verifique e utilize ferramentas SCA para identificar vulnerabilidades em bibliotecas de terceiros.
*   **Monitoramento de Segurança**: Esteja ciente da importância do monitoramento de logs e métricas de segurança em tempo real para detectar e responder a ameaças.

### 8.4. FinOps: Otimização de Custos na Nuvem

*   **Visibilidade de Custos**: Entenda a importância de utilizar ferramentas AWS para obter visibilidade granular dos custos.
*   **Otimização de Recursos Lambda**: Ao desenvolver funções Lambda, otimize a memória e o timeout. Use Concorrência Provisionada apenas quando estritamente necessário.
*   **Gerenciamento de Filas e Tópicos**: Monitore e otimize o uso de SQS e SNS, removendo recursos não utilizados e configurando `RetentionPeriod` apropriadamente.
*   **Tagging de Recursos**: Aplique uma estratégia de tagging consistente para todos os recursos AWS para facilitar a alocação de custos.
*   **Monitoramento de Custos no CI/CD**: Esteja ciente da integração de verificações de custo no pipeline de CI/CD para estimar e monitorar custos de infraestrutura.

---




---

## 7. Diretrizes para Orquestração na AWS com AWS CDK

Ao desenvolver soluções que envolvem orquestração de serviços AWS, o Amazon Q deve utilizar o AWS CDK e seguir estas diretrizes:

### 7.1. AWS CDK para Infraestrutura como Código

*   **Defina a infraestrutura em Stacks e Constructs**: Utilize Stacks para unidades de deploy e Constructs para abstrações de alto nível de recursos AWS. Priorize o uso de Constructs existentes e crie Constructs customizados para padrões de arquitetura reutilizáveis.
*   **Use Python para definir a infraestrutura**: Aproveite a familiaridade com Python para definir a infraestrutura, aplicando princípios de desenvolvimento de software (reuso, modularidade, testes) à IaC.

### 7.2. Orquestração com Serviços AWS

*   **Amazon EventBridge (Eventos)**:
    *   **Defina regras de eventos**: Configure regras no EventBridge para rotear eventos de fontes personalizadas ou de serviços AWS para destinos apropriados (Lambda, SQS, SNS, Step Functions).
    *   **Utilize esquemas de eventos**: Sempre que possível, use o Schema Registry do EventBridge para garantir a consistência dos dados de eventos e gerar código para manipulá-los.

*   **AWS Step Functions (Fluxos de Trabalho)**:
    *   **Defina fluxos de trabalho como máquinas de estado**: Utilize Step Functions para orquestrar funções Lambda e outros serviços AWS em sequências lógicas, especialmente para processos de negócios complexos e de longa duração.
    *   **Implemente tratamento de erros e retries**: Configure mecanismos robustos de tratamento de erros, retries e compensação nas máquinas de estado para garantir a resiliência dos fluxos de trabalho.

*   **Amazon SQS (Filas de Mensagens)**:
    *   **Utilize SQS para desacoplamento**: Empregue filas SQS para desacoplar microsserviços e aplicações serverless, permitindo que produtores e consumidores operem de forma assíncrona.
    *   **Configure Dead-Letter Queues (DLQ)**: Sempre associe uma DLQ a cada fila SQS para capturar mensagens que não puderam ser processadas, evitando a perda de dados e facilitando a depuração.

*   **Amazon SNS (Publicação/Assinatura)**:
    *   **Crie tópicos SNS para notificações**: Utilize tópicos SNS para publicar mensagens e permitir que múltiplos serviços ou aplicações se inscrevam para recebê-las, promovendo um modelo de comunicação de publicação/assinatura.

---


