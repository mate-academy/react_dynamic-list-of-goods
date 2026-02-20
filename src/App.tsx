import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
/**
 * Componente principal da aplicação de lista dinâmica de produtos
 *
 * Responsabilidades:
 * - Gerenciar o estado dos produtos carregados
 * - Fornecer três botões para diferentes tipos de carregamento
 * - Renderizar a lista de produtos usando o componente GoodsList
 */
export const App: React.FC = () => {
  /**
   * Estado que armazena a lista de produtos
   *
   * @type {Good[]} - Array de objetos Good com propriedades: id, name, color
   * @default [] - Inicialmente vazio, sem produtos carregados
   */
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  /**
   * Função para carregar TODOS os produtos disponíveis
   *
   * Fluxo:
   * 1. Chama a função getAll() da API (src/api/goods.ts)
   * 2. getAll() faz uma requisição HTTP para buscar todos os produtos
   * 3. A Promise retornada é resolvida com o array completo de produtos
   * 4. setGoods() atualiza o estado com todos os produtos
   *
   * Resultado esperado: Exibe os 13 produtos do arquivo goods.json
   *
   * @function handleLoadAll
   * @returns {void} - Não retorna valor, apenas atualiza o estado
   */
  const handleLoadAll = () => {
    setErrorMessage(null);
    getAll()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  };

  /**
   * Função para carregar apenas os PRIMEIROS 5 PRODUTOS (ordenados alfabeticamente)
   *
   * Fluxo:
   * 1. Chama a função get5First() da API (src/api/goods.ts)
   * 2. get5First() internamente:
   *    - Chama getAll() para buscar todos os produtos
   *    - Cria uma cópia do array com spread operator [...goods]
   *    - Ordena alfabeticamente por nome usando sort() com localeCompare()
   *    - Extrai apenas os primeiros 5 itens com slice(0, 5)
   * 3. A Promise retornada contém apenas 5 produtos ordenados
   * 4. setGoods() atualiza o estado com estes 5 produtos
   *
   * Resultado esperado: Exibe 5 produtos em ordem alfabética
   * Exemplo: Apple, Bread, Carrot, Dumplings, Eggs
   *
   * @function handleLoadFirst5
   * @returns {void} - Não retorna valor, apenas atualiza o estado
   */
  const handleLoadFirst5 = () => {
    setErrorMessage(null);
    get5First()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  };

  /**
   * Função para carregar apenas os PRODUTOS VERMELHOS
   *
   * Fluxo:
   * 1. Chama a função getRedGoods() da API (src/api/goods.ts)
   * 2. getRedGoods() internamente:
   *    - Chama getAll() para buscar todos os produtos
   *    - Filtra o array usando filter() para manter apenas produtos com color === 'red'
   *    - Retorna um novo array contendo somente os produtos vermelhos
   * 3. A Promise retornada contém apenas produtos com cor vermelha
   * 4. setGoods() atualiza o estado com estes produtos filtrados
   *
   * Resultado esperado: Exibe 5 produtos vermelhos
   * Exemplo: Potato, Ice cream, Fish, Garlic, Dumplings
   *
   * @function handleLoadRed
   * @returns {void} - Não retorna valor, apenas atualiza o estado
   */
  const handleLoadRed = () => {
    setErrorMessage(null);
    getRedGoods()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  };

  /**
   * Renderização do componente
   *
   * Estrutura:
   * - Div com classe "App" (estilos em src/App.scss)
   * - Título h1 descrevendo a aplicação
   * - Três botões com event handlers:
   *   1. "Load all goods" - dispara handleLoadAll
   *   2. "Load 5 first goods" - dispara handleLoadFirst5
   *   3. "Load red goods" - dispara handleLoadRed
   * - Componente GoodsList que renderiza a lista de produtos
   *
   * Props passadas para GoodsList:
   * - goods: Good[] - Array de produtos a ser exibido
   *
   * Nota: GoodsList é otimizado com React.memo para evitar re-renders desnecessários
   */
  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      {/* Botão para carregar todos os produtos */}
      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>
      {/* Botão para carregar os primeiros 5 produtos ordenados alfabeticamente */}
      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirst5}
      >
        Load 5 first goods
      </button>
      {/* Botão para carregar apenas os produtos de cor vermelha */}
      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      {errorMessage && (
        <div className="error" data-cy="error-message">
          {errorMessage}
        </div>
      )}

      {/* Componente que renderiza a lista de produtos */}
      <GoodsList goods={goods} />
    </div>
  );
};
