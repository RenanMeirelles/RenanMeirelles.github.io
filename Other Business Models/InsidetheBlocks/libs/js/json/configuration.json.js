Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"InsideProcess","publishDate":"11/03/2021 11:42:37","pages":[{"id":"c0f71412-422b-4987-bcac-1fa33eb72c11","name":"Macro Processo - Inside","mainProcessId":"9b9dc8e4-3a7c-4a08-af24-bb9c89734066","version":"1.0","author":"nanme","image":"files\\diagrams\\Macro_Processo___Inside.png","isSubprocessPage":false,"elements":[{"id":"9b9dc8e4-3a7c-4a08-af24-bb9c89734066","name":"Main Process","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":45.0,"y":47.0}],"radius":0.0,"height":350.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"93e334b9-3c9a-4532-bca2-955f606ea358","name":"Anexos, Documentos, Planilhas etc","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":636.0,"y":739.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"State","type":"text"}]},{"id":"a5b99455-c2ce-4bf9-aa3f-b111f6a3ec96","name":"Decisão Exclusiva (Segue apenas 1 fluxo)","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":444.0,"y":681.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[]},{"id":"de88a283-805d-48c3-a6f8-9307a98cbeaa","name":"Paralelismo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":444.0,"y":621.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"f0c86021-f098-4680-916d-3e3c404f982d","name":"Eventos de Fim","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":50.0,"y":683.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"f294c8ed-cfd5-4938-96b3-cb3eb56f5125","name":"Eventos de Início (Normal, Temporal, Condicional)","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":50.0,"y":624.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"5103c066-2927-4675-b83e-908c751db6ae","name":"Atividade Automática","elementImage":"files\\bpmnElements\\ServiceTask.png","imageBounds":{"points":[{"x":219.0,"y":679.0}],"radius":0.0,"height":46.0,"width":71.0,"shape":"rect"},"elementType":"ServiceTask","properties":[{"name":"Implementation","value":"WebService","type":"text"}]},{"id":"a52b6eac-1a8f-4f61-a167-c53c4906f023","name":"Eventos Intermediários (Mensagens,  Tempo, etc)","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":50.0,"y":741.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"87406d9f-caff-42e2-9ed7-8f811284708d","name":"Atividade Terceiros","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":330.0,"y":679.0}],"radius":0.0,"height":46.0,"width":71.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"146be2e9-2aab-4b1f-9b04-eb7ebda8e0e9","name":"Atividade Cliente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":330.0,"y":618.0}],"radius":0.0,"height":46.0,"width":71.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ff1ade1a-f096-42cf-bb8d-41a8854bb8ad","name":"Decisão com base em Eventos","elementImage":"files\\bpmnElements\\EventBasedGateway.png","imageBounds":{"points":[{"x":637.0,"y":681.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"EventBasedGateway","properties":[{"name":"Instantiate","value":"False","type":"text"}],"pageElements":[]},{"id":"cdc960b7-c4f2-4015-971b-fe811077b63d","name":"    Atividade Manual","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":219.0,"y":618.0}],"radius":0.0,"height":46.0,"width":71.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"af1d95f1-f637-44c4-b056-05d8409f3416","name":"Subprocesso","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":219.0,"y":740.0}],"radius":0.0,"height":43.0,"width":71.0,"shape":"rect"},"elementType":"CallActivity","properties":[]},{"id":"1b580f70-07af-44ef-884e-5201209e7026","name":"Decisão Inclusiva (Pode seguir 1 ou + Fluxos)","elementImage":"files\\bpmnElements\\InclusiveGateway.png","imageBounds":{"points":[{"x":637.0,"y":621.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"InclusiveGateway","properties":[],"pageElements":[]},{"id":"8ca87521-6d25-4bbe-a827-989de0b31dd7","name":"Gerenciamento de Clientes e Projetos","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":979.0,"y":236.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SubProcess","properties":[]},{"id":"cd953e39-9539-453c-b496-46aaa5f0c7f8","name":"Controle Financeiro","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":979.0,"y":352.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SubProcess","properties":[]},{"id":"50ac112c-5190-4b46-a92c-a3382ae4a01a","name":"Controle Fiscal","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":979.0,"y":458.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SubProcess","properties":[]},{"id":"c6aabba4-4921-471a-be31-83e80229aa48","name":"","elementImage":"files\\bpmnElements\\c6aabba4-4921-471a-be31-83e80229aa48.png","imageBounds":{"points":[{"x":27.0,"y":20.0}],"radius":0.0,"height":130.0,"width":130.0,"shape":"rect"},"elementType":"ImageArtifact"}]},{"id":"9b0e8914-9722-4450-930b-773dd530bf2b","name":"Macro Processo Inside","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":25.0,"y":162.0}],"radius":0.0,"height":415.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"321e60cb-7cc3-4f4b-9bc2-c8cb4219a787","name":"Início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":175.0,"y":349.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"1e3269ed-a809-439b-af7d-c9961fce27a2","name":"Fim","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":729.0,"y":349.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"adc16388-a429-47e6-bba0-27a7869c32b1","name":"Parametrização","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Caso seu processo seja para implementação de sistemas, aqui teremos diversas atividades (ou subprocessos) que demonstram os Cadastros Básicos, domínios, legados, e todas parametrizações necessárias para \"configurar\" a operação do Core Business do seu sistema/aplicativo.</span></p>","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":100.0,"y":175.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SubProcess","properties":[]},{"id":"6aaab3d5-a3a3-4632-b5ad-2809a484dab2","name":"Mensurar Processos","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Esse processo é muito importante! Ele está representado ao final do modelo pois todos os outputs consumidos do Core Business alimentarão esse aqui - monitoramento de KPIs, OKRs, dashboards, relatórios e todos tipos de indicadores possíveis serão mapeados aqui. </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">OBS: Pode haver monitoramento de KPIs mesmo sem sistemas, apesar de ser mais difícil.</span></p>","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":803.0,"y":473.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SubProcess","properties":[]},{"id":"f927b402-4b58-4ce0-b3f1-25d7756952bb","name":"Gerenciamento de Processos","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">No caso da Inside, o Gerenciamento de Processos é a primeira etapa do Core Business. No caso do cliente, será feito um levantamento para identificar os processos Core e de Suporte, que serão modelados aqui nessa visão Macro.</span></p>","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":264.0,"y":334.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"name":"Process","value":"Gerenciamento de Processos - Gerenciamento de Processos","type":"url","pageRef":"d23c386e-bc6f-4bb8-80e6-cd899b32c2f7","processPageRef":"abf97c2c-ab91-4796-83e2-9466eb2ea5fd"}]},{"id":"f993c2e0-2efd-4260-9d2d-0dd7b3aac3f2","name":"Ideação de Produtos","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Ideação de Produtos seria o processo seguinte aos Processos - ou não dependendo do que o Cliente contratou. Portanto, esse fluxo pode sim ter desvios!</span></p>","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":418.0,"y":334.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[]},{"id":"b82bb679-f801-488e-8540-0893bf56ffa0","name":"Orientações em Tecnologia","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Por fim, ao ter o Processo modelado e mais as documentações de Sistemas/Produtos, é possível identificar a melhor solução possível para desenvolvimento - Lembrando que na Inside apenas mostramos o caminho, e não desenvolvemos.</span></p>","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":572.0,"y":334.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[]}]}]},{"id":"d23c386e-bc6f-4bb8-80e6-cd899b32c2f7","name":"Gerenciamento de Processos","version":"1.0","author":"nanme","image":"files\\diagrams\\Gerenciamento_de_Processos.png","isSubprocessPage":false,"elements":[{"id":"abf97c2c-ab91-4796-83e2-9466eb2ea5fd","name":"Gerenciamento de Processos","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":214.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"97a1c79d-cba7-407f-bd13-29a980520acf","name":"Contato Potencial Cliente","elementImage":"files\\bpmnElements\\MessageStart.png","imageBounds":{"points":[{"x":134.0,"y":106.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageStart"},{"id":"882ee7de-0eb3-4aea-8943-8007136534b7","name":"Projeto Iniciado","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":531.0,"y":106.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"6e6f7ae3-2928-4499-bddd-9d48c3caba3d","name":"Levantar, Modelar e Validar Processos As Is","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":760.0,"y":91.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SubProcess","properties":[]},{"id":"6803ab5d-460e-45c3-86a2-e2686b29a3e1","name":"Qual decisão?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":432.0,"y":101.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Go","elementType":"SequenceFlow","properties":[]},{"name":"No Go","elementType":"SequenceFlow","properties":[]}]},{"id":"4cb95da7-b7e9-41d8-98c1-7618e3214b96","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":437.0,"y":27.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"91d24f25-e70d-48c7-9ad7-30ead33961b9","name":"Analisar Processos e gerar Melhorias","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":940.0,"y":91.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SubProcess","properties":[]},{"id":"821134f7-35ca-46b8-88da-eec1d56adc11","name":"Levantar As Is?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":649.5,"y":101.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"3475dd4a-1e08-4a17-ac7c-ebb3a9d200a3","name":"Levantar, Modelar e Validar Processos To Be","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":1115.75,"y":91.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SubProcess","properties":[]},{"id":"e3289f92-d11a-4b24-8453-c28ef837fec2","name":"Etapa Processos Encerrada","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1278.25,"y":106.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"9a159dba-e0a1-41b2-815c-245ea0f1a5ae","name":"Efetuar Negociação Inicial","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Esse processo representa a negociação inicial entre potencial Cliente e Inside.</span></p>","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":231.0,"y":91.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"name":"Process","value":"Efetuar Negociação Inicial - Efetuar Negociação Inicial","type":"url","pageRef":"2f72dc15-b76f-4adf-97b7-40f20d7a6bb5","processPageRef":"effd8300-451c-44e9-bddb-52733a6e854e"}]},{"id":"52213657-54c6-4a73-9f2a-a12e0e63fc68","name":"Inside","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":214.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]},{"id":"2f72dc15-b76f-4adf-97b7-40f20d7a6bb5","name":"Efetuar Negociação Inicial","version":"1.0","author":"nanme","image":"files\\diagrams\\Efetuar_Negociacao_Inicial.png","isSubprocessPage":false,"elements":[{"id":"effd8300-451c-44e9-bddb-52733a6e854e","name":"Efetuar Negociação Inicial","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":497.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"e004109f-0475-4bc1-9caf-44d5c8729e76","name":"Início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":114.0,"y":100.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"36afd091-c8ea-47db-b627-9deb40a39bb8","name":"Analisar Contato Inicial","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Email é recebido pela Inside, que deverá ler as informações. Se Cliente já tiver solicitado um agendamento, é negociada uma data.</span></p>","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":185.0,"y":301.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"57b7ec30-b804-47c6-aa21-68b94d37a5ab","name":"Cliente Propos Agendamento?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":360.0,"y":311.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"742115c7-9f10-447d-9d92-c5ef73031b9a","name":"Entrar em Contato (Site)","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Através do Site da Inside cliente entra em contato com a Inside passando algumas informações que motivaram o contato.</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Obviamente a negociação pode ter outras entradas, como Redes Sociais - no caso aqui tratamos apenas o Site.</span></p>","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":185.0,"y":85.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","properties":[{"name":"Implementation","value":"WebService","type":"text"}]},{"id":"3ecb4727-ae9f-47ae-925e-fe0129bf369d","name":"Confirmar Agendamento por Email","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Inside verifica a agenda e confirma por email.</span></p>","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":597.0,"y":301.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","properties":[{"name":"Implementation","value":"WebService","type":"text"}]},{"id":"98388f50-42bd-445b-906c-9858c55b828c","name":"Responder Contato Inicial","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Caso não tenha solicitado um agendamento, Inside responde o email pedindo mais informações ou conversando conforme necessário para melhor atender o cliente.</span></p>","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":335.0,"y":200.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","properties":[{"name":"Implementation","value":"WebService","type":"text"}]},{"id":"e6a4648d-a0f6-47ea-a172-8781774de351","name":"Verificar Resposta","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Cliente verifica a resposta e analisa se quer agendar uma reunião.</span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":335.0,"y":87.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"18efbf04-6406-4699-8fb5-15850f16f861","name":"Dar Andamento?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":500.0,"y":97.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"077d6a77-190b-4129-ad92-ba273f5bd3ee","name":"Sugerir Agendamento","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Se desejar continuar, pode sugerir um agendamento.</span></p>","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":597.0,"y":87.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","properties":[{"name":"Implementation","value":"WebService","type":"text"}]},{"id":"9d374d7f-fb01-48f3-ba24-e690e88dc308","name":"Negociação Encerrada","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":907.0,"y":34.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"a830982f-6ed3-4c5c-b63f-02b28ab229bb","name":"Hora da Reunião","elementImage":"files\\bpmnElements\\TimerIntermediate.png","imageBounds":{"points":[{"x":767.0,"y":316.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerIntermediate"},{"id":"cbcb3676-9b14-4f1f-8df0-85cc5f5c59dd","name":"Efetuar Reunião Inicial","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Reunião inicial acontece, já com algumas informações levantadas pela Inside - cilente decide se quer dar andamento ao processo.</span></p>","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":737.0,"y":422.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"3069aea1-27e8-48c2-9fdc-a9389c801f40","name":"Cliente quer Continuar?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":902.0,"y":432.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"6e918ef7-3975-45f1-8793-45f19957462c","name":"Negociação OK - Iniciar Levantamentos","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1010.0,"y":437.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"c48f5027-5a91-474c-939c-b22b9320b225","name":"Potencial Cliente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":157.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c12209a6-3cc8-49a5-9aec-9d65e9966ad3","name":"Inside","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":177.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"d6559eb1-004e-4835-8337-23754a6bfb4a","name":"Cliente + Inside","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":377.0}],"radius":0.0,"height":140.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Table of Contents","pageNumber":"Page","pageNumberLabelOf":"of","version":"Version","author":"Author","description":"Description","mainPool":"Main Process","mainPoolDescription":"Main Process Description","processDiagrams":"Process Diagrams","processElements":"Process Elements","elements":"Process Elements","defaultElementName":"Element","performers":"Performers","connectors":"Connectors","connector":"Connector","home":"Home","search":"Search","goToParentProcess":"<< Go to Parent Process","visitBizagi":"Visit bizagi.com","contains":"Contains {0} Sub-Processes","showAll":"Show all","fullScreen":"Full screen","zoomIn":"Zoom In","zoomOut":"Zoom Out","close":"Close","menu":"Menu: ","errorPage":"Error when visualizing page","process":"Process","subProcess":"Published Sub-Processes","contain":"Contains","checkAttributes":"Check attributes","checkOverview":"Check overview","unavailableResource":"Unavailable resource","localResource":"Resource can be accessed locally","performer":"Performer","linktoimage":"Link to Image","presentationAction":"Presentation Actions","searchGlobal":"Search all","searchLocal":"Search in this process","searchResults":"No Results Found","titlePage":"Start","emptyElement":"This element has not yet been documented","unsupported":"Your browser does not support content displayed by this page. <br> We recommend you upgrading your browser.","details":"Details","expand":"Expand","mainPoolProperties":"Main Process properties","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"2f72dc15-b76f-4adf-97b7-40f20d7a6bb5","containerName":"Efetuar Negociação Inicial","isSubprocess":false,"elements":[{"id":"effd8300-451c-44e9-bddb-52733a6e854e","value":"Efetuar Negociação Inicial"},{"id":"c48f5027-5a91-474c-939c-b22b9320b225","value":"Potencial Cliente"},{"id":"c12209a6-3cc8-49a5-9aec-9d65e9966ad3","value":"Inside"},{"id":"d6559eb1-004e-4835-8337-23754a6bfb4a","value":"Cliente + Inside"},{"id":"e004109f-0475-4bc1-9caf-44d5c8729e76","value":"Início"},{"id":"36afd091-c8ea-47db-b627-9deb40a39bb8","value":"Analisar Contato Inicial"},{"id":"57b7ec30-b804-47c6-aa21-68b94d37a5ab","value":"Cliente Propos Agendamento?"},{"id":"742115c7-9f10-447d-9d92-c5ef73031b9a","value":"Entrar em Contato (Site)"},{"id":"3ecb4727-ae9f-47ae-925e-fe0129bf369d","value":"Confirmar Agendamento por Email"},{"id":"98388f50-42bd-445b-906c-9858c55b828c","value":"Responder Contato Inicial"},{"id":"e6a4648d-a0f6-47ea-a172-8781774de351","value":"Verificar Resposta"},{"id":"18efbf04-6406-4699-8fb5-15850f16f861","value":"Dar Andamento?"},{"id":"077d6a77-190b-4129-ad92-ba273f5bd3ee","value":"Sugerir Agendamento"},{"id":"9d374d7f-fb01-48f3-ba24-e690e88dc308","value":"Negociação Encerrada"},{"id":"a830982f-6ed3-4c5c-b63f-02b28ab229bb","value":"Hora da Reunião"},{"id":"cbcb3676-9b14-4f1f-8df0-85cc5f5c59dd","value":"Efetuar Reunião Inicial"},{"id":"3069aea1-27e8-48c2-9fdc-a9389c801f40","value":"Cliente quer Continuar?"},{"id":"6e918ef7-3975-45f1-8793-45f19957462c","value":"Negociação OK - Iniciar Levantamentos"},{"id":"9afe053a-f6f9-4000-834a-e7b8e252f1a5"}]},{"containerId":"c0f71412-422b-4987-bcac-1fa33eb72c11","containerName":"Macro Processo - Inside","isSubprocess":false,"elements":[{"id":"93e334b9-3c9a-4532-bca2-955f606ea358","value":"Anexos, Documentos, Planilhas etc"},{"id":"a5b99455-c2ce-4bf9-aa3f-b111f6a3ec96","value":"Decisão Exclusiva (Segue apenas 1 fluxo)"},{"id":"de88a283-805d-48c3-a6f8-9307a98cbeaa","value":"Paralelismo"},{"id":"f0c86021-f098-4680-916d-3e3c404f982d","value":"Eventos de Fim"},{"id":"f294c8ed-cfd5-4938-96b3-cb3eb56f5125","value":"Eventos de Início (Normal, Temporal, Condicional)"},{"id":"5103c066-2927-4675-b83e-908c751db6ae","value":"Atividade Automática"},{"id":"a52b6eac-1a8f-4f61-a167-c53c4906f023","value":"Eventos Intermediários (Mensagens,  Tempo, etc)"},{"id":"87406d9f-caff-42e2-9ed7-8f811284708d","value":"Atividade Terceiros"},{"id":"146be2e9-2aab-4b1f-9b04-eb7ebda8e0e9","value":"Atividade Cliente"},{"id":"ff1ade1a-f096-42cf-bb8d-41a8854bb8ad","value":"Decisão com base em Eventos"},{"id":"cdc960b7-c4f2-4015-971b-fe811077b63d","value":"    Atividade Manual"},{"id":"af1d95f1-f637-44c4-b056-05d8409f3416","value":"Subprocesso"},{"id":"1b580f70-07af-44ef-884e-5201209e7026","value":"Decisão Inclusiva (Pode seguir 1 ou + Fluxos)"},{"id":"8ca87521-6d25-4bbe-a827-989de0b31dd7","value":"Gerenciamento de Clientes e Projetos"},{"id":"cd953e39-9539-453c-b496-46aaa5f0c7f8","value":"Controle Financeiro"},{"id":"50ac112c-5190-4b46-a92c-a3382ae4a01a","value":"Controle Fiscal"},{"id":"600162e0-6327-42bb-a49b-16d2c361c908"},{"id":"21de4f41-a256-4d60-b929-a62df091c0a8"},{"id":"c6aabba4-4921-471a-be31-83e80229aa48","value":""},{"id":"2542a7e8-a8bd-455a-a2c3-fe713c2fbf4b"},{"id":"45774851-fa9e-41b6-b643-21fc1bc8d239"},{"id":"9b0e8914-9722-4450-930b-773dd530bf2b","value":"Macro Processo Inside"},{"id":"321e60cb-7cc3-4f4b-9bc2-c8cb4219a787","value":"Início"},{"id":"1e3269ed-a809-439b-af7d-c9961fce27a2","value":"Fim"},{"id":"adc16388-a429-47e6-bba0-27a7869c32b1","value":"Parametrização"},{"id":"6aaab3d5-a3a3-4632-b5ad-2809a484dab2","value":"Mensurar Processos"},{"id":"f927b402-4b58-4ce0-b3f1-25d7756952bb","value":"Gerenciamento de Processos"},{"id":"f993c2e0-2efd-4260-9d2d-0dd7b3aac3f2","value":"Ideação de Produtos"},{"id":"b82bb679-f801-488e-8540-0893bf56ffa0","value":"Orientações em Tecnologia"},{"id":"8e634ede-8837-4c80-84cb-7c5a63959675"},{"id":"ddb330e0-d1dd-4c36-aea2-4eea513f1fe9"},{"id":"e916215e-2698-4a76-ae6e-ddf4851ffb3a"},{"id":"ccad7255-b595-4153-bdbe-4bff335abcc0"},{"id":"1785b463-4286-44df-a4fb-26948f853055"},{"id":"275722b6-41f8-4977-bcf1-bfd22d1cc2fc"},{"id":"c7979e3f-0588-4244-a2ef-6bfe0a23439b"}]},{"containerId":"8ca87521-6d25-4bbe-a827-989de0b31dd7","containerName":"Gerenciamento de Clientes e Projetos","isSubprocess":true,"elements":[]},{"containerId":"cd953e39-9539-453c-b496-46aaa5f0c7f8","containerName":"Controle Financeiro","isSubprocess":true,"elements":[]},{"containerId":"50ac112c-5190-4b46-a92c-a3382ae4a01a","containerName":"Controle Fiscal","isSubprocess":true,"elements":[]},{"containerId":"adc16388-a429-47e6-bba0-27a7869c32b1","containerName":"Parametrização","isSubprocess":true,"elements":[]},{"containerId":"6aaab3d5-a3a3-4632-b5ad-2809a484dab2","containerName":"Mensurar Processos","isSubprocess":true,"elements":[]},{"containerId":"d23c386e-bc6f-4bb8-80e6-cd899b32c2f7","containerName":"Gerenciamento de Processos","isSubprocess":false,"elements":[{"id":"abf97c2c-ab91-4796-83e2-9466eb2ea5fd","value":"Gerenciamento de Processos"},{"id":"52213657-54c6-4a73-9f2a-a12e0e63fc68","value":"Inside"},{"id":"97a1c79d-cba7-407f-bd13-29a980520acf","value":"Contato Potencial Cliente"},{"id":"882ee7de-0eb3-4aea-8943-8007136534b7","value":"Projeto Iniciado"},{"id":"6e6f7ae3-2928-4499-bddd-9d48c3caba3d","value":"Levantar, Modelar e Validar Processos As Is"},{"id":"6803ab5d-460e-45c3-86a2-e2686b29a3e1","value":"Qual decisão?"},{"id":"4cb95da7-b7e9-41d8-98c1-7618e3214b96","value":""},{"id":"91d24f25-e70d-48c7-9ad7-30ead33961b9","value":"Analisar Processos e gerar Melhorias"},{"id":"821134f7-35ca-46b8-88da-eec1d56adc11","value":"Levantar As Is?"},{"id":"3475dd4a-1e08-4a17-ac7c-ebb3a9d200a3","value":"Levantar, Modelar e Validar Processos To Be"},{"id":"e3289f92-d11a-4b24-8453-c28ef837fec2","value":"Etapa Processos Encerrada"},{"id":"9a159dba-e0a1-41b2-815c-245ea0f1a5ae","value":"Efetuar Negociação Inicial"},{"id":"711beaf1-8f9b-4033-aafc-3c6e27a72249"}]},{"containerId":"6e6f7ae3-2928-4499-bddd-9d48c3caba3d","containerName":"Levantar, Modelar e Validar Processos As Is","isSubprocess":true,"elements":[]},{"containerId":"91d24f25-e70d-48c7-9ad7-30ead33961b9","containerName":"Analisar Processos e gerar Melhorias","isSubprocess":true,"elements":[]},{"containerId":"3475dd4a-1e08-4a17-ac7c-ebb3a9d200a3","containerName":"Levantar, Modelar e Validar Processos To Be","isSubprocess":true,"elements":[]}]}