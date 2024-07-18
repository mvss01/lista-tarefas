## 🚀 Lista de Tarefas - Aplicativo React Native

Este repositório contém o projeto de um aplicativo de lista de tarefas desenvolvido com React Native e Expo. O objetivo principal deste projeto é praticar e desenvolver habilidades em React Native, gerenciamento de estado com context API e useReducer, navegação entre telas com React Navigation e estilização.

### 📸 Printscreens
   <p align="center">
   <img src="/assets/print1.jpg" alt="Printscreen do app" width="200px" style="margin: 10px;">
   <img src="/assets/print2.jpg" alt="Printscreen do app" width="200px" style="margin: 10px;">
   </p>
### 📝 Funcionalidades Principais

1. **Adição de Tarefas:**
   - Adicione novas tarefas à lista com um título exclusivo.

2. **Marcação de Conclusão de Tarefas:**
   - Marque tarefas como concluídas ou não concluídas com um simples toque.

3. **Remoção de Tarefas:**
   - Remova tarefas da lista principal, movendo-as para o histórico.

4. **Restauração de Tarefas:**
   - Restaure tarefas do histórico para a lista principal.

5. **Exclusão Permanente de Tarefas:**
   - Exclua permanentemente tarefas do histórico.

6. **Limpeza da Lixeira:**
   - Limpe todas as tarefas da lixeira de uma vez.

7. **Validação do Valor de Entrada:**
   - Validação do valor de entrada para garantir que não haja duplicatas ou entradas vazias tanto na lista principal quanto no histórico.

### ⚙️ Estrutura do Projeto

A estrutura do projeto é organizada para garantir uma fácil manutenção e escalabilidade:

```
lista-tarefas/
  ├── src/
  │   ├── contexts/
  │   ├── routes/
  │   ├── components/
  │   └── screens/
  │       ├── Historic/
  │       └── Home/
  └── App.tsx
```

### 🔧 Tecnologias Utilizadas

- **React Native:** Framework principal para desenvolvimento do aplicativo móvel.
- **Expo:** Ferramenta para desenvolvimento e construção do aplicativo.
- **Context API e useReducer:** Gerenciamento de estado centralizado.
- **TypeScript:** Tipagem estática para maior segurança e autocompletar durante o desenvolvimento.
- **React Navigation com Stack Navigation** Navegação entre telas.

### 📈 Próximos Passos

- Alertas para uma entrada repetida e exclusão de itens.
