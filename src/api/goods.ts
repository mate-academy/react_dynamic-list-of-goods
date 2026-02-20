/**
 * ============================================================================
 * FUNÇÃO: getAll()
 * ============================================================================
 *
 * Responsabilidade Principal:
 * Fazer uma requisição HTTP para buscar TODOS os produtos disponíveis
 * de um arquivo JSON hospedado em um servidor remoto.
 *
 * Retorno: Uma Promise que será resolvida com um array de produtos (Good[])
 *
 * ============================================================================
 */
// LINHA 1: Importação do tipo TypeScript
import { Good } from '../types/Good';
// ├─ Importa a interface 'Good' que define a estrutura de cada produto
// ├─ Cada produto tem: id (number), name (string), color (string)
// └─ Vem do arquivo: src/types/Good.ts
// LINHA 3-4: Definição da URL da API
// eslint-disable-next-line
// ├─ Desativa o linter para a próxima linha (evita avisos)
// └─ Útil quando você sabe que o código está correto mas o linter reclama
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

// ├─ Armazena a URL do servidor onde os dados estão hospedados
// ├─ Este é um endpoint público que retorna um arquivo JSON com todos os produtos
// ├─ Exemplo de resposta:
// │  [
// │    { "id": 1, "name": "Potato", "color": "red" },
// │    { "id": 2, "name": "Pear", "color": "green" },
// │    ...
// │  ]
// └─ Usando template literal (backticks) para facilitar futuras interpolações
// LINHA 6: Declaração da função exportada
export function getAll(): Promise<Good[]> {
  // ├─ 'export' = Torna a função disponível para importação em outros arquivos
  // ├─ 'function' = Sintaxe tradicional de função (alternativa: arrow function)
  // ├─ 'getAll()' = Nome descritivo que indica: "obter todos os produtos"
  // ├─ 'Promise<Good[]>' = Tipo de retorno:
  // │  ├─ Promise = Operação assíncrona (não retorna resultado imediatamente)
  // │  └─ <Good[]> = Quando resolvida, retornará um array de objetos Good
  // └─ Exemplo: Promise<Good[]> significa "uma promessa que eventualmente retornará Good[]"
  // LINHA 7: Iniciando a requisição HTTP
  return fetch(API_URL).then(response => {
    // ├─ 'fetch(API_URL)' = Faz uma requisição HTTP GET para a URL
    // ├─ Retorna uma Promise que resolve com um objeto Response
    // ├─ '.then(response => {...})' = Executa quando a resposta chega do servidor
    // ├─ 'response' = Objeto contendo:
    // │  ├─ response.ok = boolean (true se status 200-299, false caso contrário)
    // │  ├─ response.status = número do status HTTP (200, 404, 500, etc)
    // │  ├─ response.statusText = descrição do status ("OK", "Not Found", etc)
    // │  └─ response.json() = método para converter resposta em JSON
    // └─ Nota: fetch NÃO rejeita a Promise em caso de erro HTTP (apenas em erro de rede)
    // LINHA 8-10: Verificação de erro
    if (!response.ok) {
      // ├─ Verifica se a resposta NÃO foi bem-sucedida
      // ├─ response.ok é false quando status < 200 ou > 299
      // ├─ Exemplos de status não-ok:
      // │  ├─ 404 = Recurso não encontrado
      // │  ├─ 500 = Erro interno do servidor
      // │  └─ 403 = Acesso proibido
      // └─ Se não for ok, precisa lançar um erro manualmente
      throw new Error(`${response.status} ${response.statusText}`);
      // ├─ 'throw' = Lança (dispara) um erro
      // ├─ 'new Error()' = Cria um novo objeto de erro
      // ├─ Template literal com interpolação:
      // │  ├─ ${response.status} = Insere o código do erro (ex: 404)
      // │  └─ ${response.statusText} = Insere a descrição (ex: "Not Found")
      // ├─ Exemplo de mensagem: "404 Not Found"
      // ├─ Este erro será capturado por um .catch() na cadeia de Promises
      // └─ Impede que dados inválidos sejam processados
    }

    // LINHA 12: Convertendo resposta para JSON
    return response.json();
    // ├─ 'response.json()' = Método que:
    // │  ├─ Lê o corpo da resposta como texto
    // │  ├─ Faz parsing do JSON para objeto JavaScript
    // │  └─ Retorna uma nova Promise que resolve com o objeto parseado
    // ├─ Exemplo: string JSON → objeto JavaScript
    // │  ├─ De: '[{"id":1,"name":"Potato","color":"red"}]'
    // │  └─ Para: [{id: 1, name: "Potato", color: "red"}]
    // ├─ Retorna uma Promise que será resolvida com Good[]
    // └─ Este valor será passado para o próximo .then() na cadeia
  });
  // └─ Fecha o .then() e a função
}

export const get5First = (): Promise<Good[]> => {
  return getAll().then(goods =>
    [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
  );
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
};
