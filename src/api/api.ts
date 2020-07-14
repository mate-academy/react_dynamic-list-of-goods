const url = 'https://mate.academy/students-api/goods';

export const response = fetch(url).then(respond => respond.json()).then(result => result.data);
