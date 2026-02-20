/**
 * ============================================================================
 * COMPONENTE: GoodsList
 * ============================================================================
 *
 * Responsabilidade Principal:
 * Renderizar uma lista não-ordenada (<ul>) de produtos (goods) com seus
 * respectivos nomes e cores.
 *
 * Este é um componente de apresentação (presentational component) que recebe
 * dados via props e os exibe na tela sem gerenciar estado próprio.
 *
 * Otimização: Utiliza React.memo para evitar re-renders desnecessários quando
 * os props não mudam, melhorando a performance da aplicação.
 * ============================================================================
 */
import React from 'react';
import { Good } from './types/Good';
/**
 * DEFINIÇÃO DO TIPO Props
 *
 * Define a interface de props que este componente espera receber.
 *
 * @typedef {Object} Props
 * @property {Good[]} goods - Array de objetos do tipo Good
 *   - Cada objeto Good contém:
 *     * id (number): Identificador único do produto
 *     * name (string): Nome do produto (ex: "Apple", "Potato")
 *     * color (string): Cor do produto em formato CSS (ex: "red", "green")
 *
 * Exemplo de dados esperados:
 * [
 *   { id: 1, name: "Potato", color: "red" },
 *   { id: 2, name: "Pear", color: "green" },
 *   { id: 3, name: "Mellon", color: "blue" }
 * ]
 */
type Props = {
  goods: Good[];
};
/**
 * COMPONENTE: GoodsList
 *
 * Sintaxe: React.FC<Props> = React.memo(({ goods }) => (...))
 *
 * Explicação de cada parte:
 *
 * 1. React.FC<Props>
 *    - FC = Functional Component (Componente Funcional)
 *    - <Props> = Tipo genérico que especifica qual interface de props usar
 *    - Informa ao TypeScript que este é um componente React que recebe Props
 *
 * 2. React.memo()
 *    - Função de otimização que envolve o componente
 *    - Previne re-renders quando os props não mudam
 *    - Compara os props anteriores com os novos props
 *    - Se forem iguais, reutiliza o render anterior (memoization)
 *    - Melhora performance em listas grandes
 *
 * 3. ({ goods })
 *    - Destructuring dos props
 *    - Extrai apenas a propriedade 'goods' do objeto Props
 *    - Equivalente a: (props) => { const { goods } = props; ... }
 *
 * 4. => (...)
 *    - Arrow function que retorna JSX
 *    - Não precisa de return explícito pois é uma expressão
 */
export const GoodsList: React.FC<Props> = React.memo(({ goods }) => (
  /**
   * ESTRUTURA JSX - Lista Não-Ordenada
   *
   * <ul> = Elemento HTML para lista não-ordenada
   * Renderiza um elemento <ul> contendo múltiplos itens <li>
   */
  <ul>
    {/**
     * RENDERIZAÇÃO DINÂMICA COM .map()
     *
     * Sintaxe: {goods.map(good => (...))}
     *
     * O que acontece aqui:
     * 1. Itera sobre cada item do array 'goods'
     * 2. Para cada item, executa a função callback
     * 3. Transforma cada objeto Good em um elemento <li> JSX
     * 4. Retorna um novo array de elementos JSX
     * 5. React renderiza todos esses elementos na tela
     *
     * Exemplo com dados:
     * goods = [
     *   { id: 1, name: "Potato", color: "red" },
     *   { id: 2, name: "Pear", color: "green" }
     * ]
     *
     * Resultado renderizado:
     * <ul>
     *   <li style="color: red">Potato</li>
     *   <li style="color: green">Pear</li>
     * </ul>
     */}
    {goods.map(good => (
      /**
       * ELEMENTO DE LISTA - <li>
       *
       * Renderiza um item de lista para cada produto
       *
       * Atributos utilizados:
       *
       * 1. key={good.id}
       *    - OBRIGATÓRIO em listas React
       *    - Ajuda React a identificar qual item mudou/foi adicionado/removido
       *    - Melhora performance e evita bugs em atualizações
       *    - Deve ser único entre irmãos (siblings)
       *    - Nunca use índice do array como key (causa bugs)
       *    - Neste caso, usamos 'id' que é único para cada produto
       *
       * 2. data-cy="good"
       *    - Atributo de teste (Cypress)
       *    - Usado para selecionar elementos em testes automatizados
       *    - Não afeta o funcionamento visual da aplicação
       *    - Permite que testes encontrem elementos de forma confiável
       *
       * 3. style={{ color: good.color }}
       *    - Aplica estilo inline ao elemento
       *    - {{ ... }} = objeto JavaScript dentro de JSX
       *    - color: good.color = propriedade CSS com valor do produto
       *    - Exemplo: style={{ color: "red" }} renderiza como style="color: red"
       *    - Cada produto recebe a cor armazenada em good.color
       */
      <li key={good.id} data-cy="good" style={{ color: good.color }}>
        {/**
         * CONTEÚDO DO ITEM
         *
         * {good.name}
         * - Exibe o nome do produto
         * - Exemplo: "Potato", "Apple", "Bread"
         * - Usa interpolação JSX para inserir valor dinâmico
         */}
        {good.name}
      </li>
    ))}
  </ul>
));
/**
 * DISPLAYNAME - Identificação do Componente
 *
 * GoodsList.displayName = 'GoodsList';
 *
 * Propósito:
 * - Define um nome legível para o componente em ferramentas de debug
 * - Aparece no React DevTools com este nome
 * - Útil quando o componente é envolvido por funções como React.memo
 * - Sem isso, React DevTools mostraria "Memo(GoodsList)" ou algo similar
 *
 * Benefício para iniciantes:
 * - Facilita depuração e compreensão da árvore de componentes
 * - Melhora legibilidade em ferramentas de desenvolvimento
 */
GoodsList.displayName = 'GoodsList';
