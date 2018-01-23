export const fetchLists = id => (
  $.ajax({
    method: 'GET',
    url: 'api/lists'
  })
);

export const createList = list => (
  $.ajax({
    method: 'POST',
    url: 'api/lists',
    data: { list }
  })
);

export const editList = list => (
  $.ajax({
    method: 'PATH',
    url: `api/lists/${list.id}`,
    data: { list }
  })
);

export const deleteList = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/lists/${id}`
  })
);