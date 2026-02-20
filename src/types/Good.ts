/**
 * ============================================================================
 * ARQUIVO: src/types/Good.ts
 * ============================================================================
 *
 * PROPÓSITO PRINCIPAL:
 * Definir a estrutura (formato) que cada produto deve ter na aplicação.
 *
 * É como criar um "molde" ou "template" que todos os produtos devem seguir.
 * Exemplo: assim como um formulário de cadastro tem campos específicos,
 * este arquivo define quais campos cada produto deve ter.
 * ============================================================================
 */
/**
 * LINHA 1: Declaração da Interface "Good"
 *
 * O que é uma Interface?
 * ├─ Uma interface é um "contrato" ou "molde" em TypeScript
 * ├─ Define quais propriedades um objeto deve ter
 * ├─ Define o tipo de cada propriedade
 * ├─ Ajuda a evitar erros no código
 * └─ É usada apenas durante o desenvolvimento (não aparece no código final)
 *
 * Sintaxe: export interface Good { ... }
 * ├─ export = Torna a interface disponível para importação em outros arquivos
 * ├─ interface = Palavra-chave do TypeScript
 * └─ Good = Nome da interface (convenção: usar PascalCase - primeira letra maiúscula)
 */
export interface Good {
  /**
   * PROPRIEDADE 1: id
   *
   * Tipo: number (número inteiro)
   *
   * Propósito:
   * ├─ Identificador único de cada produto
   * ├─ Cada produto tem um ID diferente
   * ├─ Usado para diferenciar produtos
   * └─ Exemplo: 1, 2, 3, 4, etc.
   *
   * Por que é importante?
   * ├─ React usa o 'id' como 'key' ao renderizar listas
   * ├─ Ajuda React a saber qual item mudou
   * ├─ Melhora a performance da aplicação
   * └─ Evita bugs em atualizações de lista
   *
   * Exemplo de uso:
   * const produto = { id: 1, name: "Potato", color: "red" };
   * console.log(produto.id); // Saída: 1
   */
  id: number;
  /**
   * PROPRIEDADE 2: name
   *
   * Tipo: string (texto)
   *
   * Propósito:
   * ├─ Armazena o nome do produto
   * ├─ É o que o usuário vê na tela
   * └─ Exemplo: "Potato", "Apple", "Bread", "Fish"
   *
   * Por que é importante?
   * ├─ Identifica o produto de forma legível para o usuário
   * ├─ Pode ser usado para busca e filtro
   * └─ Essencial para a experiência do usuário
   *
   * Exemplo de uso:
   * const produto = { id: 1, name: "Potato", color: "red" };
   * console.log(produto.name); // Saída: "Potato"
   */
  name: string;
  /**
   * PROPRIEDADE 3: color
   *
   * Tipo: string (texto)
   *
   * Propósito:
   * ├─ Armazena a cor do produto em formato CSS
   * ├─ Usado para estilizar o produto na tela
   * └─ Exemplo: "red", "green", "blue"
   *
   * Por que é importante?
   * ├─ Permite diferenciar produtos visualmente
   * ├─ Pode ser usado para filtrar produtos por cor
   * ├─ Aplicado como estilo inline no componente GoodsList
   * └─ Melhora a experiência visual do usuário
   *
   * Formato esperado:
   * ├─ Nomes de cores CSS: "red", "green", "blue", "yellow", etc.
   * ├─ Códigos hexadecimais: "#FF0000", "#00FF00", "#0000FF"
   * ├─ RGB: "rgb(255, 0, 0)", "rgb(0, 255, 0)"
   * └─ Qualquer formato válido em CSS
   *
   * Exemplo de uso:
   * const produto = { id: 1, name: "Potato", color: "red" };
   * console.log(produto.color); // Saída: "red"
   *
   * Como é usado no componente:
   * <li style={{ color: produto.color }}>
   *   {produto.name}
   * </li>
   *
   * Resultado HTML:
   * <li style="color: red">Potato</li>
   */
  color: string;
  /**
   * FIM DA INTERFACE
   *
   * Resumo das propriedades:
   * ┌─────────────────────────────────────────────┐
   * │ Propriedade │ Tipo   │ Exemplo             │
   * ├─────────────────────────────────────────────┤
   * │ id          │ number │ 1                   │
   * │ name        │ string │ "Potato"            │
   * │ color       │ string │ "red"               │
   * └─────────────────────────────────────────────┘
   */
}
/**
 * ============================================================================
 * COMO USAR ESTA INTERFACE
 * ============================================================================
 *
 * EXEMPLO 1: Criar um objeto que segue a interface
 * ────────────────────────────────────────────────
 * const meuProduto: Good = {
 *   id: 1,
 *   name: "Potato",
 *   color: "red"
 * };
 *
 * EXEMPLO 2: Criar um array de produtos
 * ────────────────────────────────────────────────
 * const produtos: Good[] = [
 *   { id: 1, name: "Potato", color: "red" },
 *   { id: 2, name: "Apple", color: "green" },
 *   { id: 3, name: "Bread", color: "blue" }
 * ];
 *
 * EXEMPLO 3: Usar em uma função
 * ────────────────────────────────────────────────
 * function exibirProduto(produto: Good): void {
 *   console.log(`${produto.name} é ${produto.color}`);
 *   // Saída: "Potato é red"
 * }
 *
 * EXEMPLO 4: Usar em um componente React
 * ────────────────────────────────────────────────
 * type Props = {
 *   goods: Good[];  // Array de produtos
 * };
 *
 * export const GoodsList: React.FC<Props> = ({ goods }) => (
 *   <ul>
 *     {goods.map(good => (
 *       <li key={good.id} style={{ color: good.color }}>
 *         {good.name}
 *       </li>
 *     ))}
 *   </ul>
 * );
 *
 * ============================================================================
 * BENEFÍCIOS DE USAR INTERFACE
 * ============================================================================
 *
 * ✅ SEGURANÇA DE TIPO
 *    └─ TypeScript avisa se você tentar usar uma propriedade que não existe
 *
 * ✅ AUTOCOMPLETAR
 *    └─ Seu editor sugere as propriedades disponíveis
 *
 * ✅ DOCUMENTAÇÃO
 *    └─ Deixa claro quais dados cada produto deve ter
 *
 * ✅ PREVINE BUGS
 *    └─ Evita erros como: produto.nome (deveria ser produto.name)
 *
 * ✅ REUTILIZAÇÃO
 *    └─ Pode usar a mesma interface em vários arquivos
 *
 * ============================================================================
 */
