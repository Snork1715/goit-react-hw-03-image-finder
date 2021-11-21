function fetchImage(type, page, key) {
  return fetch(
    `https://pixabay.com/api/?q=${type}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((Response) => {
    if (Response.ok) {
      return Response.json();
    }
    return Promise.reject(
      new Error(`Выбран некорректный тип фотографий ${type}`)
    );
  });
}

const api = { fetchImage };

export default api;
