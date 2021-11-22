const APIkey = "24369535-8c0b0d7fa83b493b4b387e45e";

function fetchImage(type, page) {
  const baseURL = `https://pixabay.com/api/?q=${type}&page=${page}&key=${APIkey}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(baseURL).then((Response) => {
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
